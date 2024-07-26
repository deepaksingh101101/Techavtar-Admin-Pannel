import { NavItem } from '@/types';

export type UserManagement = {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: {
    houseNumber: string;
    addressLine1: string;
    addressLine2?: string;
  };
  subscriptionType: string;
  deliveryFrequency: string;
  paymentType: string;
  subscriptionStartDate: string;
  subscriptionEndDate: string;
  accountStatus: 'Active' | 'Inactive';
  associatedEmployeeId: number;
  lastUpdateDate: string;
  createdDate: string;
};

export const userManagementData: UserManagement[] = [
  {
    userId: 1,
    firstName: 'John',
    lastName:"Doe",
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    address: {
      houseNumber: '123',
      addressLine1: 'Main St',
      addressLine2: 'Apt 4B'
    },
    subscriptionType: 'Weekly',
    deliveryFrequency: '4',
    paymentType: 'Credit Card',
    subscriptionStartDate: '2023-01-01',
    subscriptionEndDate: '2023-12-31',
    accountStatus: 'Active',
    associatedEmployeeId: 101,
    lastUpdateDate: '2023-07-01',
    createdDate: '2023-01-01'
  },
  {
    userId: 2,
    firstName: 'Ridhi',
    lastName:"Mishra",
    email: 'john.doe@example.com',
    phoneNumber: '11111111',
    address: {
      houseNumber: '123',
      addressLine1: 'Main St',
      addressLine2: 'Apt 4B'
    },
    subscriptionType: 'Quarterly',
    deliveryFrequency: '8',
    paymentType: 'Net Banking',
    subscriptionStartDate: '2023-01-01',
    subscriptionEndDate: '2023-12-31',
    accountStatus: 'Inactive',
    associatedEmployeeId: 101,
    lastUpdateDate: '2023-07-01',
    createdDate: '2023-01-01'
  },
  {
    userId: 3,
    firstName: 'Deepak',
    lastName:"Singh",
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    address: {
      houseNumber: '123',
      addressLine1: 'Main St',
      addressLine2: 'Apt 4B'
    },
    subscriptionType: 'Semi Annual',
    deliveryFrequency: '8',
    paymentType: 'UPI',
    subscriptionStartDate: '2023-01-01',
    subscriptionEndDate: '2023-12-31',
    accountStatus: 'Active',
    associatedEmployeeId: 101,
    lastUpdateDate: '2023-07-01',
    createdDate: '2023-01-01'
  },
  {
    userId: 4,
    firstName: 'Shivam',
    lastName:"Kumar",
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    address: {
      houseNumber: '123',
      addressLine1: 'Main St',
      addressLine2: 'Apt 4B'
    },
    subscriptionType: 'Annual',
    deliveryFrequency: '4',
    paymentType: 'Net Banking',
    subscriptionStartDate: '2023-01-01',
    subscriptionEndDate: '2023-12-31',
    accountStatus: 'Inactive',
    associatedEmployeeId: 101,
    lastUpdateDate: '2023-07-01',
    createdDate: '2023-01-01'
  },
  {
    userId: 5,
    firstName: 'John',
    lastName:"Doe",
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    address: {
      houseNumber: '123',
      addressLine1: 'Main St',
      addressLine2: 'Apt 4B'
    },
    subscriptionType: 'Trial',
    deliveryFrequency: '4',
    paymentType: 'Credit Card',
    subscriptionStartDate: '2023-01-01',
    subscriptionEndDate: '2023-12-31',
    accountStatus: 'Active',
    associatedEmployeeId: 101,
    lastUpdateDate: '2023-07-01',
    createdDate: '2023-01-01'
  },
  {
    userId: 6,
    firstName: 'John',
    lastName:"Doe",   
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    address: {
      houseNumber: '123',
      addressLine1: 'Main St',
      addressLine2: 'Apt 4B'
    },
    subscriptionType: 'Quarterly',
    deliveryFrequency: '8',
    paymentType: 'UPI',
    subscriptionStartDate: '2023-01-01',
    subscriptionEndDate: '2023-12-31',
    accountStatus: 'Inactive',
    associatedEmployeeId: 101,
    lastUpdateDate: '2023-07-01',
    createdDate: '2023-01-01'
  }
 
];

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'User',
    href: '/user',
    icon: 'user',
    label: 'User'
  },
  { 
    title: 'User Management',
    href: '/user-management',
    icon: 'management', 
    label: 'User Management'
  },
  {
    title: 'Profile',
    href: '/profile',
    icon: 'profile',
    label: 'Profile'
  }
];
