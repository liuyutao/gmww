
export type Section = 'home' | 'appreciation' | 'exploration' | 'heritage' | 'exhibition' | 'revolutionary' | 'relics' | 'snow';

export interface WoodcutWork {
  id: string;
  title: string;
  artist: string;
  year: string;
  category: '革命宣传' | '历史人物' | '社会生活' | '民族精神';
  description: string;
  imageUrl: string;
  detailUrl?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface MapSite {
  id: string;
  name: string;
  coords: { x: number; y: number };
  description: string;
  history: string;
}
