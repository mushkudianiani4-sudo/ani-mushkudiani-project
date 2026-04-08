export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category?: string;
}

export interface NavLink {
  label: string;
  path: string;
}