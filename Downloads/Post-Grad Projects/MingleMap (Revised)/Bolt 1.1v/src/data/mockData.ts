import { LocationData, Review, Conversation, Message } from '../types/location';

export const mockLocations: LocationData[] = [
  {
    id: '1',
    name: 'The Urban Café',
    description: 'A trendy café with great coffee and pastries, perfect for remote work or casual meetings.',
    address: '123 Main St, Downtown',
    category: 'café',
    rating: 4.5,
    reviews: 128,
    crowdDensity: 'medium',
    dailySpecials: ['Happy Hour 4-6pm', 'Monday: Half-price pastries'],
    photos: [
      'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg',
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
    ],
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    },
    openingHours: {
      'Monday': '7:00 AM - 8:00 PM',
      'Tuesday': '7:00 AM - 8:00 PM',
      'Wednesday': '7:00 AM - 8:00 PM',
      'Thursday': '7:00 AM - 8:00 PM',
      'Friday': '7:00 AM - 10:00 PM',
      'Saturday': '8:00 AM - 10:00 PM',
      'Sunday': '8:00 AM - 6:00 PM'
    }
  },
  {
    id: '2',
    name: 'Sunset Beach Bar',
    description: 'Beachfront bar with stunning views, refreshing cocktails, and live music on weekends.',
    address: '456 Ocean Ave, Beachside',
    category: 'bar',
    rating: 4.8,
    reviews: 256,
    crowdDensity: 'high',
    dailySpecials: ['Taco Tuesday', 'Sunday: Live Music'],
    photos: [
      'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
      'https://images.pexels.com/photos/2237655/pexels-photo-2237655.jpeg'
    ],
    coordinates: {
      lat: 37.7694,
      lng: -122.4862
    },
    openingHours: {
      'Monday': '12:00 PM - 11:00 PM',
      'Tuesday': '12:00 PM - 11:00 PM',
      'Wednesday': '12:00 PM - 11:00 PM',
      'Thursday': '12:00 PM - 1:00 AM',
      'Friday': '12:00 PM - 2:00 AM',
      'Saturday': '11:00 AM - 2:00 AM',
      'Sunday': '11:00 AM - 11:00 PM'
    }
  },
  {
    id: '3',
    name: 'Green Park Restaurant',
    description: 'Farm-to-table restaurant with organic dishes and a focus on sustainability.',
    address: '789 Park Lane, Greenville',
    category: 'restaurant',
    rating: 4.7,
    reviews: 189,
    crowdDensity: 'medium',
    dailySpecials: ['Wednesday: Chef\'s Special', 'Friday: Wine Tasting'],
    photos: [
      'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg'
    ],
    coordinates: {
      lat: 37.7835,
      lng: -122.4096
    },
    openingHours: {
      'Monday': '11:00 AM - 10:00 PM',
      'Tuesday': '11:00 AM - 10:00 PM',
      'Wednesday': '11:00 AM - 10:00 PM',
      'Thursday': '11:00 AM - 10:00 PM',
      'Friday': '11:00 AM - 11:00 PM',
      'Saturday': '10:00 AM - 11:00 PM',
      'Sunday': '10:00 AM - 9:00 PM'
    }
  },
  {
    id: '4',
    name: 'Tech Hub Coworking',
    description: 'Modern coworking space with high-speed internet, meeting rooms, and a vibrant community.',
    address: '101 Innovation Blvd, Tech District',
    category: 'coworking',
    rating: 4.6,
    reviews: 112,
    crowdDensity: 'low',
    dailySpecials: ['Monday: Community Breakfast', 'Thursday: Networking Event'],
    photos: [
      'https://images.pexels.com/photos/7974/pexels-photo.jpg',
      'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg'
    ],
    coordinates: {
      lat: 37.7790,
      lng: -122.4100
    },
    openingHours: {
      'Monday': '8:00 AM - 10:00 PM',
      'Tuesday': '8:00 AM - 10:00 PM',
      'Wednesday': '8:00 AM - 10:00 PM',
      'Thursday': '8:00 AM - 10:00 PM',
      'Friday': '8:00 AM - 10:00 PM',
      'Saturday': '9:00 AM - 6:00 PM',
      'Sunday': '9:00 AM - 6:00 PM'
    }
  },
  {
    id: '5',
    name: 'Downtown Fitness',
    description: 'State-of-the-art fitness center with a variety of classes and equipment.',
    address: '222 Fitness Way, Downtown',
    category: 'fitness',
    rating: 4.4,
    reviews: 87,
    crowdDensity: 'medium',
    dailySpecials: ['Tuesday: Yoga Class', 'Saturday: HIIT Workshop'],
    photos: [
      'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg',
      'https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg'
    ],
    coordinates: {
      lat: 37.7830,
      lng: -122.4305
    },
    openingHours: {
      'Monday': '5:00 AM - 11:00 PM',
      'Tuesday': '5:00 AM - 11:00 PM',
      'Wednesday': '5:00 AM - 11:00 PM',
      'Thursday': '5:00 AM - 11:00 PM',
      'Friday': '5:00 AM - 11:00 PM',
      'Saturday': '7:00 AM - 9:00 PM',
      'Sunday': '7:00 AM - 9:00 PM'
    }
  }
];

export const mockReviews: Review[] = [
  {
    id: '1',
    userId: '101',
    userName: 'Emma Johnson',
    userAvatar: 'https://i.pravatar.cc/150?u=emma',
    rating: 5,
    comment: 'Amazing place! The coffee is out of this world and the atmosphere is perfect for getting work done.',
    date: '2023-04-15'
  },
  {
    id: '2',
    userId: '102',
    userName: 'Michael Smith',
    userAvatar: 'https://i.pravatar.cc/150?u=michael',
    rating: 4,
    comment: 'Great spot, though it can get crowded during peak hours. The pastries are delicious!',
    date: '2023-03-22'
  },
  {
    id: '3',
    userId: '103',
    userName: 'Sophia Davis',
    userAvatar: 'https://i.pravatar.cc/150?u=sophia',
    rating: 5,
    comment: 'My favorite café in the city. The staff is friendly and the wifi is reliable.',
    date: '2023-05-01'
  }
];

export const mockMessages: Message[] = [
  {
    id: '1',
    senderId: '101',
    receiverId: '1', // This would be the current user's ID
    content: 'Hey! Are you going to the event at The Urban Café tonight?',
    timestamp: '2023-05-10T14:30:00Z',
    read: true
  },
  {
    id: '2',
    senderId: '1', // Current user
    receiverId: '101',
    content: 'Yes, I was planning to! What time are you heading there?',
    timestamp: '2023-05-10T14:35:00Z',
    read: true
  },
  {
    id: '3',
    senderId: '101',
    receiverId: '1',
    content: 'Around 7pm. Want to meet outside?',
    timestamp: '2023-05-10T14:40:00Z',
    read: false
  }
];

export const mockConversations: Conversation[] = [
  {
    id: '1',
    participants: ['1', '101'], // Current user and Emma Johnson
    lastMessage: mockMessages[2],
    unreadCount: 1
  },
  {
    id: '2',
    participants: ['1', '102'], // Current user and Michael Smith
    lastMessage: {
      id: '4',
      senderId: '102',
      receiverId: '1',
      content: 'Have you been to that new restaurant on Park Lane?',
      timestamp: '2023-05-09T18:20:00Z',
      read: true
    },
    unreadCount: 0
  }
];