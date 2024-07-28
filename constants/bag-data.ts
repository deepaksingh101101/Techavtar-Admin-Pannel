'use client';


export interface BagItem {
  itemName: string;
  itemPrice: number;
  itemPieces?: number;
  itemWeight?: number;
}

export interface Bag {
  bagName: string;
  bagItems: BagItem[];
  totalPrice: number;
  totalWeight?: number;
  totalPieces?: number;
  createdDate: string;
  updatedDate?: string;
  status: 'Active' | 'Inactive'; // Bag status
}

export const BagData: Bag[] = [
  {
    bagName: 'Regular Veggie Bag',
    bagItems: [
      { itemName: 'Carrots', itemPrice: 100, itemWeight: 1 },
      { itemName: 'Potatoes', itemPrice: 200, itemWeight: 2 },
      { itemName: 'Tomatoes', itemPrice: 200, itemWeight: 2 },
    ],
    totalPrice: 500,
    totalWeight: 5,
    totalPieces: undefined,
    createdDate: '2023-01-01',
    status: 'Active',
  },
  {
    bagName: 'Mini Veggie Bag',
    bagItems: [
      { itemName: 'Spinach', itemPrice: 100, itemPieces: 1 },
      { itemName: 'Onions', itemPrice: 100, itemPieces: 1 },
      { itemName: 'Garlic', itemPrice: 100, itemPieces: 1 },
    ],
    totalPrice: 300,
    totalWeight: undefined,
    totalPieces: 3,
    createdDate: '2023-07-01',
    status: 'Inactive',
  },]