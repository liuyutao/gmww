
import React, { useState } from 'react';
import { SITES } from '../constants';
import { MapSite } from '../types';
import { MapPin, Info, ArrowRight, Navigation } from 'lucide-react';

const Exploration: React.FC = () => {
  const [activeSite, setActiveSite] = useState<MapSite | null>(null);

  return (
    <div className="py-20 px-6 bg-[#ebe0d1] min-h-screen animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h2 className="text-4xl font-bold text-[#5d4c3c] serif mb-4">延安版画：空间虚拟探索</h2>
          <p className="text-gray-600 max-w-2xl">
            点击地图上的红点，探索版画艺术家们的足迹。这里是黄土地孕育革命艺术的圣地。
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Virtual Map (SVG based) */}
          <div className="lg:col-span-2 relative bg-white p-4 rounded-sm shadow-xl aspect-video overflow-hidden border-8 border-[#f5e9db]">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                    <path d="M10,20 Q30,10 50,30 T90,20" fill="none" stroke="#9c3d3d" strokeWidth="0.5" />
                    <path d="M5,50 Q40,60 60,40 T95,70" fill="none" stroke="#9c3d3d" strokeWidth="0.5" />
                    <path d="M20,80 Q50,90 80,70" fill="none" stroke="#9c3d3d" strokeWidth="0.5" />
                </svg>
            </div>
            
            <div className="relative w-full h-full bg-[#f5e9db]/30 rounded flex items-center justify-center">
              <span className="text-[#b08d57] font-black text-6xl opacity-10 serif select-none uppercase tracking-widest">Yan'an Virtual Map</span>
              
              {/* Hotspots */}
              {SITES.map((site) => (
                <button
                  key={site.id}
                  onClick={() => setActiveSite(site)}
                  className={`absolute group transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 
                    ${activeSite?.id === site.id ? 'scale-125' : 'hover:scale-110'}`}
                  style={{ left: `${site.coords.x}%`, top: `${site.coords.y}%` }}
                >
                  <div className={`p-2 rounded-full shadow-lg ${activeSite?.id === site.id ? 'bg-[#9c3d3d]' : 'bg-white'}`}>
                    <MapPin size={24} className={activeSite?.id === site.id ? 'text-white' : 'text-[#9c3d3d]'} />
                  </div>
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-white shadow-md rounded-full text-xs font-bold whitespace-nowrap transition-opacity
                    ${activeSite?.id === site.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    {site.name}
                  </div>
                </button>
              ))}
            </div>

            <div className="absolute bottom-6 left-6 bg-white/90 p-3 rounded-sm shadow-sm border-l-4 border-[#9c3d3d]">
              <h4 className="text-xs font-black text-[#5d4c3c] tracking-widest uppercase mb-1">地标指南</h4>
              <p className="text-[10px] text-gray-500">点击地图标记，调阅历史现场数字化资料</p>
            </div>
          </div>

          {/* Site Detail Side Panel */}
          <div className="bg-[#9c3d3d] text-white p-6 lg:p-10 rounded-sm shadow-2xl flex flex-col justify-between transform transition-all">
            {activeSite ? (
              <div className="animate-in slide-in-from-right duration-500">
                <div className="mb-8">
                  <div className="flex items-center space-x-2 text-red-200 text-sm mb-2 uppercase font-bold tracking-widest">
                    <Navigation size={16} /> <span>历史遗址</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold mb-6 serif">{activeSite.name}</h3>
                  <p className="text-red-50 text-lg font-light leading-relaxed mb-8 opacity-90">
                    {activeSite.description}
                  </p>
                  <div className="bg-white/10 p-6 rounded-sm backdrop-blur-sm border-l-2 border-[#b08d57]">
                    <h4 className="font-bold mb-2 flex items-center"><Info size={16} className="mr-2" /> 创作秘辛</h4>
                    <p className="text-sm opacity-80 leading-relaxed">{activeSite.history}</p>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center space-x-2 py-4 bg-[#f5e9db] text-[#9c3d3d] font-bold tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1">
                  <span>虚拟参观 360°</span> <ArrowRight size={20} />
                </button>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
                <div className="w-16 h-16 border-2 border-dashed border-red-300 rounded-full flex items-center justify-center mb-6">
                    <MapPin size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 serif">请在左侧地图选择地标</h3>
                <p className="text-sm">开启一段尘封的版画艺术之旅</p>
              </div>
            )}
          </div>
        </div>

        {/* Legend / Tips Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border-l-4 border-[#5d4c3c]">
                <h4 className="text-xl font-bold mb-4 text-[#5d4c3c] serif">数字对比：时代与现状</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                    通过数字化手段对比延安时期的地貌与现状，分析延安精神在空间环境中的艺术映射，帮助用户更深层理解版画作品的“土地基因”。
                </p>
            </div>
            <div className="bg-[#b08d57] p-8 text-white">
                <h4 className="text-xl font-bold mb-4 serif">参观礼仪与文化规范</h4>
                <ul className="text-sm space-y-2 opacity-90">
                    <li>• 保持敬畏：革命旧址是神圣的艺术沃土。</li>
                    <li>• 静心感受：在数字化展示中倾听版画背后的呐喊。</li>
                    <li>• 知识分享：将探索所得分享给更多红色文化爱好者。</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Exploration;
