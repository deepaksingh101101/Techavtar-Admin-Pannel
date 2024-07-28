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
  price?:number;
  available?:string;

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
    price:200,
    veggieNameInHindi: 'अरबी',
    unitQuantity: 1000,
    available:"Yes"
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
    unitQuantity: 1000,
    price:100,
    available:"No"
  }
];
