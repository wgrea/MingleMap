export interface LocationData {
  id: string;
  name: string;
  description: string;
  address: string;
  category: string;
  rating: number;
  reviews: number;
  crowdDensity: 'low' | 'medium' | 'high';
  dailySpecials: string[];
  photos: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  openingHours: {
    [key: string]: string;
  };
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage: Message;
  unreadCount: number;
}