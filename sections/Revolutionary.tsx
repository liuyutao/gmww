
import React, { useState } from 'react';
import { X } from 'lucide-react';

// 版画数据
const BANHUA_IMAGES = [
  {
    url: '/assets/images/banhua1.jpg',
    title: '拥护咱们老百姓自己的军队',
    author: '古元',
    year: '1943年',
    desc: '以连环画式构图描绘军民鱼水情深，画面朴实生动，是延安木刻民族化的代表之作。',
  },
  {
    url: '/assets/images/banhua2.jpg',
    title: '我们的战士',
    author: '陈烟桥',
    year: '1939年',
    desc: '粗犷有力的刀法塑造出战士英勇的身姿，浓烈的黑白对比彰显出抗战精神的刚烈与坚韧。',
  },
  {
    url: '/assets/images/banhua3.jpg',
    title: '怒吼吧，中国',
    author: '李桦',
    year: '1935年',
    desc: '被束缚的身躯与无声的呐喊，是那个时代民族危亡的最强控诉，震撼人心，历久弥新。',
  },
  {
    url: '/assets/images/banhua4.jpg',
    title: '鲁迅像',
    author: '力群',
    year: '1936年',
    desc: '以细腻深沉的刀痕刻画鲁迅先生的面容，神形兼备，寄托了版画艺术家对精神领袖的崇高敬意。',
  },
];

// 四张竖排小提琴图片
const VIOLIN_IMAGES = [
  {
   url: '/assets/images/image1.png',
    title: '延安文艺·弦歌不辍',
    desc: '革命岁月中，一把小提琴奏响了信仰的旋律。',
  },
  {
   url: '/assets/images/image2.png',
    title: '文艺战士·小提琴',
    desc: '乐声穿越战火，承载着延安文艺工作者的革命热情。',
  },
  {
   url: '/assets/images/image3.png',
    title: '峥嵘弦音·大提琴',
    desc: '低沉浑厚的弦音，诉说着那个年代的坚守与执着。',
  },
  {
    url: '/assets/images/image4.png',
    title: '革命文艺文物珍品',
    desc: '历经岁月洗礼，这些乐器承载着不可磨灭的红色记忆。',
  },
];

// 萌系文物小伙伴（圆形展示区）
const CUTE_RELICS = [
  {
    url: '/assets/images/circle-new-1.jpg',
    name: '琴琴',
    role: '首席演奏官',
  },
  {
    url: '/assets/images/circle-new-2.jpg',
    name: '笙笙',
    role: '革命小乐手',
  },
  {
    url: '/assets/images/circle-new-3.jpg',
    name: '低音君',
    role: '沉稳守护者',
  },
 
];

// 弹窗图片 - 替换为实际图片URL即可
const POPUP_IMAGE_URL = '/assets/images/popup.jpg';

const Revolutionary: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'yuqi' | 'banhua'>('yuqi');

  return (
    <div className="animate-in fade-in duration-700 bg-[#f5e9db] min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-6 text-center overflow-hidden bg-gradient-to-b from-[#9c3d3d] to-[#7a2e2e]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #f5e9db 0, #f5e9db 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
          ></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#f5e9db] text-sm tracking-[0.5em] mb-4 opacity-70">REVOLUTIONARY CULTURAL RELICS</p>
          <h1 className="text-5xl md:text-6xl font-black text-[#f5e9db] serif mb-6 drop-shadow-lg">革命文物</h1>
          <div className="w-24 h-1 bg-[#b08d57] mx-auto mb-6"></div>
          <p className="text-red-100 text-lg leading-relaxed opacity-80">
            刀光剑影中，也有悠扬弦音；硝烟弥漫里，亦有动人乐章。
            <br />这些珍贵的文艺文物，记录着革命年代的激情与浪漫。
          </p>
        </div>
      </section>

      {/* 分类切换 Tab */}
      <div className="sticky top-0 z-10 bg-[#f5e9db] border-b border-[#d4c4aa]">
        <div className="max-w-2xl mx-auto flex">
          {([['yuqi', '乐 器'], ['banhua', '版 画']] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className="relative flex-1 py-4 text-base font-bold tracking-[0.3em] transition-colors duration-200"
              style={{ color: activeTab === key ? '#9c3d3d' : '#9a8878' }}
            >
              {label}
              {/* 底部红色指示线 */}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#9c3d3d] transition-all duration-300 rounded-full"
                style={{ width: activeTab === key ? '40%' : '0%' }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* 乐器内容 */}
      {activeTab === 'yuqi' && (
        <>
          <section className="py-16 px-6">
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col gap-10">
                {VIOLIN_IMAGES.map((img, i) => (
                  <div key={i} className="group relative shadow-lg overflow-hidden">
                    <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#b08d57] z-10 pointer-events-none"></div>
                    <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#b08d57] z-10 pointer-events-none"></div>
                    <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#b08d57] z-10 pointer-events-none"></div>
                    <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#b08d57] z-10 pointer-events-none"></div>
                    <img
                      src={img.url}
                      alt=""
                      className="w-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
                      style={{ display: 'block' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 萌系文物小伙伴展示区 */}
          <section className="py-20 px-6 bg-[#ebe0d1]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl font-bold text-[#9c3d3d] serif mb-3">文艺萌将大集合</h2>
                <p className="text-[#5d4c3c] opacity-70">革命文物变身超可爱小伙伴，大家都在这儿等你哦！</p>
              </div>
              <div className="flex flex-wrap justify-center gap-10 mb-14">
                {CUTE_RELICS.map((relic, i) => (
                  <div key={i} className="flex flex-col items-center group cursor-pointer">
                    <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                      <img src={relic.url} alt={relic.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-[#9c3d3d]/0 group-hover:bg-[#9c3d3d]/20 transition-colors duration-300 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">点我看看~</span>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="font-bold text-[#2d241e] text-lg">{relic.name}</p>
                      <p className="text-[#9c3d3d] text-sm mt-1 opacity-80">{relic.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-block bg-[#9c3d3d]/10 border-2 border-[#9c3d3d] text-[#9c3d3d] px-10 py-4 font-bold tracking-widest hover:bg-[#9c3d3d] hover:text-white transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
                >
                  查看文艺宝贝 ✦
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* 版画内容 */}
      {activeTab === 'banhua' && (
        <>
          <section className="py-16 px-6">
            <div className="max-w-2xl mx-auto flex flex-col gap-14">
              {BANHUA_IMAGES.map((item, i) => (
                <div key={i} className="group">
                  <div className="relative shadow-xl overflow-hidden">
                    <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#b08d57] z-10 pointer-events-none"></div>
                    <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#b08d57] z-10 pointer-events-none"></div>
                    <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#b08d57] z-10 pointer-events-none"></div>
                    <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#b08d57] z-10 pointer-events-none"></div>
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
                      style={{ display: 'block' }}
                    />
                  </div>
                  <div className="mt-4 border-l-4 border-[#9c3d3d] pl-4">
                    <h3 className="text-lg font-bold text-[#2d241e] serif mb-1">《{item.title}》</h3>
                    <p className="text-sm text-[#9c3d3d] font-medium mb-2">{item.author} · {item.year}</p>
                    <p className="text-sm text-[#5d4c3c] leading-relaxed opacity-80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 让版画动起来 — 视频区 */}
          <section className="py-20 px-6 bg-[#ebe0d1]">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#9c3d3d] serif mb-3">让版画动起来</h2>
                <div className="w-16 h-0.5 bg-[#b08d57] mx-auto" />
              </div>
              <div className="flex flex-col gap-10">
                {[
                  { src: '/assets/videos/video1.mp4', title: '版画动态影像 · 其一' },
                  { src: '/assets/videos/video2.mp4', title: '版画动态影像 · 其二' },
                ].map((v, i) => (
                  <div key={i}>
                    <div className="relative shadow-xl overflow-hidden bg-black">
                      <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#b08d57] z-10 pointer-events-none"></div>
                      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#b08d57] z-10 pointer-events-none"></div>
                      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#b08d57] z-10 pointer-events-none"></div>
                      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#b08d57] z-10 pointer-events-none"></div>
                      <video
                        src={v.src}
                        controls
                        className="w-full"
                        style={{ display: 'block' }}
                      />
                    </div>
                    <div className="mt-3 border-l-4 border-[#b08d57] pl-4">
                      <p className="text-sm font-medium text-[#5d4c3c] tracking-wider">{v.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* 弹窗 Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full animate-in zoom-in-95 duration-300">
            {/* X 关闭按钮 */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-[#9c3d3d]/10 hover:bg-[#9c3d3d]/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={16} className="text-[#9c3d3d]" />
            </button>

            {/* 图片 */}
            <div className="bg-[#fff9f0] p-6 pb-2">
              <img
                src={POPUP_IMAGE_URL}
                alt="文艺宝贝"
                className="w-full object-contain max-h-[60vh] rounded-xl"
              />
            </div>

            {/* 底部关闭区域 */}
            <div className="px-6 py-5 text-center bg-white">
              <p className="text-[#5d4c3c] text-sm mb-4 leading-relaxed">
                嘿嘿，被你发现啦！这可是我们的革命小宝贝~ 🎻
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-gradient-to-r from-[#9c3d3d] to-[#b05050] text-white py-3 px-8 font-bold tracking-widest rounded-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                好啦好啦，我看完啦，让我走嘛～ (≧▽≦)
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="mt-3 text-xs text-gray-400 hover:text-gray-600 transition-colors underline underline-offset-2"
              >
                算了，不看了，关掉吧
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Revolutionary;
