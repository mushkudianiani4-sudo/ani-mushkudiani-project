export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    category: 'სტარტერი' | 'მთავარი' | 'დესერტი' | 'სასმელი';
    imageUrl: string;
    isVegetarian?: boolean;
}

export interface Navlink {
    label: string;
    path: string;
}

export interface ReservationForm {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    guestsCount: number;
}