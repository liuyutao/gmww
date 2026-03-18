
import React from 'react';
import { ShieldCheck, Cpu, Library, Users, ArrowUpRight } from 'lucide-react';

const Heritage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 pb-20">
      {/* Header Banner */}
      <section className="relative h-[40vh] flex items-center justify-center bg-[#5d4c3c]">
        <div className="absolute inset-0 opacity-30 grayscale contrast-125">
            <img src="https://picsum.photos/seed/heritage_bg/1600/600" className="w-full h-full object-cover" alt="Heritage Banner" />
        </div>
        <div className="relative text-center z-10 px-4">
            <h2 className="text-[#f5e9db] text-3xl sm:text-5xl md:text-6xl font-black serif mb-4 tracking-wider">数字化保护与传承</h2>
            <div className="w-32 h-1 bg-[#b08d57] mx-auto mb-6"></div>
            <p className="text-red-50/80 font-light tracking-widest uppercase">Digital Preservation & Future Inheritance</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        {/* Core Methodology Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Traditional Method */}
            <div className="bg-white p-12 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ebe0d1] -mr-16 -mt-16 rounded-full transition-all group-hover:scale-110"></div>
                <ShieldCheck size={48} className="text-[#9c3d3d] mb-8 relative" />
                <h3 className="text-3xl font-bold mb-6 text-[#5d4c3c] serif">传统物理保护</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                    介绍延安红色版画在保存过程中的传统方法，结合历史资料与照片，展示通过物理脱酸、恒温恒湿存储等物理手段如何延缓作品的老化。
                </p>
                <div className="border-t border-gray-100 pt-6">
                    <span className="text-xs font-bold text-[#b08d57] tracking-widest uppercase">现状：由于纸张老化，物理寿命正面临巨大挑战。</span>
                </div>
            </div>

            {/* Digital Innovation */}
            <div className="bg-[#9c3d3d] p-12 shadow-xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -mr-16 -mt-16 rounded-full transition-all group-hover:scale-110"></div>
                <Cpu size={48} className="text-[#f5e9db] mb-8 relative" />
                <h3 className="text-3xl font-bold mb-6 serif">现代数字化创新</h3>
                <p className="text-red-50 opacity-90 leading-relaxed mb-8">
                    高清三维扫描、高保真色彩复原、非同质化资产管理（NFT）等技术流程，赋予版画“数字永生”。通过AI技术修复受损细节，展现红色艺术的原始震撼。
                </p>
                <div className="border-t border-white/20 pt-6">
                    <span className="text-xs font-bold text-[#b08d57] tracking-widest uppercase">未来：全息展览、数字孪生，实现云端永续流传。</span>
                </div>
            </div>
        </div>

        {/* Academic & Educational */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f5e9db] p-8 border-b-8 border-[#9c3d3d]">
                <h4 className="text-2xl font-bold text-[#5d4c3c] mb-4 serif flex items-center">
                    <Library className="mr-3" /> 多学科交叉研究体系
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                    不仅是艺术，更涉及历史学、文化遗产学、材料科学。我们建立了一套红色版画的多维度数据库，支持学者从技法演变到社会功能的全面检索。
                </p>
                <button className="mt-6 text-[#9c3d3d] font-bold text-sm flex items-center hover:translate-x-2 transition-transform">
                    进入数据库 <ArrowUpRight size={16} className="ml-1" />
                </button>
            </div>

            <div className="bg-[#f5e9db] p-8 border-b-8 border-[#5d4c3c]">
                <h4 className="text-2xl font-bold text-[#5d4c3c] mb-4 serif flex items-center">
                    <Users className="mr-3" /> 校园互动与公众教育
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                    开发了“云上木刻实验室”小程序，让青少年在数字屏幕上体验“刻、印、拓”的全过程。通过寓教于乐的方式，让红色文化在年轻一代心中扎根。
                </p>
                <button className="mt-6 text-[#5d4c3c] font-bold text-sm flex items-center hover:translate-x-2 transition-transform">
                    下载教学课件 <ArrowUpRight size={16} className="ml-1" />
                </button>
            </div>
        </div>

        {/* Milestone Nodes */}
        <div className="mt-24">
            <h3 className="text-3xl font-bold text-center mb-16 serif text-[#5d4c3c]">保护传承历程节点</h3>
            <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-[#ebe0d1] -translate-y-1/2 hidden md:block"></div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { year: '1980s', title: '初步抢救', desc: '延安鲁艺旧址开始大规模征集、整理早期版画作品。' },
                        { year: '2005', title: '数字化建档', desc: '首个红色文化遗产数据库启动，实现初步影像化存储。' },
                        { year: '2018', title: '高精修复', desc: '引入AI图像增强技术，对受潮发霉的作品进行数字复原。' },
                        { year: '2024', title: '全息传播', desc: '多维交互平台上线，实现红色版画的沉浸式云端大展。' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 shadow-sm border border-gray-100 rounded z-10 hover:shadow-lg transition-shadow">
                            <span className="text-xl font-black text-[#9c3d3d] serif">{item.year}</span>
                            <h5 className="font-bold mt-2 mb-2">{item.title}</h5>
                            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Heritage;
