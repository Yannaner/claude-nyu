import type { ClubEvent, Benefit, FAQItem, ProjectCard, ActivityCard, GalleryItem } from './types';

export const EVENTS: ClubEvent[] = [
  {
    id: 'prompt-workshop',
    date: '2026-03-05',
    time: '6:00 PM',
    title: 'Prompt Engineering Workshop',
    location: 'Bobst Library, Room 424',
    category: 'workshop',
    description: 'Learn to write prompts that get better results from Claude.',
  },
  {
    id: 'builder-kickoff',
    date: '2026-03-12',
    time: '7:00 PM',
    title: 'Builder Club Kickoff',
    location: 'Leslie eLab',
    category: 'social',
    description: 'Meet fellow builders and pick your first project.',
  },
  {
    id: 'weekend-hackathon',
    date: '2026-03-22',
    time: '10:00 AM',
    title: 'Weekend Hackathon',
    location: 'Tandon MakerSpace',
    category: 'hackathon',
    description: 'Two days. Any idea. Ship something real.',
  },
  {
    id: 'demo-night-1',
    date: '2026-04-02',
    time: '6:30 PM',
    title: 'Demo Night #1',
    location: 'Kimmel Center',
    category: 'demo',
    description: 'Show off your projects and get feedback from the community.',
  },
  {
    id: 'ai-humanities-panel',
    date: '2026-04-16',
    time: '5:00 PM',
    title: 'AI × Humanities Panel',
    location: 'Silver Center, Room 503',
    category: 'speaker',
    description: 'A conversation about AI\'s role in the humanities.',
  },
];

export const ACTIVITIES: ActivityCard[] = [
  {
    icon: 'hackathon',
    title: 'Hackathons',
    description: 'Weekend builds where any student can ship an AI project.',
  },
  {
    icon: 'workshop',
    title: 'Workshops',
    description: 'Hands-on sessions: prompting, API basics, no-code building.',
  },
  {
    icon: 'demo',
    title: 'Demo Nights',
    description: 'Show what you\'ve built. Get feedback. Get inspired.',
  },
  {
    icon: 'speaker',
    title: 'Speaker Events',
    description: 'Conversations with Anthropic engineers and AI researchers.',
  },
  {
    icon: 'office',
    title: 'Office Hours',
    description: 'Drop in for help with your Claude-powered projects.',
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
  { number: '01', title: 'Free API Credits', description: 'Build with Claude at no cost.' },
  { number: '02', title: 'Ship Real Projects', description: 'Go from idea to working prototype in a weekend.' },
  { number: '03', title: 'Insider Access', description: 'Private sessions with Anthropic engineers.' },
  { number: '04', title: 'Any Major Welcome', description: 'You don\'t need to code. Claude handles that part.' },
  { number: '05', title: 'Build Your Portfolio', description: 'Tangible projects that stand out on a resume.' },
  { number: '06', title: 'Global Network', description: 'Connect with student builders at 50+ universities.' },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Do I need to code?',
    answer: 'No. Claude lets anyone build software. All majors welcome.',
  },
  {
    question: 'What\'s the time commitment?',
    answer: 'Totally flexible. Come to events, build at your own pace.',
  },
  {
    question: 'How do I get API credits?',
    answer: 'Join the club and apply through our portal. Most members are approved within a week.',
  },
  {
    question: 'What can I build?',
    answer: 'Anything. Study tools, research assistants, creative projects, startup prototypes.',
  },
  {
    question: 'How do I join?',
    answer: 'Fill out the interest form. We welcome new members every semester.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { label: 'Hackathon F\'25', date: 'Fall 2025', gradient: 'from-[#d97757]/30 to-[#e8e0d0]', aspectRatio: 'aspect-[4/3]' },
  { label: 'Workshop: Prompting 101', date: 'Oct 2025', gradient: 'from-[#788c5d]/20 to-[#e8e0d0]', aspectRatio: 'aspect-square' },
  { label: 'Demo Night #1', date: 'Nov 2025', gradient: 'from-[#6a9bcc]/20 to-[#f4f3ee]', aspectRatio: 'aspect-[3/4]' },
  { label: 'Builder Club Kickoff', date: 'Sep 2025', gradient: 'from-[#d97757]/20 to-[#f4f3ee]', aspectRatio: 'aspect-[4/3]' },
  { label: 'AI × Policy Panel', date: 'Nov 2025', gradient: 'from-[#788c5d]/30 to-[#e8e0d0]', aspectRatio: 'aspect-square' },
  { label: 'Social: Claude & Coffee', date: 'Dec 2025', gradient: 'from-[#6a9bcc]/30 to-[#e8e0d0]', aspectRatio: 'aspect-[3/4]' },
];

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
