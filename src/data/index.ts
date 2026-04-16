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
    imageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=400"
  },
  {
    id: 2,
    name: "ნუშის კრუასანი",
    description: "ახლადგამომცხვარი, ფენოვანი ცომი ნუშის კრემითა და ფანტელებით.",
    price: 7.50,
    category: "დესერტი",
    imageUrl: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=400"
  }
];