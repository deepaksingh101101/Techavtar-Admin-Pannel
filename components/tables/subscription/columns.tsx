'use client';

import React, { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Subscription } from '@/constants/subscription-data';
import { Checkbox } from '@/components/ui/checkbox';
import { SubscriptionCellAction } from './cell-action';

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
    accessorKey: 'subscriptionType',
    header: 'Subscription Type',
  },
  {
    accessorKey: 'frequency',
    header: 'Frequency',
    cell: ({ row }) => (
      <div className="">
        {row.original.frequency}
      </div>
    )
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => (
      <div className="">
        {row.original.price}
      </div>
    )
  },
  {
    accessorKey: 'offers',
    header: 'Offers',
  },
  {
    id: 'actions',
    cell: ({ row }) => <SubscriptionCellAction data={row.original} />,
  },
];

const TableComponent: React.FC = () => {
  const [data, setData] = useState<Subscription[]>([
    {
      subscriptionType: 'Basic',
      frequency: 'Monthly',
      price: 10,
      offers: '10% ',
    },
    {
      subscriptionType: 'Premium',
      frequency: 'Yearly',
      price: 100,
      offers: '20%',
    },
  ]);

  return (
    <div>
      {/* Your table rendering logic should go here */}
    </div>
  );
};

export default TableComponent;
