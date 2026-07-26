export type Category = 'Todos' | 'Design Gráfico' | 'Edição de Vídeo' | 'Motion Design' | 'Social Media' | 'Branding' | 'Web Design';

export interface Project {
  id: string;
  title: string;
  category: Category;
  shortDescription: string;
  fullDescription: string;
  client: string;
  year: string;
  thumbnail: string;
  videoUrl?: string; // Standard or sample MP4/Embed
  beforeAfterImages?: {
    before: string;
    after: string;
    beforeLabel?: string;
    afterLabel?: string;
  };
  gallery: string[];
  tools: string[];
  objectives: string[];
  results: string[];
  link?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  category: Category;
  description: string;
  iconName: string;
  deliverables: string[];
  popularTag?: string;
  deliveryTime: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Design' | 'Vídeo' | 'Motion' | 'Outros';
  icon: string;
  experienceYears: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  projectTitle: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Metric {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
  highlight?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: Category;
  budget: string;
  deadline: string;
  message: string;
}
