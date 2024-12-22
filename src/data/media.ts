export interface MediaItem {
  id: string;
  type: 'image';
  url: string;
  title: string;
  description: string;
  category: string;
}

export const portfolioMedia: MediaItem[] = [
  {
    id: 'kitchen-1',
    type: 'image',
    url: '/images/portfolio/kitchen-1.jpg',
    title: 'Dapur Modern Marmer',
    description: 'Desain dapur modern dengan backsplash marmer dan kabinet abu-abu',
    category: 'Dapur'
  },
  {
    id: 'kitchen-2',
    type: 'image',
    url: '/images/portfolio/kitchen-2.jpg',
    title: 'Dapur Minimalis Abu-abu',
    description: 'Kombinasi kabinet abu-abu dengan aksen kayu natural',
    category: 'Dapur'
  },
  {
    id: 'kitchen-3',
    type: 'image',
    url: '/images/portfolio/kitchen-3.jpg',
    title: 'Dapur Modern Hijau',
    description: 'Desain dapur dengan kabinet hijau dan aksen kayu',
    category: 'Dapur'
  },
  {
    id: 'kitchen-4',
    type: 'image',
    url: '/images/portfolio/kitchen-4.jpg',
    title: 'Dapur Kombinasi Kayu',
    description: 'Perpaduan kabinet kayu natural dengan aksen biru',
    category: 'Dapur'
  },
  {
    id: 'kitchen-5',
    type: 'image',
    url: '/images/portfolio/kitchen-5.jpg',
    title: 'Dapur Marmer Modern',
    description: 'Desain dapur mewah dengan marmer dan kabinet putih',
    category: 'Dapur'
  }
];