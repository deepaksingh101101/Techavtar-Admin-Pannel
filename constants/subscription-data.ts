'use client';

export interface Subscription {
  subscriptionType: string;
  customerName: string;
  frequency: string;
  price: number;
  offers: string; 
  deliveryDays: string[];
  subscriptionStartDate: string;
  subscriptionEndDate: string;
  subscriptionStatus: 'Active' | 'Inactive'; // Subscription status
  paymentStatus?: string; // Example: paid, unpaid, etc.
  bagName?:string,
  netPrice?:number,
  visibility?:string
  // Add other fields as necessary
}

export const SubscriptionData: Subscription[] = [
  {
    subscriptionType: 'Annual',
    customerName: 'John Doe',
    frequency: 'Biweekly',
    price: 16455,
    offers: '25% Off',
    deliveryDays: ['Monday', 'Thursday'],
    subscriptionStartDate: '2023-01-01',
    subscriptionEndDate: '2023-12-31',
    subscriptionStatus: 'Active',
    paymentStatus: 'Paid',
    bagName:"Regular Veggie Bag",
    netPrice:15323,
    visibility: 'Admin',

    
  },
  {
    subscriptionType: 'Monthly',
    customerName: 'Jane Smith',
    frequency: 'Fortnightly',
    price: 15455,
    offers: '31% Off',
    deliveryDays: ['Wednesday', 'Saturday'],
    subscriptionStartDate: '2023-07-01',
    subscriptionEndDate: '2023-07-31',
    subscriptionStatus: 'Inactive',
    paymentStatus: 'Unpaid',
    bagName:"Mini Veggie Bag",
    netPrice:15323,
    visibility: 'Admin',



  },
  {
    subscriptionType: 'Quarterly',
    customerName: 'Alice Johnson',
    frequency: 'Biweekly',
    price: 13245,
    offers: '44% Off',
    deliveryDays: ['Tuesday', 'Friday'],
    subscriptionStartDate: '2023-04-01',
    subscriptionEndDate: '2023-06-30',
    subscriptionStatus: 'Active',
    paymentStatus: 'Paid',
    bagName:"Regular Veggie Bag",
    netPrice:15323,
    visibility: 'Admin',


  },
  // Add more sample data as needed
];
