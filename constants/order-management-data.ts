export interface OrderManagement {
  orderId: number;
  userId: number;
  deliveryDate: string; // ISO format date string
  deliveryTimeSlot: string; // Example: '9am - 11am'
  deliveryStatus: 'Pending' | 'Delivered' | 'Cancelled'; // Delivery status options
  productsOrdered: string[]; // Array of product names or IDs
  totalWeight: number; // Total weight in kg
  addons?: string[]; // Array of add-ons
  paymentStatus: 'Paid' | 'Unpaid' | 'Pending'; // Example: paid, unpaid, pending
  specialInstructions?: string; // Special delivery instructions
}

export const OrderManagementData: OrderManagement[] = [
  {
    orderId: 101,
    userId: 1,
    deliveryDate: '2023-07-15',
    deliveryTimeSlot: '9am - 11am',
    deliveryStatus: 'Pending',
    productsOrdered: ['Veggie Bag', 'Fruit Basket'],
    totalWeight: 10,
    addons: ['Extra lemons'],
    paymentStatus: 'Paid',
    specialInstructions: 'Leave the package at the front door.'
  },
  {
    orderId: 102,
    userId: 2,
    deliveryDate: '2023-07-20',
    deliveryTimeSlot: '1pm - 3pm',
    deliveryStatus: 'Delivered',
    productsOrdered: ['Mixed Bag', 'Flower Bouquet'],
    totalWeight: 8,
    addons: ['Extra apples'],
    paymentStatus: 'Unpaid',
    specialInstructions: 'Call on arrival.'
  },
  {
    orderId: 103,
    userId: 3,
    deliveryDate: '2023-07-22',
    deliveryTimeSlot: '11am - 1pm',
    deliveryStatus: 'Cancelled',
    productsOrdered: ['Weekly Veggie Bag'],
    totalWeight: 5,
    addons: [],
    paymentStatus: 'Pending',
    specialInstructions: 'Deliver to the back gate.'
  },
  {
    orderId: 104,
    userId: 4,
    deliveryDate: '2023-07-25',
    deliveryTimeSlot: '2pm - 4pm',
    deliveryStatus: 'Pending',
    productsOrdered: ['Monthly Veggie Bag', 'Fruit Basket'],
    totalWeight: 12,
    addons: ['Extra bananas'],
    paymentStatus: 'Paid',
    specialInstructions: 'Ring the bell twice.'
  },
  {
    orderId: 105,
    userId: 5,
    deliveryDate: '2023-07-27',
    deliveryTimeSlot: '10am - 12pm',
    deliveryStatus: 'Delivered',
    productsOrdered: ['Bi-weekly Mixed Bag'],
    totalWeight: 7,
    addons: ['Extra carrots'],
    paymentStatus: 'Paid',
    specialInstructions: 'Leave with the neighbor if not home.'
  }
];