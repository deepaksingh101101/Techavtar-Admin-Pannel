'use client';

import React, { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Subscription } from '@/constants/subscription-data';
import { Checkbox } from '@/components/ui/checkbox';
import { SubscriptionCellAction } from './cell-action';
import { Calendar, Check, X } from 'lucide-react';

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
        <span >{row.index + 1}</span>
      </div>
    ),
  },
  // {
  //   accessorKey: 'customerName',
  //   header: 'Customer Name',
  // },
  {
    accessorKey: 'subscriptionType',
    header: 'Subscription Type',
  },
  // {
  //   accessorKey: 'bagName',
  //   header: 'Bags Name',
  // },

  {
    accessorKey: 'subscriptionStartDate',
    header: 'Subscription Start Date',
    cell: ({ row }) => (
      <div className="flex items-center mt-1">
        <Calendar className="text-blue-500 mr-2" width={16} height={16} />
        <span className="text-[12px]">{row.original.subscriptionStartDate}</span>
      </div>
   
  )
  },
  {
    accessorKey: 'subscriptionEndDate',
    header: 'Subscription End Date',
    cell: ({ row }) => (
      <div className="flex items-center mt-1">
        <Calendar className="text-blue-500 mr-2" width={16} height={16} />
        <span className="text-[12px]">{row.original.subscriptionEndDate}</span>
      </div>
  )
  },
  {
    accessorKey: 'subscriptionStatus',
    header: 'Subscription Status',
    cell: ({ row }) => (
      <div 
        style={{ borderRadius: "20px" }}
        className={`flex items-center px-2 py-1 me-5  ${
          row.original.subscriptionStatus === 'Active' ? 'bg-green-400' : 'bg-red-400'
        }`}
      >
        {row.original.subscriptionStatus === 'Active' ? (
          <Check width={16} height={16} className="text-green-500 mr-2" />
        ) : (
          <X width={16} height={16} className="text-red-900 mr-2" />
        )}
        <span className='text-black bold'>{row.original.subscriptionStatus}</span>
      </div>
    )
  },
  {
    accessorKey: 'deliveryDays',
    header: 'Delivery Days',
    cell: ({ row }) => (
      <ul className='' >
        {row.original.deliveryDays?.map((option, index) => (
          <li className=''  key={index}>{option}</li>
        ))}
      </ul>
    )
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

// const TableComponent: React.FC = () => {
//   const [data, setData] = useState<Subscription[]>([
//     {
//       subscriptionType: 'Basic',
//       frequency: 'Monthly',
//       price: 10,
//       offers: '10% ',
//     },
//     {
//       subscriptionType: 'Premium',
//       frequency: 'Yearly',
//       price: 100,
//       offers: '20%',
//     },
//   ]);

//   return (
//     <div>
//       {/* Your table rendering logic should go here */}
//     </div>
//   );
// };

// export default TableComponent;
