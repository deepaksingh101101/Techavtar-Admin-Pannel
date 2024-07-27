// Define the ComplaintManagement interface
export interface ComplaintManagement {
  sno: number;
  complaintType: 'Delay' | 'Bad quality' | 'Wrong item' | 'Not reached';
  status: 'Open' | 'Closed';
  resolution?: 'Coupon' | 'Store credits' | 'Add-on bag';
}

// Sample data for the complaint management system
export const ComplaintManagementData: ComplaintManagement[] = [
  {
    sno: 1,
    complaintType: 'Delay',
    status: 'Open',
    resolution: 'Coupon'
  },
  {
    sno: 2,
    complaintType: 'Bad quality',
    status: 'Closed',
    resolution: 'Store credits'
  },
  {
    sno: 3,
    complaintType: 'Wrong item',
    status: 'Open',
    resolution: 'Add-on bag'
  },
  {
    sno: 4,
    complaintType: 'Not reached',
    status: 'Closed',
    resolution: 'Add-on bag'
  }
];
