// subscription-data.ts
'use client';

export interface Subscription {
 
  subscriptionType: string;
 
  frequency: string;
  price: number;
  // Add other fields as necessary
}

export const SubscriptionData: Subscription[] = [
  {  subscriptionType: 'Trial', frequency: 'Weekly', price: 20 },
  {   subscriptionType: 'Standard',  frequency: 'Monthly', price: 50 },
  {  subscriptionType: 'Premium', frequency: 'Biweekly', price: 200 },
  // Add more sample data as needed
];

