export interface ICategory {
  id: string;
  title: string;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  isAvailable: boolean;
}

export interface IBooking {
  id: string;
  customerName: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
}
export interface IReview {
  id: number;
  userName: string;
  comment: string;
  rating: number;
}