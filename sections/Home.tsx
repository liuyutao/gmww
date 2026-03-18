
import React from 'react';
import { Section } from '../types';
import { TIMELINE } from '../constants';
import { ChevronRight, Award, Palette, GraduationCap } from 'lucide-react';

interface HomeProps {
  setSection: (s: Section) => void;
}

const CORE_VALUES = [
  { icon: Award, title: '精神传承', desc: '革命文物是信仰的载体，承载着不屈不挠的革命精神与理想信念。' },
  { icon: Palette, title: '历史见证', desc: '每一件文物都是真实的历史切片，记录着中国革命的完整历程。' },
  { icon: GraduationCap, title: '文化根脉', desc: '融合民族审美与革命内涵，成为当代红色文化传承的重要基石。' },
];

const Home: React.FC<HomeProps> = ({ setSection }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9c3d3d] via-[#8b3535] to-[#5d4c3c]"></div>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img src="https://picsum.photos/seed/woodcutbg/1920/1080" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h2 className="text-white text-sm sm:text-lg tracking-[0.2em] sm:tracking-[0.5em] mb-4 opacity-90 font-light">抗战硝烟中的艺术丰碑</h2>
          <h1 className="text-4xl sm:text-5xl md:text-8xl text-[#f5e9db] font-black mb-8 serif drop-shadow-2xl leading-tight">
            延安红色版画<br /><span className="text-[#b08d57]">数字化大展</span>
          </h1>
          <p className="text-red-50 px-8 text-lg md:text-xl font-light mb-12 leading-relaxed opacity-80">
            刀锋镌刻岁月，木痕记载初心。穿越时空隧道，感悟革命版画中的热血与忠诚。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => setSection('exhibition')}
              className="bg-[#f5e9db] text-[#9c3d3d] px-10 py-4 font-bold tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl"
            >
              沉浸观展
            </button>
            <button
              onClick={() => setSection('exploration')}
              className="border-2 border-[#f5e9db] text-[#f5e9db] px-10 py-4 font-bold tracking-widest hover:bg-[#f5e9db] hover:text-[#9c3d3d] transition-all transform hover:-translate-y-1"
            >
              虚拟探索
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-[#f5e9db] to-transparent"></div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 bg-[#f5e9db]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5d4c3c] mb-4 serif">革命文物的三大核心价值</h2>
            <div className="w-24 h-1 bg-[#9c3d3d] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {CORE_VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white p-8 border-b-4 border-[#9c3d3d] hover:shadow-2xl transition-all group">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform">
                    <Icon className="text-[#9c3d3d]" size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#2d241e]">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-24 bg-[#ebe0d1] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              onClick={() => setSection('appreciation')}
              className="relative h-96 group cursor-pointer overflow-hidden shadow-xl"
            >
              <img src="https://picsum.photos/seed/nav1/600/800" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Navigate Appreciation" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d241e] to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2 serif">文物故事溯源</h3>
                <p className="text-sm opacity-80 mb-4">走进古元、冼星海等创作者与文物背后的峥嵘岁月。</p>
                <ChevronRight className="transform group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            <div
              onClick={() => setSection('exploration')}
              className="relative h-96 group cursor-pointer overflow-hidden shadow-xl"
            >
              <img src="https://picsum.photos/seed/nav2/600/800" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Navigate Exploration" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9c3d3d] to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2 serif">历史场景重现</h3>
                <p className="text-sm opacity-80 mb-4">通过文物视角，重温杨家岭、枣园等革命圣地的关键瞬间。</p>
                <ChevronRight className="transform group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            <div
              onClick={() => setSection('heritage')}
              className="relative h-96 group cursor-pointer overflow-hidden shadow-xl"
            >
              <img src="https://picsum.photos/seed/nav3/600/800" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Navigate Heritage" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5d4c3c] to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2 serif">数字活化传承</h3>
                <p className="text-sm opacity-80 mb-4">以AI与数字技术，让革命文物焕发全新传播生命力。</p>
                <ChevronRight className="transform group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#5d4c3c] serif">革命文物演变脉络</h2>
            <p className="mt-4 text-gray-500">从星火到丰碑，从实物到精神</p>
          </div>
          <div className="relative border-l-2 border-[#9c3d3d] ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between md:items-start">
            {TIMELINE.map((item, index) => (
              <div key={index} className="mb-12 md:mb-0 md:flex-1 relative px-8 md:text-center group">
                <div className="absolute left-[-9px] top-0 md:left-1/2 md:ml-[-8px] w-4 h-4 bg-[#9c3d3d] rounded-full group-hover:scale-150 transition-transform"></div>
                <div className="hidden md:block absolute top-2 left-1/2 w-full h-0.5 bg-[#9c3d3d] opacity-20 -z-10"></div>
                <h4 className="text-2xl font-black text-[#9c3d3d] mb-2 serif">{item.year}</h4>
                <h5 className="text-lg font-bold text-[#5d4c3c] mb-2">{item.title}</h5>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
