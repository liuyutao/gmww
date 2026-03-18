
import React from 'react';
import { ShieldCheck, Cpu, Library, Users, ArrowUpRight } from 'lucide-react';
import { Section } from '../types';

interface HeritageProps {
  setSection: (s: Section) => void;
}

const Heritage: React.FC<HeritageProps> = ({ setSection }) => {
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
                    介绍革命文物在保存过程中的传统方法，结合历史资料与实物档案，展示通过恒温恒湿、防虫防霉、脱酸加固、专业修复等物理手段，如何延缓文物材质老化、延长实体寿命。
                </p>
                <div className="border-t border-gray-100 pt-6">
                    <span className="text-xs font-bold text-[#b08d57] tracking-widest uppercase">现状：受材质、环境、时间影响，大量纸质、木质、织物类革命文物老化破损，实体保存压力持续增大。</span>
                </div>
            </div>

            {/* Digital Innovation */}
            <div className="bg-[#9c3d3d] p-12 shadow-xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -mr-16 -mt-16 rounded-full transition-all group-hover:scale-110"></div>
                <Cpu size={48} className="text-[#f5e9db] mb-8 relative" />
                <h3 className="text-3xl font-bold mb-6 serif">现代数字化创新</h3>
                <p className="text-red-50 opacity-90 leading-relaxed mb-8">
                    运用高清三维扫描、高精度色彩还原、AI智能修复、数字孪生、区块链存证等技术，为革命文物建立永久数字档案，实现"数字永生"。通过数字化手段还原历史细节、修复破损痕迹，让革命文物的历史价值与精神力量完整留存。
                </p>
                <div className="border-t border-white/20 pt-6">
                    <span className="text-xs font-bold text-[#b08d57] tracking-widest uppercase">未来：沉浸式数字展陈、云端永久馆藏、跨时空传播，实现革命文物永续传承与全民共享。</span>
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
                    融合历史学、文物保护学、材料科学、数字技术、传播学等多领域，构建革命文物全维度数据库，支持从文物溯源、工艺研究、历史考证到价值阐释的全方位研究与检索。
                </p>
                <button
                    onClick={() => setSection('relics')}
                    className="mt-6 text-[#9c3d3d] font-bold text-sm flex items-center hover:translate-x-2 transition-transform"
                >
                    进入数据库 <ArrowUpRight size={16} className="ml-1" />
                </button>
            </div>

            <div className="bg-[#f5e9db] p-8 border-b-8 border-[#5d4c3c]">
                <h4 className="text-2xl font-bold text-[#5d4c3c] mb-4 serif flex items-center">
                    <Users className="mr-3" /> 校园互动与公众教育
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                    打造"云端革命文物体验馆"小程序与互动平台，让公众尤其是青少年在线体验文物修复、虚拟鉴赏、历史场景还原等内容，以沉浸式、互动式教育推动革命文化普及，厚植家国情怀。
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
                        { year: '1980s', title: '初步抢救', desc: '全国多地革命旧址、纪念馆启动革命文物普查征集，对纸质、木质、金属类革命文物开展基础修复与物理保护。' },
                        { year: '2005', title: '数字化建档', desc: '全国革命文物数据库建设启动，完成首批革命文物影像采集、分类建档与基础数字化存储。' },
                        { year: '2018', title: '高精修复', desc: '引入AI图像修复、三维扫描、材质分析等技术，对破损、褪色、霉变革命文物进行高精度数字复原与实体修复。' },
                        { year: '2024', title: '全息传播', desc: '革命文物数字传播平台全面上线，实现全息展陈、云端共享、沉浸式体验与全民传播。' }
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
