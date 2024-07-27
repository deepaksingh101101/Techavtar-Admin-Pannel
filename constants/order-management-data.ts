export interface OrderManagement {
  orderId: number;
  customerName: string;
  deliveryDate: string; // ISO format date string
  deliveryTimeSlot: string; // Example: '9am - 11am'
  deliveryStatus: 'Pending' | 'Delivered' | 'Cancelled'; // Delivery status options
  bagOrdered: string[]; // Array of product names or IDs
  totalWeight: number; // Total weight in kg
  addons?: string[]; // Array of add-ons
  paymentStatus: 'Paid' | 'Unpaid' | 'Pending'; // Example: paid, unpaid, pending
  specialInstructions?: string; // Special delivery instructions
}

export const OrderManagementData: OrderManagement[] = [
  {
    orderId: 101,
    customerName: "Deepak singh",
    deliveryDate: '2023-07-15',
    deliveryTimeSlot: '9am - 11am',
    deliveryStatus: 'Pending',
    bagOrdered: ['Regular Veggie Bag'],
    totalWeight: 10,
    addons: ['Lemons'],
    paymentStatus: 'Paid',
    specialInstructions: 'Leave the package at the front door.'
  },
  {
    orderId: 102,
    customerName: "Kartik Kumar",
    deliveryDate: '2023-07-20',
    deliveryTimeSlot: '1pm - 3pm',
    deliveryStatus: 'Delivered',
    bagOrdered: ['Mini Veggie Bag'],
    totalWeight: 8,
    addons: ['Lady Finger'],
    paymentStatus: 'Unpaid',
    specialInstructions: 'Call on arrival.'
  },
  {
    orderId: 103,
    customerName: "Shivam Kumar",
    deliveryDate: '2023-07-22',
    deliveryTimeSlot: '11am - 1pm',
    deliveryStatus: 'Cancelled',
    bagOrdered: ['Brinjal'],
    totalWeight: 5,
    addons: [],
    paymentStatus: 'Unpaid',
    specialInstructions: 'Deliver to the back gate.'
  },
  {
    orderId: 104,
    customerName: "Ridhi Mishra",
    deliveryDate: '2023-07-25',
    deliveryTimeSlot: '2pm - 4pm',
    deliveryStatus: 'Pending',
    bagOrdered: ['Regular Veggie Bag'],
    totalWeight: 5,
    addons: ['Tomato','Potato'],
    paymentStatus: 'Paid',
    specialInstructions: 'Ring the bell twice.'
  },
  {
    orderId: 105,
    customerName: "Arya Singh",
    deliveryDate: '2023-07-27',
    deliveryTimeSlot: '10am - 12pm',
    deliveryStatus: 'Delivered',
    bagOrdered: ['Regular Veggie Bag'],
    totalWeight: 7,
    addons: ['Carrots'],
    paymentStatus: 'Paid',
    specialInstructions: 'Leave with the neighbor if not home.'
  }
];