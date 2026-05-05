
export interface TourDate {
  id: string;
  date: string;
  venue: string;
  location: string;
  country: string;
  status: 'upcoming' | 'past';
  ticketUrl: string;
  timestamp: number;
}

export interface Album {
  id: string;
  title: string;
  year: string;
  coverUrl: string;
  tracks: Track[];
  price: number;
  isPreorder?: boolean;
}

export interface Track {
  id: string;
  title: string;
  duration: string;
  previewUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  type: 'ticket' | 'vip' | 'album';
  quantity: number;
  imageUrl: string;
  isSigned?: boolean;
}

export interface VIPPackage {
  id: string;
  name: string;
  price: number;
  description: string[];
}

