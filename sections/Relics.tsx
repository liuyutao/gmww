
import React, { useState } from 'react';
import { ExternalLink, Search } from 'lucide-react';

interface RelicCategory {
  title: string;
  icon: string;
  color: string;
  items: string[];
}

const RELIC_CATEGORIES: RelicCategory[] = [
  {
    title: '革命信物类',
    icon: '★',
    color: '#9c3d3d',
    items: [
      '红军八角帽（带红五星徽章）',
      '陕甘宁边区布制通行证',
      '抗战时期八路军臂章',
      '革命烈士军功章/党费证',
      '解放区土地改革土地证',
      '地下交通站密信/暗号本',
      '红军战士的入党志愿书（手稿）',
    ],
  },
  {
    title: '重大见证类',
    icon: '◈',
    color: '#7a2e2e',
    items: [
      '中共一大党纲（复制件）',
      '毛泽东《论持久战》手稿',
      '遵义会议木质桌椅（复刻）',
      '红军飞夺泸定桥铁索链（残段）',
      '渡江战役木船船桨',
      '开国大典国旗旗杆配件',
      '两弹一星研发手摇计算机',
    ],
  },
  {
    title: '生活用具类',
    icon: '◉',
    color: '#5a6e3a',
    items: [
      '井冈山竹编饭篮',
      '延安窑洞煤油灯/粗瓷碗',
      '红军过草地牛皮水壶',
      '边区军民自制纺车',
      '焦裕禄带补丁藤椅',
      '抗美援朝英雄搪瓷杯',
    ],
  },
  {
    title: '武器装备类',
    icon: '⚔',
    color: '#3a4a6e',
    items: [
      '红军长征汉阳造步枪',
      '平型关大捷缴获日军军刀',
      '八路军自制土手雷/地雷',
      '红军小号手冲锋军号',
      '淮海战役民工支前独轮车',
    ],
  },
  {
    title: '时代印记类',
    icon: '◆',
    color: '#6b4a1a',
    items: [
      '七届二中全会会议记录（手稿）',
      '重庆谈判签字桌（复刻）',
      '长征路线图（手绘）',
      '抗日民族统一战线宣言原件',
      '三大战役作战地图',
      '新中国成立公告原稿',
      '抗美援朝停战协定（复制件）',
    ],
  },
  {
    title: '战地装备类',
    icon: '◎',
    color: '#2e5a3a',
    items: [
      '红军行军背包',
      '边区自制肥皂、牙粉盒',
      '延安大生产运动锄头',
      '红军马灯、行军锅',
      '边区土布、粗毛线团',
      '白求恩用过的医疗箱',
      '边区教师备课石板',
    ],
  },
];

const FILTER_TABS = ['全部', '革命信物', '重大见证', '生活用具', '武器装备', '时代印记', '战地装备'] as const;
type FilterTab = typeof FILTER_TABS[number];

const Relics: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterTab>('全部');

  const handleRelicClick = (name: string) => {
    const url = `https://image.baidu.com/search/index?tn=baiduimage&word=${encodeURIComponent(name)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const url = `https://image.baidu.com/search/index?tn=baiduimage&word=${encodeURIComponent(searchQuery.trim())}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const filteredCategories = RELIC_CATEGORIES.filter((cat) => {
    if (activeFilter === '全部') return true;
    return cat.title.startsWith(activeFilter);
  });

  return (
    <div className="animate-in fade-in duration-700 bg-[#f5e9db] min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-6 text-center overflow-hidden bg-gradient-to-b from-[#9c3d3d] to-[#7a2e2e]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #f5e9db 0, #f5e9db 1px, transparent 0, transparent 50%)',
              backgroundSize: '20px 20px',
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#f5e9db] text-sm tracking-[0.5em] mb-4 opacity-70">
            REVOLUTIONARY CULTURAL RELICS COLLECTION
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-[#f5e9db] serif mb-6 drop-shadow-lg">
            标志性文物分类
          </h1>
          <div className="w-24 h-1 bg-[#b08d57] mx-auto mb-6" />
          <p className="text-red-100 text-lg leading-relaxed opacity-80">
            铁血岁月，铸就永恒。每一件文物，都是一段不朽的历史见证。
            <br />
            点击文物名称，探寻历史影像。
          </p>
        </div>
      </section>

      {/* Search bar */}
      <section className="py-8 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md border border-[#e8d9c5] px-5 py-5">
            {/* Search input */}
            <form onSubmit={handleSearchSubmit} className="relative mb-4">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a8878]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索文物名称、故事、人物..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#e0d0bc] bg-[#fdf8f3] text-[#2d241e] text-sm placeholder-[#b0a090] focus:outline-none focus:border-[#9c3d3d] focus:ring-2 focus:ring-[#9c3d3d]/10 transition-all"
              />
            </form>
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                  style={
                    activeFilter === tab
                      ? { background: '#9c3d3d', color: '#fff' }
                      : { background: '#f5ece0', color: '#5d4c3c', border: '1px solid #e0d0bc' }
                  }
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-14 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#e8d9c5] flex flex-col"
            >
              {/* Category header */}
              <div
                className="px-6 py-5 flex items-center gap-3"
                style={{ background: cat.color }}
              >
                <span className="text-2xl text-white opacity-80 font-bold leading-none">
                  {cat.icon}
                </span>
                <h2 className="text-xl font-black text-white tracking-widest serif">
                  {cat.title}
                </h2>
                <span className="ml-auto text-white/50 text-sm font-medium">
                  {cat.items.length} 件
                </span>
              </div>

              {/* Items list */}
              <ul className="flex-1 divide-y divide-[#f0e8dc]">
                {cat.items.map((name, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleRelicClick(name)}
                      className="w-full text-left px-6 py-3.5 flex items-center justify-between gap-3 group hover:bg-[#fdf6ee] transition-colors duration-200"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: cat.color }}
                        />
                        <span className="text-[#2d241e] text-sm font-medium group-hover:text-[#9c3d3d] transition-colors duration-200">
                          {name}
                        </span>
                      </span>
                      <ExternalLink
                        size={14}
                        className="flex-shrink-0 opacity-0 group-hover:opacity-60 transition-opacity duration-200"
                        style={{ color: cat.color }}
                      />
                    </button>
                  </li>
                ))}
              </ul>

              {/* Card footer */}
              <div
                className="px-6 py-3 text-right"
                style={{ background: `${cat.color}10` }}
              >
                <span className="text-xs tracking-widest opacity-50 font-medium" style={{ color: cat.color }}>
                  点击名称 → 查看影像
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom note */}
      <div className="pb-16 text-center text-xs text-[#9a8878] opacity-60 tracking-wider px-4">
        点击任意文物名称将在新标签页打开百度图片搜索
      </div>
    </div>
  );
};

export default Relics;
