export type SlideLayout = 'cover' | 'list' | 'cards' | 'timeline' | 'section' | 'closing' | 'split';

export interface SlideData {
  id: number;
  layout: SlideLayout;
  tag?: string;
  tagSub?: string;
  title: string;
  subtitle?: string;
  content?: string[];
  cards?: { title?: string; text: string }[];
  highlight?: string;
  footerNote?: string;
  imagePlaceholder?: boolean; // Flag to show a box for an image
  authorName?: string;
  authorRole?: string;
  authorOab?: string;
  authorOAB?: string;
  authorImage?: string;
}
