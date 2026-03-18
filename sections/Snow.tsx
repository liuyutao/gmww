
import React, { useRef, useState } from 'react';
import { ChevronLeft, Play, Pause } from 'lucide-react';
import { Section } from '../types';

interface SnowProps {
  setSection: (s: Section) => void;
}

const RELICS = [
  {
    id: 1,
    title: '笔记本',
    icon: '📓',
    content:
      '斯诺在陕北期间，用笔记本详细记录了与毛泽东、周恩来等中共领导人的谈话内容，以及红军战士的口述、苏区的社会风貌、经济状况、军事部署等，这些笔记是《红星照耀中国》的原始创作底稿，真实还原了 1936 年陕北苏区的全貌，其中毛泽东向其口述的个人经历，是毛泽东首次向西方记者完整讲述自己的革命历程，具有极高的史料价值。',
  },
  {
    id: 2,
    title: '莱卡相机',
    icon: '📷',
    content:
      '这是斯诺当时随身携带的便携相机，他用这台相机拍摄了大量陕北苏区的珍贵照片，包括毛泽东戴八角帽的经典肖像、红军战士训练、苏区群众生产生活、中共领导人的工作场景等，这些照片是最早向西方公开的红色中国影像资料，打破了国民党对红军的"妖魔化"宣传，让世界看到了红军真实、鲜活的面貌。',
  },
  {
    id: 3,
    title: '钢笔',
    icon: '🖊️',
    content:
      '作为斯诺的书写工具，见证了他与中共领导人的彻夜长谈，也见证了他对苏区真相的文字记录，是其"客观记录、真诚报道"斯诺精神的物质载体。',
  },
  {
    id: 4,
    title: '《七律·长征》',
    icon: '📜',
    content:
      '是毛泽东创作的经典革命诗词，其抄赠斯诺的手稿为珍贵革命文物，现相关手稿影印件陈列于延安革命纪念馆、中国国家博物馆，原件为国家一级文物。\n\n1936 年 10 月，红军三大主力胜利会师，长征取得圆满成功，毛泽东在陕北保安创作了《七律·长征》。斯诺在与毛泽东的交流中，听闻了红军长征的壮烈历程，深受震撼，毛泽东遂将这首诗抄赠给斯诺，这是《七律·长征》首次向外界公开。斯诺将这首诗带出陕北，收录于《红星照耀中国》中，让这首歌颂红军革命英雄主义的诗词首次走向世界，成为世界了解红军长征精神的重要文学载体，也让长征的故事通过文字传遍全球。',
  },
  {
    id: 5,
    title: '苏区纸币',
    icon: '💴',
    content:
      '苏区纸币是中华苏维埃共和国的法定货币，为重要的革命金融文物，按发行地区可分为中央苏区纸币、陕北苏区纸币等，现均为国家文物，收藏于各地革命纪念馆、钱币博物馆。\n\n陕北苏区建立后，为打破国民党的经济封锁，保障苏区军民的生产生活，苏维埃政府发行了苏区纸币，统一苏区的金融市场，促进苏区的经济发展。苏区纸币以粮食、布匹等实物为储备，具有稳定的购买力，是苏区政权独立运行、自主发展经济的重要体现，也反映了红军"保障民生、发展生产"的革命理念。',
  },
  {
    id: 6,
    title: '毛泽东的八角帽',
    icon: '🎖️',
    content:
      '毛泽东在陕北期间佩戴的八角帽为国家一级革命文物，现收藏于延安革命纪念馆，是毛泽东在苏区时期的经典标志性物品，也是红色中国的重要象征文物。\n\n这顶八角帽是陕北苏区红军的制式军帽，毛泽东在陕北期间日常佩戴，斯诺为其拍摄的戴八角帽的肖像，成为毛泽东最经典的形象之一。',
  },
];

const Snow: React.FC<SnowProps> = ({ setSection }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="min-h-screen bg-[#0e0807] text-[#f5e9db] animate-in fade-in duration-500">
      {/* 顶部导航 */}
      <div className="sticky top-0 z-20 bg-[#0e0807]/90 backdrop-blur-sm border-b border-[#b08d57]/20 px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => setSection('home')}
          className="flex items-center space-x-1 text-[#b08d57] hover:text-[#f5e9db] transition-colors text-sm font-medium tracking-widest group"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>返回门户</span>
        </button>
        <div className="text-center">
          <p className="text-[#b08d57] text-xs tracking-[0.4em] uppercase font-light">文物故事溯源</p>
          <h1 className="text-[#f5e9db] text-base sm:text-lg font-black serif tracking-widest">斯诺与红色中国</h1>
        </div>
        <div className="w-20" />
      </div>

      {/* 视频区域 */}
      <div className="relative w-full bg-black" style={{ maxHeight: '60vh' }}>
        <video
          ref={videoRef}
          src="/assets/videos/sino.mp4"
          className="w-full object-contain"
          style={{ maxHeight: '60vh' }}
          onEnded={() => setPlaying(false)}
          playsInline
        />
        {/* 播放/暂停遮罩 */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center group"
        >
          <div
            className={`w-16 h-16 rounded-full bg-black/50 border-2 border-[#b08d57]/80 flex items-center justify-center transition-opacity duration-300 ${playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
          >
            {playing ? (
              <Pause size={28} className="text-[#f5e9db]" />
            ) : (
              <Play size={28} className="text-[#f5e9db] ml-1" />
            )}
          </div>
        </button>
        {/* 底部渐变 */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #0e0807, transparent)' }} />
      </div>

      {/* 页面标题 */}
      <div className="text-center py-12 px-6">
        <div className="w-12 h-px bg-[#b08d57] mx-auto mb-6 opacity-60" />
        <h2 className="text-2xl sm:text-3xl font-black serif text-[#f5e9db] tracking-widest mb-3">
          斯诺随身六件文物
        </h2>
        <p className="text-[#b08d57] text-sm tracking-wider max-w-xl mx-auto leading-relaxed">
          1936年，美国记者埃德加·斯诺秘密进入陕北苏区，随身带去的这六件物品，成为他记录红色中国、向世界揭开真相的历史见证。
        </p>
        <div className="w-12 h-px bg-[#b08d57] mx-auto mt-6 opacity-60" />
      </div>

      {/* 文物列表 */}
      <div className="max-w-3xl mx-auto px-6 pb-20 space-y-8">
        {RELICS.map((relic, index) => (
          <div
            key={relic.id}
            className="border border-[#b08d57]/20 bg-[#1a0d07]/60 backdrop-blur-sm"
          >
            {/* 标题栏 */}
            <div className="flex items-center space-x-4 px-6 py-4 border-b border-[#b08d57]/20">
              <span className="text-2xl">{relic.icon}</span>
              <div>
                <span className="text-[#b08d57] text-xs tracking-[0.3em] font-light">
                  文物 {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[#f5e9db] text-lg font-bold serif tracking-widest">{relic.title}</h3>
              </div>
              <div className="ml-auto w-8 h-px bg-[#b08d57] opacity-40" />
            </div>
            {/* 内容 */}
            <div className="px-6 py-5">
              {relic.content.split('\n\n').map((para, i) => (
                <p key={i} className="text-[#dfc8a2] text-sm leading-[1.9] mb-3 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snow;
