import type { ClubEvent, Benefit, FAQItem, ProjectCard, ActivityCard, GalleryItem } from './types';

// Add confirmed NYU events here when dates and locations are available.
export const EVENTS: ClubEvent[] = [];

export const ACTIVITIES: ActivityCard[] = [
  {
    icon: 'hackathon',
    title: 'Hackathons',
    description: 'Build together with Claude.',
  },
  {
    icon: 'workshop',
    title: 'Workshops',
    description: 'Learn by doing, at any level.',
  },
  {
    icon: 'demo',
    title: 'Project Sharing',
    description: 'Show your work. Get inspired.',
  },
  {
    icon: 'speaker',
    title: 'Speaker Events',
    description: 'Hear new perspectives on AI.',
  },
  {
    icon: 'office',
    title: 'Learning Together',
    description: 'Ask questions and learn together.',
  },
  {
    icon: 'community',
    title: 'Community',
    description: 'Meet curious minds from every major.',
  },
];

export const PROJECTS: ProjectCard[] = [
  { name: 'Study Companion', description: 'AI tutor that adapts to your courses.' },
  { name: 'Research Assistant', description: 'Summarize papers. Find connections.' },
  { name: 'Campus Bot', description: 'Everything about NYU, powered by Claude.' },
  { name: 'Accessibility Tool', description: 'Dense docs → clear language.' },
  { name: 'Creative Co-Pilot', description: 'Brainstorm, draft, iterate.' },
  { name: 'Your Startup', description: 'Prototype your idea in a weekend.' },
];

export const BENEFITS: Benefit[] = [
  { number: '01', title: 'Learn by Building', description: 'Explore Claude through hands-on projects and workshops.' },
  { number: '02', title: 'All Majors Welcome', description: 'Join whether you are new to building or already have experience.' },
  { number: '03', title: 'Find Your Community', description: 'Meet students with different skills, interests, and ideas.' },
  { number: '04', title: 'Share Your Work', description: 'Get feedback, learn from others, and grow your ideas together.' },
  { number: '05', title: 'Think Critically', description: 'Explore both the possibilities and the responsibilities of using AI.' },
  { number: '06', title: 'Keep Exploring', description: 'Try creative, technical, and interdisciplinary projects at your own pace.' },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Do I need to know how to code?',
    answer: 'No. All majors and experience levels are welcome.',
  },
  {
    question: 'What happens at the club?',
    answer: 'Learn, share projects, and build with Claude.',
  },
  {
    question: 'What can I build?',
    answer: 'Study tools, creative projects, research, and more.',
  },
  {
    question: 'Are Claude developer credits available?',
    answer: 'Ask the club team about availability and eligibility.',
  },
  {
    question: 'How do I join?',
    answer: 'Use the join link on this page.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [];

export const EVENT_FILTERS = ['All', 'Workshops', 'Hackathons', 'Socials'] as const;

export const CATEGORY_FILTER_MAP: Record<string, string[]> = {
  All: [],
  Workshops: ['workshop'],
  Hackathons: ['hackathon'],
  Socials: ['social', 'speaker', 'demo'],
};

export const NAV_LINKS = [
  { label: 'Events', href: '#events' },
  { label: 'Build', href: '#build' },
  { label: 'Join', href: '#join' },
  { label: 'FAQ', href: '#faq' },
];
