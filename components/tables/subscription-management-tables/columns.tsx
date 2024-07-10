'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
// import { UserManagement } from '@/constants/user-management-data';
import { Checkbox } from '@/components/ui/checkbox';
import { SubscriptionManagement } from '@/constants/subscription-management-data';

export const columns: ColumnDef<SubscriptionManagement>[] = [
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
    accessorKey: 'subscriptionId',
    header: 'Subscription ID'
  },
  {
    accessorKey: 'userId',
    header: 'User ID'
  },
  {
    accessorKey: 'subscriptionPlan',
    header: 'Subscription Plan'
  },
  {
    accessorKey: 'numberOfDeliveries',
    header: 'Number Of Deliveries'
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
    accessorKey: 'subscriptionStatus',
    header: 'Subscription Status'
  },
  {
    accessorKey: 'deliveryDays',
    header: 'Delivery Days',
    cell: ({ row }) => (
      <ul>
        {row.original.deliveryDays?.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    )
  },
  {
    accessorKey: 'customizationOptions',
    header: 'Customization Options',
    cell: ({ row }) => (
      <ul>
        {row.original.customizationOptions?.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    )
  },
  {
    accessorKey: 'addons',
    header: 'Add-ons',
    cell: ({ row }) => (
      <ul>
        {row.original.addons?.map((addon, index) => (
          <li key={index}>{addon}</li>
        ))}
      </ul>
    )
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
