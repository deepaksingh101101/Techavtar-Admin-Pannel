// Define the ComplaintManagement interface
export interface ComplaintManagement {
  complaintId: number;
  userId: number;
  complaintType: 'Delay' | 'Bad quality' | 'Wrong item' | 'Not reached';
  description: string;
  status: 'Open' | 'Closed';
  resolution?: 'Coupon' | 'Store credits' | 'Add-on bag';
}

// Sample data for the complaint management system
export const ComplaintManagementData: ComplaintManagement[] = [
  {
    complaintId: 1,
    userId: 1,
    complaintType: 'Delay',
    description: 'Delivery was delayed by 2 days.',
    status: 'Open',
    resolution: 'Coupon'
  },
  {
    complaintId: 2,
    userId: 2,
    complaintType: 'Bad quality',
    description: 'Vegetables were not fresh.',
    status: 'Closed',
    resolution: 'Store credits'
  },
  {
    complaintId: 3,
    userId: 1,
    complaintType: 'Wrong item',
    description: 'Received a fruit basket instead of a veggie bag.',
    status: 'Open',
    resolution: 'Add-on bag'
  },
  {
    complaintId: 4,
    userId: 3,
    complaintType: 'Not reached',
    description: 'Order was not delivered.',
    status: 'Closed'
  }
];
