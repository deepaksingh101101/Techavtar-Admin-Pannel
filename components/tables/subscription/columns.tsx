'use client';

import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Subscription } from '@/constants/subscription-data';
import { Checkbox } from '@/components/ui/checkbox';
import { SubscriptionCellAction } from './cell-action';
import { Calendar, Check, X, IndianRupee } from 'lucide-react';

export const columns: ColumnDef<Subscription>[] = [
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
    accessorKey: 'sno',
    header: 'Sno',
    cell: ({ row }) => (
      <div className="flex items-center mt-1">
        <span>{row.index + 1}</span>
      </div>
    ),
  },
  {
    accessorKey: 'subscriptionType',
    header: 'Subscription Type',
  },
  {
    accessorKey: 'bagName',
    header: 'Bags Name',
  },
  {
    accessorKey: 'subscriptionStatus',
    header: 'Subscription Status',
    cell: ({ row }) => (
      <div 
        style={{ borderRadius: "20px" }}
        className={`flex items-center px-2 py-1 me-5 ${
          row.original.subscriptionStatus === 'Active' ? 'bg-green-400' : 'bg-red-400'
        }`}
      >
        {row.original.subscriptionStatus === 'Active' ? (
          <Check width={16} height={16} className="text-green-500 mr-2" />
        ) : (
          <X width={16} height={16} className="text-red-900 mr-2" />
        )}
        <span className="text-black bold">{row.original.subscriptionStatus}</span>
      </div>
    )
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
    accessorKey: 'frequency',
    header: 'Frequency',
    cell: ({ row }) => (
      <div>
        {row.original.frequency}
      </div>
    )
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => (
      <div className="flex items-center">
        <IndianRupee className="mr-1" width={16} height={16} />
        {row.original.price}
      </div>
    )
  },
  {
    accessorKey: 'offers',
    header: 'Offers',
  },
  {
    accessorKey: 'netPrice',
    header: 'Net Price',
    cell: ({ row }) => (
      <div className="flex items-center">
        <IndianRupee className="mr-1" width={16} height={16} />
        {row.original.netPrice}
      </div>
    )
  },
  {
    id: 'actions',
    cell: ({ row }) => <SubscriptionCellAction data={row.original} />,
  },
];
