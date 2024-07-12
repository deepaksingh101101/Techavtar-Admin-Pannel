'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';
import { EmployeeManagement } from '@/constants/employee-management-data';

export const columns: ColumnDef<EmployeeManagement>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'employeeId',
    header: 'Employee ID'
  },
  {
    accessorKey: 'fullName',
    header: 'Full Name'
  },
  {
    accessorKey: 'role',
    header: 'Role'
  },
  {
    accessorKey: 'assignedUsers',
    header: 'Assigned Users',
    cell: ({ row }) => (
      <ul>
        {row.original.assignedUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    )
  },
  {
    accessorKey: 'contactInformation.email',
    header: 'Email'
  },
  {
    accessorKey: 'contactInformation.phone',
    header: 'Phone'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
