
export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'language' | 'other';
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
