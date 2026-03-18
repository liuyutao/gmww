
import { WoodcutWork, TimelineEvent, MapSite } from './types';

export interface ExhibitionWork extends WoodcutWork {
  story: string; // 更丰富的故事背景，用于抽屉展示
}

export const COLORS = {
  red: '#9c3d3d',
  earth: '#5d4c3c',
  gold: '#b08d57',
  paper: '#f5e9db',
  text: '#2d241e'
};

export const WORKS: WoodcutWork[] = [
  {
    id: '1',
    title: '减租会',
    artist: '古元',
    year: '1943',
    category: '社会生活',
    description: '此画生动记录了当时延安边区农民争取权益的历史瞬间，线条凝练有力，充满了泥土气息。',
    imageUrl: 'https://picsum.photos/seed/woodcut1/800/600',
  },
  {
    id: '2',
    title: '刘志丹同志在瓦窑堡',
    artist: '江丰',
    year: '1940',
    category: '历史人物',
    description: '通过粗犷的木刻线条表现了革命将领的威严与亲民，是延安写实版画的代表作。',
    imageUrl: 'https://picsum.photos/seed/woodcut2/800/600',
  },
  {
    id: '3',
    title: '保卫边区',
    artist: '胡一川',
    year: '1938',
    category: '革命宣传',
    description: '强烈的黑白对比，极具冲击力的构图，在抗战初期起到了巨大的鼓舞作用。',
    imageUrl: 'https://picsum.photos/seed/woodcut3/800/600',
  },
  {
    id: '4',
    title: '牛犋变工队',
    artist: '古元',
    year: '1943',
    category: '民族精神',
    description: '展现了边区军民大生产运动中的互助精神，是延安版画从模仿西方走向民族化的里程碑。',
    imageUrl: 'https://picsum.photos/seed/woodcut4/800/600',
  }
];

export const EXHIBITION_WORKS: ExhibitionWork[] = [
  {
    id: 'e1',
    title: '《共产党宣言》中文首译本',
    artist: '陈望道',
    year: '1920',
    category: '革命宣传',
    description: '中国最早的马克思主义经典著作全译本，由陈望道翻译，1920年8月出版，是中国共产党思想源头，为早期革命运动奠定理论根基。',
    story: '1920年，陈望道在浙江义乌分水塘村柴房中完成翻译，误将墨汁当红糖蘸粽子食用，留下“真理的味道非常甜”的佳话。这本小册子点燃进步青年的革命信仰，见证马克思主义中国化的开端。',
    imageUrl: '/assets/images2/image1.png',
  },
  {
    id: 'e2',
    title: '井冈山八角楼油灯',
    artist: '毛泽东',
    year: '1927',
    category: '革命宣传',
    description: '井冈山革命根据地建立后，油灯照亮中国革命探索之路，是农村包围城市、武装夺取政权道路的精神象征。',
    story: '1927年至1929年，毛泽东在八角楼油灯下写下《红色政权为什么能够存在？》《井冈山的斗争》。这盏普通竹篾油灯，彻夜不熄，为革命指明方向，见证艰苦奋斗与坚守信仰。',
    imageUrl: '/assets/images2/image2.png',
  },
  {
    id: 'e3',
    title: '南昌起义军旗',
    artist: '周恩来・贺龙',
    year: '1927',
    category: '革命宣传',
    description: '1927年南昌起义爆发，这面军旗宣告人民军队诞生，是中国共产党独立领导武装斗争的开端。',
    story: '起义前夕，周恩来、贺龙确定军旗样式：红底五角星镰刀斧头。军旗在起义中高高飘扬，冲破黑暗，唤醒民众，开启革命武装斗争新纪元，承载初心与使命。',
    imageUrl: '/assets/images2/image3.png',
  },
  {
    id: 'e4',
    title: '红军长征军用水壶',
    artist: '红军战士',
    year: '1934-1936',
    category: '革命宣传',
    description: '长征途中随身携带的水壶，见证二万五千里长征的艰苦卓绝，是跨越雪山草地的生存装备。',
    story: '水壶伴随红军翻雪山、过草地，壶身布满磕碰与包浆。在缺粮断水的绝境中，它承载战士生存希望，见证红军不怕牺牲、勇往直前的英雄气概。',
    imageUrl: '/assets/images2/image4.png',
  },
  {
    id: 'e5',
    title: '遵义会议会议记录',
    artist: '党中央',
    year: '1935',
    category: '革命宣传',
    description: '遵义会议确立毛泽东领导地位，挽救党与红军、挽救中国革命，是生死攸关的历史转折。',
    story: '手写会议记录记录核心决议与重要发言，字迹虽模糊却铭刻中国共产党独立自主解决革命问题的智慧与勇气，成为伟大转折的直接物证。',
    imageUrl: '/assets/images2/image5.png',
  },
  {
    id: 'e6',
    title: '延安《论持久战》油印本',
    artist: '毛泽东',
    year: '1938',
    category: '革命宣传',
    description: '《论持久战》科学预见抗战趋势，坚定全国抗战必胜信念，是指导全民族抗战的纲领性文献。',
    story: '1938年延安油印发行，纸张粗糙、油墨不均，但在敌后根据地广泛传播。军民手持油印本学习讨论，凝聚持久抗战的强大精神力量。',
    imageUrl: '/assets/images2/image6.png',
  },
  {
    id: 'e7',
    title: '八路军臂章',
    artist: '八路军',
    year: '1937-1945',
    category: '革命宣传',
    description: '八路军臂章是战士身份标识，见证抗日武装浴血奋战、保家卫国的光辉历程。',
    story: '白布底”八路”字样与编号简单却意义重大。战士佩戴臂章奔赴前线，平型关、百团大战的磨损与血迹镌刻着铁血荣光。',
    imageUrl: '/assets/images2/image7.png',
  },
  {
    id: 'e8',
    title: '西柏坡电报手稿',
    artist: '中共中央',
    year: '1948-1949',
    category: '革命宣传',
    description: '解放战争时期西柏坡电报指挥三大战役，是”新中国从这里走来”的核心物证。',
    story: '毛泽东、周恩来等在土坯房内起草数百封电报，指挥百万雄师决胜辽沈、淮海、平津，见证新中国诞生前夜运筹帷幄。',
    imageUrl: '/assets/images2/image8.png',
  },
  {
    id: 'e9',
    title: '开国大典话筒',
    artist: '天安门城楼',
    year: '1949',
    category: '革命宣传',
    description: '1949年10月1日开国大典使用的话筒，见证中华人民共和国成立的历史性时刻。',
    story: '话筒在城楼上传递出震撼世界的声音，承载亿万人民期盼，记录中华民族站起来的伟大瞬间，成为新中国诞生的标志性文物。',
    imageUrl: '/assets/images2/image9.png',
  },
  {
    id: 'e10',
    title: '抗美援朝志愿军军功章',
    artist: '志愿军',
    year: '1950-1953',
    category: '革命宣传',
    description: '抗美援朝战争中军功章是最高褒奖，见证志愿军铁血担当与国际主义精神。',
    story: '军功章镌刻上甘岭、长津湖等战役烽火记忆，承载”打得一拳开，免得百拳来”的英雄气概，是不畏强权捍卫和平的精神象征。',
    imageUrl: '/assets/images2/image10.png',
  },
  {
    id: 'e11',
    title: '雷锋日记原件',
    artist: '雷锋',
    year: '1960-1962',
    category: '革命宣传',
    description: '社会主义建设时期雷锋日记记录其思想成长与奉献初心，成为全国人民学习的精神标杆。',
    story: '日记字迹整齐、情感真挚，记载”把有限生命投入无限为人民服务”的初心，一字一句凝聚雷锋精神，影响一代又一代中国人。',
    imageUrl: '/assets/images2/image11.png',
  },
  {
    id: 'e12',
    title: '中共一大会址纪念章',
    artist: '中国共产党',
    year: '1921',
    category: '革命宣传',
    description: '纪念章见证中国共产党诞生，承载红船精神，是革命初心与使命的永恒象征。',
    story: '纪念章设计简洁庄重，见证党从小小红船到巍巍巨轮的百年征程，成为中国革命开天辟地的历史见证。',
    imageUrl: '/assets/images2/image12.png',
  },
];


export const TIMELINE: TimelineEvent[] = [
  { year: '1921', title: '中共一大召开', description: '中国共产党诞生，革命文物的历史源头自此开启。' },
  { year: '1935', title: '长征胜利会师', description: '红军长征留下大量实物遗存，革命文物体系初步形成。' },
  { year: '1942', title: '延安文艺座谈会', description: '确立文艺为工农兵服务，红色文艺类文物走向成熟。' },
  { year: '1949', title: '新中国成立', description: '革命文物成为国家记忆，系统性保护与传承全面展开。' }
];

export const SITES: MapSite[] = [
  { 
    id: 's1', 
    name: '鲁艺旧址', 
    coords: { x: 30, y: 40 }, 
    description: '延安鲁迅艺术学院旧址，版画艺术的发源地。',
    history: '这里曾聚集了全国顶尖的艺术家，他们在艰苦的环境下刻制出震惊世界的作品。'
  },
  { 
    id: 's2', 
    name: '杨家岭', 
    coords: { x: 60, y: 55 }, 
    description: '中共中央所在地，许多文艺政策在此制定。',
    history: '版画艺术家们常来此听取领导人的谈话，寻找创作方向。'
  },
  { 
    id: 's3', 
    name: '枣园', 
    coords: { x: 45, y: 70 }, 
    description: '书记处旧址，革命气息浓厚。',
    history: '艺术家们在这里深入群众生活，创作了一系列反映领袖与人民互动的作品。'
  }
];
