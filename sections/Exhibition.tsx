import React, { useState, useEffect, useRef, useCallback } from 'react';
import { EXHIBITION_WORKS, ExhibitionWork } from '../constants';
import { askGeminiAboutArt } from '../services/gemini';
import { ChevronLeft, ChevronRight, X, Loader2 } from 'lucide-react';
import { Section } from '../types';

interface ExhibitionProps {
  setSection: (s: Section) => void;
}

// 每张卡片根据与中心的偏移量计算 3D 样式（translateX 使用 vw，实现 iPod Cover Flow 分散感）
function getCardStyle(offset: number): React.CSSProperties {
  const absOffset = Math.abs(offset);

  if (absOffset > 3) {
    return { opacity: 0, pointerEvents: 'none', zIndex: 0 };
  }

  // vw: 视口宽度比例偏移，实现真正的分散效果
  const configs: Record<number, { vw: number; tz: number; ry: number; scale: number; opacity: number; z: number }> = {
    0: { vw: 0,  tz: 0,    ry: 0,  scale: 1.0,  opacity: 1,    z: 10 },
    1: { vw: 34, tz: -60,  ry: 65, scale: 0.78, opacity: 0.72, z: 7  },
    2: { vw: 60, tz: -110, ry: 75, scale: 0.55, opacity: 0.38, z: 4  },
    3: { vw: 80, tz: -150, ry: 82, scale: 0.38, opacity: 0.15, z: 1  },
  };

  const cfg = configs[absOffset];
  const txStr = cfg.vw === 0 ? '0px' : `${offset < 0 ? '-' : ''}${cfg.vw}vw`;
  // 右侧卡片 rotateY 为负（展示左侧面），左侧卡片为正（展示右侧面）
  const ry = offset > 0 ? -cfg.ry : cfg.ry;

  return {
    transform: `translateX(${txStr}) translateZ(${cfg.tz}px) rotateY(${ry}deg) scale(${cfg.scale})`,
    opacity: cfg.opacity,
    zIndex: cfg.z,
  };
}

const Exhibition: React.FC<ExhibitionProps> = ({ setSection }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerWork, setDrawerWork] = useState<ExhibitionWork | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);
  const [entering, setEntering] = useState(true); // 入场黑幕
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);
  const mouseDidDrag = useRef(false); // 区分点击和拖拽
  const works = EXHIBITION_WORKS;

  // 入场动画
  useEffect(() => {
    const t = setTimeout(() => setEntering(false), 800);
    return () => clearTimeout(t);
  }, []);

  // 键盘导航
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (drawerOpen) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, drawerOpen]);

  const prev = useCallback(() => {
    setActiveIndex(i => (i - 1 + works.length) % works.length);
  }, [works.length]);

  const next = useCallback(() => {
    setActiveIndex(i => (i + 1) % works.length);
  }, [works.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // 只响应左键
    mouseStartX.current = e.clientX;
    mouseDidDrag.current = false;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mouseStartX.current === null) return;
    if (Math.abs(e.clientX - mouseStartX.current) > 6) {
      mouseDidDrag.current = true;
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (mouseStartX.current === null) return;
    const delta = mouseStartX.current - e.clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? next() : prev();
    }
    mouseStartX.current = null;
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    mouseStartX.current = null;
    setIsDragging(false);
  };

  const openDrawer = async (work: ExhibitionWork) => {
    setDrawerWork(work);
    setDrawerOpen(true);
    setAiAnalysis(null);
    setLoadingAi(true);
    const analysis = await askGeminiAboutArt(work.title);
    setAiAnalysis(analysis);
    setLoadingAi(false);
  };

  const handleCardClick = (index: number) => {
    if (mouseDidDrag.current) return; // 拖拽时不触发点击
    if (index !== activeIndex) {
      setActiveIndex(index);
    } else {
      openDrawer(works[index]);
    }
  };

  const activeWork = works[activeIndex];

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden select-none"
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, #2e0e0e 0%, #1a0707 45%, #0a0303 100%)',
        cursor: isDragging ? 'grabbing' : 'default',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* 入场黑幕 */}
      <div
        className="fixed inset-0 z-50 bg-black pointer-events-none transition-opacity duration-[900ms]"
        style={{ opacity: entering ? 1 : 0 }}
      />

      {/* 顶部展馆标题栏 */}
      <div className="relative z-20 flex items-center justify-between px-6 pt-6 pb-2">
        <button
          onClick={() => setSection('home')}
          className="flex items-center space-x-1 text-[#b08d57] hover:text-[#f5e9db] transition-colors text-sm font-medium tracking-widest group"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>返回门户</span>
        </button>

        <div className="text-center">
          <p className="text-[#b08d57] text-xs tracking-[0.4em] uppercase font-light mb-1">革命文件数字展</p>
          <h1 className="text-[#f5e9db] text-lg sm:text-xl font-black serif tracking-widest">沉浸观展</h1>
          <div className="w-16 h-px bg-[#b08d57] mx-auto mt-1 opacity-60" />
        </div>

        <div className="text-right">
          <p className="text-[#b08d57] text-xs tracking-widest font-light">
            第 <span className="text-[#f5e9db] font-bold text-base">{activeIndex + 1}</span>
            <span className="opacity-50"> / {works.length}</span> 件藏品
          </p>
        </div>
      </div>

      {/* 聚光灯 — 两层：暖白主光 + 红色环境光晕 */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* 暖白聚光锥，模拟射灯打在中央 */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 38% 58% at 50% 40%, rgba(255,230,190,0.22) 0%, rgba(220,140,100,0.08) 45%, transparent 70%)',
        }} />
        {/* 延安红环境散光，烘托整体氛围 */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 75% 55% at 50% 55%, rgba(156,61,61,0.18) 0%, transparent 75%)',
        }} />
      </div>

      {/* 3D 轮播区域 */}
      <div
        className="relative z-10 flex items-center justify-center"
        style={{ height: 'calc(100vh - 180px)', perspective: '1200px' }}
      >
        <div className="relative w-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d', height: '100%' }}>
          {works.map((work, index) => {
            const offset = index - activeIndex;
            // 环形偏移：处理头尾连接
            const wrappedOffset = (() => {
              const half = Math.floor(works.length / 2);
              if (offset > half) return offset - works.length;
              if (offset < -half) return offset + works.length;
              return offset;
            })();
            const style = getCardStyle(wrappedOffset);
            const isActive = wrappedOffset === 0;

            return (
              <div
                key={work.id}
                onClick={() => handleCardClick(index)}
                className="absolute cursor-pointer"
                style={{
                  ...style,
                  transition: 'all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  width: 'min(312px, 72vw)',
                }}
              >
                {/* 相框卡片 */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    boxShadow: isActive
                      ? '0 0 0 2px #b08d57, 0 0 0 5px #3d1f0a, 0 0 40px rgba(176,141,87,0.35), 0 20px 60px rgba(0,0,0,0.8)'
                      : '0 0 0 2px #5d3a1a, 0 0 0 4px #1a0d04, 0 10px 30px rgba(0,0,0,0.6)',
                    transition: 'box-shadow 0.45s ease',
                  }}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-[#0d0604]">
                    <img
                      src={work.imageUrl}
                      alt={work.title}
                      className="w-full h-full object-cover"
                      style={{
                        filter: isActive ? 'grayscale(0%) brightness(1)' : 'grayscale(60%) brightness(0.55)',
                        transition: 'filter 0.45s ease',
                      }}
                      draggable={false}
                    />
                  </div>

                  {/* 卡片底部倒影遮罩 */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
                </div>

                {/* 点击提示（仅中心卡片） */}
                {isActive && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black/50 text-[#b08d57] text-xs tracking-widest px-3 py-1 border border-[#b08d57]/50">
                      点击查看详情
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 铭牌 — 中心作品信息 */}
      <div className="relative z-20 text-center px-4 -mt-2">
        <div className="inline-block border border-[#b08d57]/30 bg-black/40 px-8 py-3 backdrop-blur-sm">
          <h2
            className="text-[#f5e9db] text-lg sm:text-xl font-bold serif tracking-widest mb-1 transition-all duration-300"
            key={activeWork.id + '-title'}
          >
            {activeWork.title}
          </h2>
          <p className="text-[#b08d57] text-sm tracking-wider">
            {activeWork.artist} <span className="opacity-40 mx-2">·</span> {activeWork.year}
          </p>
        </div>
      </div>

      {/* 左右箭头 */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-[#b08d57]/40 text-[#b08d57] hover:text-[#f5e9db] hover:border-[#b08d57] hover:bg-[#b08d57]/10 transition-all rounded-full"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-[#b08d57]/40 text-[#b08d57] hover:text-[#f5e9db] hover:border-[#b08d57] hover:bg-[#b08d57]/10 transition-all rounded-full"
      >
        <ChevronRight size={22} />
      </button>

      {/* 底部圆点指示器 */}
      <div className="relative z-20 flex justify-center gap-1.5 mt-4 pb-6">
        {works.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === activeIndex ? '20px' : '6px',
              height: '6px',
              background: i === activeIndex ? '#b08d57' : 'rgba(176,141,87,0.3)',
            }}
          />
        ))}
      </div>

      {/* 右侧抽屉遮罩 */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-30"
          style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* 右侧抽屉 */}
      <div
        className="fixed top-0 right-0 h-full z-40 flex flex-col text-[#f5e9db] overflow-y-auto"
        style={{
          width: 'min(420px, 100vw)',
          transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          boxShadow: drawerOpen ? '-8px 0 60px rgba(0,0,0,0.7)' : 'none',
          background: 'linear-gradient(180deg, #1b0f07 0%, #090503 100%)',
          borderLeft: '1px solid rgba(176,141,87,0.28)',
        }}
      >
        {drawerWork && (
          <>
            {/* 关闭按钮 */}
            <button
              onClick={() => setDrawerOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center text-[#b08d57] hover:text-[#f5e9db] border border-[#b08d57]/30 hover:border-[#b08d57] rounded-full transition-all"
            >
              <X size={18} />
            </button>

            {/* 作品大图 */}
            <div className="relative w-full flex-shrink-0" style={{ paddingTop: '75%' }}>
              <img
                src={drawerWork.imageUrl}
                alt={drawerWork.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #0f0705 0%, transparent 50%)' }} />
            </div>

            {/* 详情内容 */}
            <div className="flex-1 px-6 pb-10 -mt-6 relative">
              {/* 分类标签 */}
              <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest bg-[#9c3d3d] text-[#f5e9db] mb-4">
                {drawerWork.category}
              </span>

              <h2 className="text-[#f5e9db] text-2xl sm:text-3xl font-black serif mb-2 leading-snug">
                {drawerWork.title}
              </h2>
              <p className="text-[#b08d57] text-sm tracking-wider mb-6">
                {drawerWork.artist} <span className="opacity-40 mx-2">·</span> {drawerWork.year}年
              </p>

              {/* 历史背景 */}
              <div className="mb-6">
                <h3 className="text-[#f7d38d] text-xs font-bold tracking-[0.3em] uppercase mb-3 flex items-center">
                  <span className="w-4 h-px bg-[#f7d38d] mr-2" />
                  历史背景
                </h3>
                <p className="text-[#dfc8a2] text-sm leading-relaxed">{drawerWork.description}</p>
              </div>

              {/* 创作故事 */}
              <div className="mb-6">
                <h3 className="text-[#f7d38d] text-xs font-bold tracking-[0.3em] uppercase mb-3 flex items-center">
                  <span className="w-4 h-px bg-[#f7d38d] mr-2" />
                  文物故事
                </h3>
                <p className="text-[#dfc8a2] text-sm leading-relaxed">{drawerWork.story}</p>
              </div>

              {/* AI 艺术解析 */}
              <div className="border-t border-[#b08d57]/20 pt-6">
                <h3 className="text-[#b08d57] text-xs font-bold tracking-[0.3em] uppercase mb-3 flex items-center">
                  <Loader2
                    size={13}
                    className={`mr-2 ${loadingAi ? 'animate-spin' : ''}`}
                    style={{ color: '#b08d57' }}
                  />
                  AI 艺术解析
                </h3>
                {loadingAi ? (
                  <div className="space-y-2">
                    <div className="h-3 rounded bg-[#2d1a0a] animate-pulse w-full" />
                    <div className="h-3 rounded bg-[#2d1a0a] animate-pulse w-4/5" />
                    <div className="h-3 rounded bg-[#2d1a0a] animate-pulse w-3/4" />
                  </div>
                ) : (
                  <p className="text-[#c9b49a] text-sm leading-relaxed serif italic">{aiAnalysis}</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Exhibition;
