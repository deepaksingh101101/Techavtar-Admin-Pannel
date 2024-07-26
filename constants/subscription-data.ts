'use client';

export interface Subscription {
  subscriptionType: string;
  frequency: string;
  price: number;
  offers: string; 
  // Add other fields as necessary
}

export const SubscriptionData: Subscription[] = [
 
  { subscriptionType: 'Annual', frequency: '24', price: 16455, offers: '25% Off' },
  { subscriptionType: 'Monthly', frequency: '4', price: 15455, offers: '31% Off' },
  { subscriptionType: 'Quarterly', frequency: '12', price: 13245, offers: '44% Off'},
  // Add more sample data as needed
];
