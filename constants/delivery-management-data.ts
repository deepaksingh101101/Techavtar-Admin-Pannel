export interface DeliveryInfo {
  deliveryDate: string; // ISO format date string
  deliveryTimeSlot: string; // Example: '9am - 11am'
  assignedEmployee?: string;
  assignedRoutes?: string;
  deliveryStatus: 'Pending' | 'Delivered' | 'Cancelled'; // Delivery status options
}

export interface DeliveryManagement {
  orderId: number;
  empId?: number;
  customerName: string;
  delivery: DeliveryInfo;
  bagOrdered: string[]; // Array of product names or IDs
  totalWeight: number; // Total weight in kg
  addons?: string[]; // Array of add-ons
  paymentStatus: 'Paid' | 'Unpaid' | 'Pending'; // Example: paid, unpaid, pending
  specialInstructions?: string; // Special delivery instructions
  totalPrice?: number; // Total price
}

export const DeliveryManagementData: DeliveryManagement[] = [
  {
    orderId: 101,
    empId: 1022,
    customerName: "Deepak Singh",
    delivery: {
      deliveryDate: '2023-07-17',
      deliveryTimeSlot: '10am - 12pm',
      deliveryStatus: 'Delivered',
      assignedEmployee: "Deepak Singh",
      assignedRoutes: "Route 1"
    },
    bagOrdered: ['Regular Veggie Bag'],
    totalWeight: 10,
    totalPrice: 779,
    addons: ['Lemons'],
    paymentStatus: 'Paid',
    specialInstructions: 'Leave the package at the front door.'
  },
  {
    orderId: 102,
    empId: 10332,
    customerName: "Kartik Kumar",
    delivery: {
      deliveryDate: '2023-07-20',
      deliveryTimeSlot: '1pm - 3pm',
      deliveryStatus: 'Delivered',
      assignedEmployee: "Deepak Singh",
      assignedRoutes: "Route 1"
    },
    bagOrdered: ['Mini Veggie Bag'],
    totalWeight: 8,
    totalPrice: 733,
    addons: ['Lady Finger'],
    paymentStatus: 'Unpaid',
    specialInstructions: 'Call on arrival.'
  },
  {
    orderId: 103,
    empId: 1332,
    customerName: "Shivam Kumar",
    delivery: {
      deliveryDate: '2023-07-22',
      deliveryTimeSlot: '11am - 1pm',
      deliveryStatus: 'Cancelled',
      assignedEmployee: "Kartik Singh",
      assignedRoutes: "Route 1"
    },
    bagOrdered: ['Brinjal'],
    totalWeight: 5,
    totalPrice: 567,
    addons: [],
    paymentStatus: 'Unpaid',
    specialInstructions: 'Deliver to the back gate.'
  },
  {
    orderId: 104,
    empId: 1032,
    customerName: "Ridhi Mishra",
    delivery: {
      deliveryDate: '2023-07-25',
      deliveryTimeSlot: '2pm - 4pm',
      deliveryStatus: 'Pending',
      assignedEmployee: "Arya Singh",
      assignedRoutes: "Route 1"
    },
    bagOrdered: ['Regular Veggie Bag'],
    totalWeight: 5,
    totalPrice: 986,
    addons: ['Tomato', 'Potato'],
    paymentStatus: 'Paid',
    specialInstructions: 'Ring the bell twice.'
  },
  {
    orderId: 105,
    empId: 1022,
    customerName: "Arya Singh",
    delivery: {
      deliveryDate: '2023-07-27',
      deliveryTimeSlot: '10am - 12pm',
      deliveryStatus: 'Delivered',
      assignedEmployee: "Rohit Singh",
      assignedRoutes: "Route 1"
    },
    bagOrdered: ['Regular Veggie Bag'],
    totalWeight: 7,
    totalPrice: 999,
    addons: ['Carrots'],
    paymentStatus: 'Paid',
    specialInstructions: 'Leave with the neighbor if not home.'
  }
];
