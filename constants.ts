import { Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '首頁', href: '#home' },
  { label: '關於我', href: '#about' },
  { label: '作品集', href: '#portfolio' },
  { label: '聯絡我', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    category: 'Web App',
    description: '使用 React 與 Recharts 建構的現代化電商後台，提供即時數據視覺化與庫存管理功能。',
    imageUrl: 'https://picsum.photos/id/1/800/600',
    tags: ['React', 'Tailwind', 'Recharts'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 2,
    title: 'AI Chat Assistant',
    category: 'AI Integration',
    description: '整合 Gemini API 的智能對話機器人，支援多模態輸入與即時語意分析。',
    imageUrl: 'https://picsum.photos/id/20/800/600',
    tags: ['TypeScript', 'Gemini API', 'Node.js'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 3,
    title: 'Travel Log App',
    category: 'Mobile',
    description: '針對背包客設計的旅遊記錄應用，結合地圖定位與相片日記功能。',
    imageUrl: 'https://picsum.photos/id/48/800/600',
    tags: ['React Native', 'Firebase', 'Maps'],
    demoUrl: '#',
    repoUrl: '#'
  },
];