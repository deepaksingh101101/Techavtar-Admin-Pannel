export interface ProductManagement {
  sno: number;
  productName: string;
  type: string; // Assuming two types for simplicity
  group: string;
  season: string;
  priority: string;
  roster: string;
  veggieNameInHindi: string;
  unitQuantity?: number; // in grams
  pieces?: number;
}


export const ProductManagementData: ProductManagement[] = [
  {
    sno: 1,
    productName: 'Arvi',
    type: '	Regular Veggie',
    group: 'Veggies',
    season: 'Monsoon',
    priority: 'High',
    roster: 'A',
    veggieNameInHindi: 'अरबी',
    unitQuantity: 500,
  },
  {
    sno: 2,
    productName: 'Cucumber (Kheera)',
    type: 'Salads',
    group: 'Salads',
    season: 'All',
    priority: 'Medium',
    roster: 'A',
    veggieNameInHindi: 'खीरा',
    unitQuantity: 700,
  }
];
