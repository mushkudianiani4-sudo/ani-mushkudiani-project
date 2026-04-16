// src/types/index.ts

export interface NavItem {
  label: string;
  path: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// ახალი ინტერფეისი API-დან წამოსული კერძისთვის
export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
}