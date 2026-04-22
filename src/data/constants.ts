export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'ყავა' | 'დესერტი' | 'სასმელი' | 'სენდვიჩი';
  imageUrl: string;
}

export const navLinks = [
  { label: "მთავარი", path: "/" },
  { label: "მენიუ", path: "/menu" },
  { label: "ისტორია", path: "/about" },
  { label: "კონტაქტი", path: "/contact" }
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Moon ლატე",
    description: "არომატული ესპრესო, ორთქლზე ათქვეფილი რძითა და ვანილის ნოტებით.",
    price: 9.00,
    category: "ყავა",
    imageUrl: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=400&q=60&fm=webp"
  },
  {
    id: 2,
    name: "კაპუჩინო",
    description: "კლასიკური იტალიური კაპუჩინო რბილი რძის ქაფით.",
    price: 8.00,
    category: "ყავა",
    imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=60&fm=webp"
  },
  {
    id: 3,
    name: "ესპრესო",
    description: "ძლიერი, კონცენტრირებული ყავა ნამდვილი იტალიური რეცეპტით.",
    price: 5.00,
    category: "ყავა",
    imageUrl: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=400&q=60&fm=webp"
  },
  {
    id: 4,
    name: "ნუშის კრუასანი",
    description: "ახლადგამომცხვარი ფენოვანი ცომი ნუშის კრემითა და ფანტელებით.",
    price: 7.50,
    category: "დესერტი",
    imageUrl: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?auto=format&fit=crop&w=400&q=60&fm=webp"
  },
  {
    id: 5,
    name: "შოკოლადის ფონდანი",
    description: "თბილი შოკოლადის ტორტი თხევადი გულით და ვანილის ნაყინით.",
    price: 12.00,
    category: "დესერტი",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=60&fm=webp"
  },
  {
    id: 6,
    name: "ტირამისუ",
    description: "იტალიური კლასიკა — მასკარპონე, ესპრესო და კაკაო.",
    price: 11.00,
    category: "დესერტი",
    imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&q=60&fm=webp"
  },
  {
    id: 7,
    name: "მოჰიტო",
    description: "გამაგრილებელი პიტნის კოქტეილი ლაიმითა და ყინულით.",
    price: 10.00,
    category: "სასმელი",
    imageUrl: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=400&q=60&fm=webp"
  },
  {
    id: 8,
    name: "ავოკადოს ტოსტი",
    description: "მოხალული პური ავოკადოთი, კვერცხით და მიკრო მწვანილით.",
    price: 13.00,
    category: "სენდვიჩი",
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=60&fm=webp"
  },
  {
    id: 9,
    name: "კლუბ სენდვიჩი",
    description: "სამსართულიანი სენდვიჩი ქათმით, ბეკონით და ბოსტნეულით.",
    price: 14.00,
    category: "სენდვიჩი",
    imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=60&fm=webp"
  }
];