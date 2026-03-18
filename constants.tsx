
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
  // 第一组·革命宣传
  {
    id: 'e1',
    title: '保卫边区',
    artist: '胡一川',
    year: '1938',
    category: '革命宣传',
    description: '强烈的黑白对比，极具冲击力的构图，在抗战初期起到了巨大的鼓舞作用。',
    story: '1938年，日军铁蹄逼近延安。胡一川握刀刻下这幅作品时，窑洞外炮声隐约可闻。他用最锐利的刀锋、最浓烈的黑与白，喊出了边区军民的誓言。画面中战士高举步枪的轮廓，成为那个年代最具感召力的视觉符号，被大量翻印张贴于陕北各村庄的土墙之上。',
    imageUrl: 'https://picsum.photos/seed/ex_e1/600/800',
  },
  {
    id: 'e2',
    title: '走向前线',
    artist: '力群',
    year: '1938',
    category: '革命宣传',
    description: '质朴的线条勾勒出奔赴战场的民兵队伍，展现了边区人民同仇敌忾的精神面貌。',
    story: '力群是延安版画的重要推动者之一。这幅作品创作于全面抗战爆发后的第二年，他以亲身目睹的民兵出征场景为蓝本，舍弃了一切装饰性细节，只留下最有力的剪影与动势。简洁的构图反而赋予了画面强大的震撼力，让每一个看到它的人都感受到那股奔涌的热血。',
    imageUrl: 'https://picsum.photos/seed/ex_e2/600/800',
  },
  {
    id: 'e3',
    title: '工农联合',
    artist: '彦涵',
    year: '1940',
    category: '革命宣传',
    description: '以工人与农民紧握双手的形象，象征着延安时期工农联合的革命理想。',
    story: '彦涵在创作这幅作品时，反复观察了铁匠与农夫的双手——那些布满老茧、充满力量的手。他最终决定将"握手"这一动作作为画面的全部，因为在他看来，这比任何宏大叙事都更能打动人心。作品完成后，被印制成海报广泛张贴，成为边区最受欢迎的宣传图像之一。',
    imageUrl: 'https://picsum.photos/seed/ex_e3/600/800',
  },
  {
    id: 'e4',
    title: '抗日救国',
    artist: '莫朴',
    year: '1939',
    category: '革命宣传',
    description: '饱满的构图中，男女老少并肩而立，共同发出抗日救国的时代呐喊。',
    story: '莫朴来自江南，他笔下的人物却带着黄土高原的粗粝气质。为了创作这幅作品，他深入陕北农村生活了三个月，与当地村民同吃同住。画中那位白发老人握拳的姿态，来自于一位亲历了两次战争的老农，他的眼神让莫朴久久难以忘怀。',
    imageUrl: 'https://picsum.photos/seed/ex_e4/600/800',
  },
  // 第二组·艺术巨匠
  {
    id: 'e5',
    title: '减租会',
    artist: '古元',
    year: '1943',
    category: '社会生活',
    description: '此画生动记录了当时延安边区农民争取权益的历史瞬间，线条凝练有力，充满了泥土气息。',
    story: '古元是延安版画民族化运动的核心人物。他长期深入农村，将民间剪纸的飞白技法融入木刻之中。《减租会》中那些面目各异的农民形象，皆取材于真实的人物写生，每一道刀痕都经过反复推敲。毛泽东看到此画后称赞："古元的画，有中国气派。"这句话成为整个延安版画民族化方向最有力的注脚。',
    imageUrl: 'https://picsum.photos/seed/ex_e5/600/800',
  },
  {
    id: 'e6',
    title: '牛犋变工队',
    artist: '古元',
    year: '1943',
    category: '民族精神',
    description: '展现了边区军民大生产运动中的互助精神，是延安版画从模仿西方走向民族化的里程碑。',
    story: '这幅画诞生于大生产运动高潮期，古元用了整整一个夏天跟随变工队劳动，才完成了这件作品的构思。他吸收了汉代画像砖的构图方式，将人物与耕牛安排在同一节奏的运动之中，形成了一种近乎音乐性的韵律感。这种将西方现代版画技法与中国传统造型融合的尝试，开创了延安版画独特的艺术语言。',
    imageUrl: 'https://picsum.photos/seed/ex_e6/600/800',
  },
  {
    id: 'e7',
    title: '开荒南泥湾',
    artist: '石鲁',
    year: '1944',
    category: '社会生活',
    description: '豪迈的笔触记录了三五九旅开垦南泥湾的壮举，洋溢着革命乐观主义精神。',
    story: '石鲁是那个时代最具个人气质的版画家。在创作《开荒南泥湾》时，他没有选择宏大的全景式构图，而是聚焦于一个战士高扬镐头的瞬间——泥土飞溅，汗水折射着阳光。这种微观视角反而捕捉到了大生产运动最真实的体温，让观者仿佛能感受到黄土地上那股蓬勃的生命力。',
    imageUrl: 'https://picsum.photos/seed/ex_e7/600/800',
  },
  {
    id: 'e8',
    title: '鲁艺晨曦',
    artist: '江丰',
    year: '1942',
    category: '社会生活',
    description: '晨光中的鲁艺旧址，艺术家们在窑洞前席地而坐，讨论创作，充满宁静的革命浪漫主义气息。',
    story: '江丰是鲁艺美术系的重要教员。这幅作品是他在文艺座谈会召开前夕完成的，带着一种对美好时光的珍视与留恋。画面中的人物皆有真实原型，那些在晨光下研讨的年轻面孔，后来大多成为了中国现代美术史上的重要人物。这件作品因此也成为了一份珍贵的历史档案。',
    imageUrl: 'https://picsum.photos/seed/ex_e8/600/800',
  },
  // 第三组·历史人物
  {
    id: 'e9',
    title: '刘志丹同志在瓦窑堡',
    artist: '江丰',
    year: '1940',
    category: '历史人物',
    description: '通过粗犷的木刻线条表现了革命将领的威严与亲民，是延安写实版画的代表作。',
    story: '刘志丹牺牲于1936年，江丰创作此画时，只能依靠战友们的口述与零星的历史照片来还原这位英雄的面貌。他反复修改了七稿，最终决定摒弃所有英雄化的姿态，将刘志丹刻画为一个正在与农民交谈的普通人。正是这种平实的处理，反而让画面充满了令人动容的真实力量。',
    imageUrl: 'https://picsum.photos/seed/ex_e9/600/800',
  },
  {
    id: 'e10',
    title: '延安女兵',
    artist: '力群',
    year: '1941',
    category: '历史人物',
    description: '简洁有力的线条勾勒出延安女战士的飒爽英姿，展现了革命女性的独立与自信。',
    story: '这幅画的模特是力群在鲁艺的学生，一位来自山东的农家女孩。她参军后学会了识字，又自愿报名参加了文工团。力群在她身上看到了那个时代最动人的变化——一个普通的农村女孩，如何在革命的洪流中成为了一个有理想、有力量的新女性。这种变化，正是他想用刀刻下来的。',
    imageUrl: 'https://picsum.photos/seed/ex_e10/600/800',
  },
  {
    id: 'e11',
    title: '边区劳模',
    artist: '古元',
    year: '1944',
    category: '历史人物',
    description: '以写实手法刻画边区劳动模范的朴实面貌，是延安版画人物塑造的经典之作。',
    story: '画中的老农叫吴满有，是陕甘宁边区赫赫有名的劳动模范。古元专程赶到他家，在那间漏风的窑洞里，对着煤油灯画了整整三个晚上的速写。他想捕捉的不是劳模的"光辉形象"，而是一个在土地上劳作了一辈子的普通人脸上，那种朴素而又坚韧的神情。',
    imageUrl: 'https://picsum.photos/seed/ex_e11/600/800',
  },
  {
    id: 'e12',
    title: '军民鱼水情',
    artist: '彦涵',
    year: '1943',
    category: '民族精神',
    description: '军民之间的深厚情谊跃然纸上，是延安时期军民关系最温情的视觉记录。',
    story: '彦涵创作这幅作品的灵感，来自于一次偶然目睹的场景：一位老大娘颤巍巍地为过路的战士缝补鞋底，战士坐在石头上，低着头，不知说了什么，让老人笑出了眼泪。彦涵站在远处，心里一动，悄悄掏出速写本。他后来说，那一刻他终于明白了什么是"军民鱼水情"——不是口号，是那双缝鞋的手，和那个低着头的背影。',
    imageUrl: 'https://picsum.photos/seed/ex_e12/600/800',
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
