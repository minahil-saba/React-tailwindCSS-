export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  allergens?: string[];
}