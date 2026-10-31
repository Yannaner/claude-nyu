import type { ClubEvent, Benefit, FAQItem, ProjectCard, ActivityCard, GalleryItem } from './types';

// Add confirmed NYU events here when dates and locations are available.
export const EVENTS: ClubEvent[] = [];

export const ACTIVITIES: ActivityCard[] = [
  {
    icon: 'hackathon',
    title: 'Hackathons',
    description: 'Bring an idea, collaborate with other students, and build with Claude.',
  },
  {
    icon: 'workshop',
    title: 'Workshops',
    description: 'Practice building with Claude through hands-on sessions for different experience levels.',
  },
  {
    icon: 'demo',
    title: 'Project Sharing',
    description: 'Share what you are working on and learn from other builders.',
  },
  {
    icon: 'speaker',
    title: 'Speaker Events',
    description: 'Explore AI ideas and learn from different perspectives.',
  },
  {
    icon: 'office',
    title: 'Learning Together',
    description: 'Ask questions, exchange ideas, and develop new skills with peers.',
  },
  {
    icon: 'community',
    title: 'Community',
    description: 'A space for every major to explore what AI makes possible.',
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
    answer: 'No. Students of every major and experience level are welcome, including those who have never written code.',
  },
  {
    question: 'What happens at the club?',
    answer: 'The club brings students together to learn, explore ideas, share projects, and build with Claude.',
  },
  {
    question: 'What can I build?',
    answer: 'You might explore study tools, research projects, creative ideas, or something entirely different. Start with a problem or idea that interests you.',
  },
  {
    question: 'Are Claude developer credits available?',
    answer: 'Ask the club team about current credit availability, eligibility, and how to apply.',
  },
  {
    question: 'How do I join?',
    answer: 'Use the sign-up link on this page to get started and hear about club activities.',
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
