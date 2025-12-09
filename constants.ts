import { NavItem, Member, Paper, NewsItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'news', path: '/news' },
  { label: 'about', path: '/about' },
  { label: 'people', path: '/people' },
  { label: 'research', path: '/research' },
  { label: 'contact', path: '/contact' },
];

export const LAB_MEMBERS: Member[] = [
  {
    id: '1',
    name: 'Dr. Maria Rodriguez',
    role: 'Principal Investigator',
    bio: 'Focuses on memory consolidation and cognitive mapping.',
    image: 'https://picsum.photos/seed/person1/200/200'
  },
  {
    id: '2',
    name: 'Carlos Benitez',
    role: 'PhD Candidate',
    bio: 'Researching social cognition and empathy in digital environments.',
    image: 'https://picsum.photos/seed/person2/200/200'
  },
  {
    id: '3',
    name: 'Ana Torres',
    role: 'Lab Manager',
    bio: 'Coordinates experiments and outreach programs.',
    image: 'https://picsum.photos/seed/person3/200/200'
  }
];

export const PAPERS: Paper[] = [
  {
    id: 'p1',
    title: 'Cognitive Load and Decision Making in High-Stress Environments',
    authors: 'Rodriguez, M., & Smith, J.',
    journal: 'Journal of Experimental Psychology',
    year: 2024
  },
  {
    id: 'p2',
    title: 'The Plasticity of Spatial Memory in Early Adulthood',
    authors: 'Benitez, C., & Rodriguez, M.',
    journal: 'Neuropsychologia',
    year: 2023
  },
  {
    id: 'p3',
    title: 'Social Cues in Virtual Reality Interfaces',
    authors: 'Torres, A., Lee, K., & Rodriguez, M.',
    journal: 'Computers in Human Behavior',
    year: 2022
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: 'October 15, 2024',
    title: 'New Grant Awarded for Cognitive Aging Study',
    summary: 'The lab has received a 3-year grant to study the effects of bilingualism on cognitive aging in the Loja region.'
  },
  {
    id: 'n2',
    date: 'September 1, 2024',
    title: 'Welcome new PhD students',
    summary: 'We are excited to welcome two new doctoral candidates to the team this fall.'
  }
];