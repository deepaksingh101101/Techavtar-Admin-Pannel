export interface ProductManagement {
  productId: number;
  productName: string;
  type: string; // Assuming two types for simplicity
  group: string;
  season: string;
  priority: string;
  roster: string;
  veggieNameInHindi: string;
  unitQuantity: number; // in grams
  pieces: number;
  addons?: string[]; // Array of add-ons
}


export const ProductManagementData: ProductManagement[] = [
  {
    productId: 1,
    productName: 'Carrot',
    type: 'Vegetable',
    group: 'Root Vegetables',
    season: 'Winter',
    priority: 'High',
    roster: 'Weekly',
    veggieNameInHindi: 'गाजर',
    unitQuantity: 500,
    pieces: 5,
    addons: ['Carrot', 'Top Greens']
  },
  {
    productId: 2,
    productName: 'Apple',
    type: 'Fruit',
    group: 'Pome Fruits',
    season: 'Autumn',
    priority: 'Medium',
    roster: 'Bi-weekly',
    veggieNameInHindi: 'सेब',
    unitQuantity: 1000,
    pieces: 4,
    addons: ['Apple', 'Cider']
  }
];
