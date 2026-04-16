/**
 * 1. მენიუს ელემენტის ინტერფეისი
 * აქცენტი კეთდება კაფეს პროდუქტებზე (ყავა, დესერტი, სასმელი)
 */
export interface MenuItem {
  id: number;
  name: string;           // პროდუქტის სახელი (მაგ: "Moon Latte")
  description: string;    // აღწერა (მაგ: "არომატული ყავა ვანილის ნოტებით")
  price: number;          // ფასი (ლარში)
  category: 'ყავა' | 'დესერტი' | 'სასმელი' | 'სენდვიჩი'; // უფრო კონკრეტული კატეგორიები
  imageUrl: string;       // ფოტოს მისამართი
  isVegetarian?: boolean; // ვეგანური/ვეგეტარიანული ოფციებისთვის
}

/**
 * 2. ნავიგაციის ინტერფეისი
 * გამოიყენება Header-ისა და Footer-ის ლინკებისთვის
 */
export interface Navlink {
  label: string;
  path: string;
}

/**
 * 3. ჯავშნის ფორმა (Moon Café-ს სტუმრებისთვის)
 * მორგებულია მაგიდის დასაჯავშნად ან "Coffee Date"-ისთვის
 */
export interface ReservationForm {
  name: string;           // სტუმრის სახელი
  email: string;
  phone: string;          // ტელეფონის ნომერი კომუნიკაციისთვის
  date: string;           // სასურველი თარიღი
  time: string;           // სასურველი დრო
  guestsCount: number;    // ადამიანების რაოდენობა
  specialRequest?: string; // დამატებითი სურვილები (მაგ: "ფანჯარასთან")
}