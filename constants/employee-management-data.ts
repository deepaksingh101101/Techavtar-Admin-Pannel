// Define the User interface
interface User {
  id: number;
  name: string;
}

// Define the EmployeeManagement interface
export interface EmployeeManagement {
  employeeId: number;
  fullName: string;
  role: string;
  assignedUsers: User[]; // Array of user objects assigned to the employee
  contactInformation: {
    email: string;
    phone: string;
  };
}

// Sample data for the employee management system
export const EmployeeManagementData: EmployeeManagement[] = [
  {
    employeeId: 1,
    fullName: 'John Doe',
    role: 'Manager',
    assignedUsers: [
      { id: 1, name: 'Alice Johnson' },
      { id: 2, name: 'Bob Williams' },
      { id: 3, name: 'Charlie Brown' }
    ],
    contactInformation: {
      email: 'john.doe@example.com',
      phone: '123-456-7890'
    }
  },
  {
    employeeId: 2,
    fullName: 'Jane Smith',
    role: 'Support Staff',
    assignedUsers: [
      { id: 4, name: 'David Miller' },
      { id: 5, name: 'Eva Green' }
    ],
    contactInformation: {
      email: 'jane.smith@example.com',
      phone: '987-654-3210'
    }
  },
  {
    employeeId: 3,
    fullName: 'Robert Brown',
    role: 'Technician',
    assignedUsers: [
      { id: 6, name: 'Fiona White' },
      { id: 7, name: 'George Black' },
      { id: 8, name: 'Hannah Blue' }
    ],
    contactInformation: {
      email: 'robert.brown@example.com',
      phone: '555-123-4567'
    }
  },
  {
    employeeId: 4,
    fullName: 'Emily Davis',
    role: 'Customer Service',
    assignedUsers: [
      { id: 9, name: 'Ian Yellow' },
      { id: 10, name: 'Jack Purple' }
    ],
    contactInformation: {
      email: 'emily.davis@example.com',
      phone: '444-555-6666'
    }
  }
];
