'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { UserManagement } from '@/constants/user-management-data';
import { Checkbox } from '@/components/ui/checkbox';

export const columns: ColumnDef<UserManagement>[] = [
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
    accessorKey: 'userId',
    header: 'User ID'
  },
  {
    accessorKey: 'firstName',
    header: ' First Name'
  },
  {
    accessorKey: 'lastName',
    header: ' Last Name'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'subscriptionType',
    header: 'Subscription Type'
  },
  {
    accessorKey: 'deliveryFrequency',
    header: 'Delivery Frequency'
  },
  {
    accessorKey: 'address',
    header: 'Address',
    cell: ({ row }) => (
      <div>
        {row.original.address.houseNumber}, {row.original.address.addressLine1}, {row.original.address.addressLine2}
      </div>
    )
  },
 
 
  {
    accessorKey: 'phoneNumber',
    header: 'Phone Number'
  },
  {
    accessorKey: 'paymentType',
    header: 'Payment Type'
  },
  {
    accessorKey: 'subscriptionStartDate',
    header: 'Subscription Start Date'
  },
  {
    accessorKey: 'subscriptionEndDate',
    header: 'Subscription End Date'
  },
  {
    accessorKey: 'accountStatus',
    header: 'Account Status'
  },
  {
    accessorKey: 'associatedEmployeeId',
    header: 'Associated Employee ID'
  },
  {
    accessorKey: 'lastUpdateDate',
    header: 'Last Update Date'
  },
  {
    accessorKey: 'createdDate',
    header: 'Created Date'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
