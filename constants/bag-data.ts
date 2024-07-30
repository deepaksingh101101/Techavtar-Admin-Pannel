export interface BagItem {
  itemName: string;
  itemPrice: number;
  unitQuantity?: number;
  maximumQuantity?: number;
  minimumQuantity?: number;
}

export interface Creator {
  role: 'Admin' | 'Customer' | 'Employee';
  name: string;
}

export interface Bag {
  bagName: string;
  bagItems: BagItem[];
  totalPrice: number;
  totalWeight?: number;
  totalPieces?: number;
  createdDate: string;
  updatedDate?: string;
  status: 'Active' | 'Inactive';
  createdBy: Creator;
  visibility?: string;
}

export const BagData: Bag[] = [
  {
    bagName: 'Regular Veggie Bag',
    bagItems: [
      { itemName: 'Carrots', itemPrice: 100, unitQuantity: 100, maximumQuantity: 10, minimumQuantity: 1 },
      { itemName: 'Potatoes', itemPrice: 200, unitQuantity: 200, maximumQuantity: 8, minimumQuantity: 2 },
      { itemName: 'Tomatoes', itemPrice: 200, unitQuantity: 200, maximumQuantity: 3, minimumQuantity: 2 },
    ],
    totalPrice: 500,
    totalWeight: 500,
    totalPieces: undefined,
    createdDate: '2023-01-01',
    status: 'Active',
    visibility: 'Admin',
    createdBy: { role: 'Admin', name: 'Deepak Singh' }
  },
  {
    bagName: 'Mini Veggie Bag',
    bagItems: [
      { itemName: 'Spinach', itemPrice: 100, unitQuantity: 100, maximumQuantity: 5, minimumQuantity: 1 },
      { itemName: 'Onions', itemPrice: 100, unitQuantity: 400, maximumQuantity: 10, minimumQuantity: 3 },
      { itemName: 'Garlic', itemPrice: 100, unitQuantity: 500, maximumQuantity: 8, minimumQuantity: 1 },
    ],
    totalPrice: 300,
    totalWeight: 1000,
    totalPieces: undefined,
    createdDate: '2023-07-01',
    status: 'Inactive',
    visibility: 'Customer',
    createdBy: { role: 'Customer', name: 'John Doe' }
  },
  {
    bagName: 'Veggie Bag',
    bagItems: [
      { itemName: 'Spinach', itemPrice: 100, unitQuantity: 300, maximumQuantity: 5, minimumQuantity: 1 },
      { itemName: 'Onions', itemPrice: 100, unitQuantity: 200, maximumQuantity: 10, minimumQuantity: 6 },
      { itemName: 'Garlic', itemPrice: 100, unitQuantity: 100, maximumQuantity: 8, minimumQuantity: 2 },
    ],
    totalPrice: 300,
    totalWeight: 600,
    totalPieces: undefined,
    createdDate: '2023-07-01',
    status: 'Inactive',
    createdBy: { role: 'Employee', name: 'John Roy' },
    visibility: 'Admin'
  }
];
