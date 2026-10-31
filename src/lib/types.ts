export type EventCategory = 'workshop' | 'hackathon' | 'social' | 'speaker' | 'demo';

export type ClubEvent = {
  id: string;
  date: string;
  time: string;
  title: string;
  location: string;
  category: EventCategory;
  description?: string;
};

export type Benefit = {
  number: string;
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ProjectCard = {
  name: string;
  description: string;
};

export type ActivityCard = {
  icon: string;
  title: string;
  description: string;
};

export type GalleryItem = {
  label: string;
  date: string;
  gradient: string;
  aspectRatio: string;
};
