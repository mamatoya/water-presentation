export interface SlideContent {
  id: number;
  type: 'title' | 'content' | 'team' | 'data';
  title?: string;
  subtitle?: string;
  tagline?: string;
  content?: React.ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  skills: string[];
}
