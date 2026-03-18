
import React, { useState } from 'react';
import { WORKS, COLORS } from '../constants';
import { WoodcutWork } from '../types';
import { askGeminiAboutArt } from '../services/gemini';
import { Info, ZoomIn, Loader2, X } from 'lucide-react';

const Appreciation: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('全部');
  const [selectedWork, setSelectedWork] = useState<WoodcutWork | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  const categories = ['全部', '革命宣传', '历史人物', '社会生活', '民族精神'];

  const filteredWorks = activeCategory === '全部' 
    ? WORKS 
    : WORKS.filter(w => w.category === activeCategory);

  const handleWorkClick = async (work: WoodcutWork) => {
    setSelectedWork(work);
    setAiAnalysis(null);
    setLoadingAi(true);
    const analysis = await askGeminiAboutArt(work.title);
    setAiAnalysis(analysis);
    setLoadingAi(false);
  };

  return (
    <div className="py-16 px-6 bg-[#f5e9db] min-h-screen animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[#9c3d3d] serif mb-4">视觉艺术鉴赏</h2>
          <p className="text-[#5d4c3c] opacity-80 max-w-2xl mx-auto">
            分类探索延安版画的艺术多样性。每一道木痕都凝结着时代的厚度，每一张拓片都讲述着革命的温情。
          </p>
        </header>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border-2 transition-all duration-300 font-medium tracking-widest
                ${activeCategory === cat 
                  ? 'bg-[#9c3d3d] text-white border-[#9c3d3d] shadow-lg' 
                  : 'bg-white text-[#5d4c3c] border-transparent hover:border-[#9c3d3d]'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredWorks.map((work) => (
            <div 
              key={work.id}
              className="group relative bg-white rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              onClick={() => handleWorkClick(work)}
            >
              {/* Refined Image Container with Smooth Zoom */}
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
                <img 
                  src={work.imageUrl} 
                  alt={work.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1200ms] ease-in-out"
                />
                {/* Subtle overlay on hover to focus details */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 pointer-events-none"></div>
              </div>
              
              <div className="p-6 relative z-10 bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-[#2d241e] serif group-hover:text-[#9c3d3d] transition-colors duration-300">{work.title}</h3>
                  <span className="text-xs bg-[#ebe0d1] text-[#5d4c3c] px-2 py-1 rounded">{work.year}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{work.artist}</p>
                <div className="flex items-center text-[#9c3d3d] text-xs font-bold uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity">
                  <Info size={14} className="mr-1" /> 查看详情
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technique Infographic */}
        <div className="mt-32 bg-white p-12 shadow-2xl rounded-sm border-t-8 border-[#b08d57]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#5d4c3c] mb-6 serif">延安版画：木刻中的工艺灵魂</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                延安版画多采用“减政”式的黑白木刻，初期深受柯勒惠支等西方艺术家影响，后期吸收了民间剪纸、年画等民族元素，形成了独特的艺术语言。
              </p>
              <div className="space-y-6">
                {[
                  { step: '01', title: '画稿与定稿', desc: '在梨木或白杨木板上反复揣摩构图，注重黑白关系的块面感。' },
                  { step: '02', title: '操刀镌刻', desc: '利用圆刀、三角刀进行艺术加工，线条刚毅挺拔，充满力量。' },
                  { step: '03', title: '墨色拓印', desc: '使用简单的松烟墨色或边区自制颜料，在粗糙的马兰纸上拓印。' }
                ].map((s, i) => (
                  <div key={i} className="flex space-x-4">
                    <span className="text-2xl font-black text-[#b08d57] opacity-40">{s.step}</span>
                    <div>
                      <h4 className="font-bold text-[#9c3d3d]">{s.title}</h4>
                      <p className="text-sm text-gray-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/tool1/400/400" className="w-full h-full object-cover rounded-sm shadow-lg hover:scale-105 transition-transform duration-700" alt="Tool 1" />
              <img src="https://picsum.photos/seed/tool2/400/400" className="w-full h-full object-cover rounded-sm shadow-lg mt-8 hover:scale-105 transition-transform duration-700" alt="Tool 2" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Detail View */}
      {selectedWork && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in zoom-in duration-300">
          <div className="bg-[#f5e9db] w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-sm relative grid grid-cols-1 md:grid-cols-2">
            <button 
              onClick={() => setSelectedWork(null)}
              className="absolute top-4 right-4 z-20 bg-[#9c3d3d] text-white p-2 rounded-full hover:rotate-90 transition-transform"
            >
              <X size={24} />
            </button>
            
            <div className="p-8 flex items-center justify-center bg-white">
              <div className="relative group overflow-hidden shadow-2xl">
                <img src={selectedWork.imageUrl} className="max-w-full h-auto" alt={selectedWork.title} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <ZoomIn size={48} className="text-white" />
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-[#b08d57] text-white text-xs font-bold mb-4">{selectedWork.category}</span>
                <h2 className="text-2xl md:text-4xl font-bold text-[#9c3d3d] serif mb-2">{selectedWork.title}</h2>
                <div className="text-[#5d4c3c] font-bold mb-6 flex items-center space-x-4">
                  <span>艺术家：{selectedWork.artist}</span>
                  <span>|</span>
                  <span>创作年份：{selectedWork.year}</span>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-[#2d241e] mb-2 border-l-4 border-[#9c3d3d] pl-3">历史背景</h4>
                  <p className="text-gray-600 leading-relaxed italic">{selectedWork.description}</p>
                </div>

                <div className="bg-white/50 p-6 rounded-sm border border-[#ebe0d1]">
                  <h4 className="text-sm font-bold text-[#9c3d3d] uppercase tracking-[0.2em] mb-4 flex items-center">
                    <Loader2 size={16} className={`mr-2 ${loadingAi ? 'animate-spin' : ''}`} />
                    AI 深度艺术解析
                  </h4>
                  {loadingAi ? (
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
                      <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
                    </div>
                  ) : (
                    <p className="text-[#5d4c3c] text-sm leading-relaxed serif">{aiAnalysis}</p>
                  )}
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button className="bg-[#9c3d3d] text-white px-8 py-3 font-bold tracking-widest hover:bg-[#8b3535] transition-colors shadow-lg">
                  收藏此作
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appreciation;
