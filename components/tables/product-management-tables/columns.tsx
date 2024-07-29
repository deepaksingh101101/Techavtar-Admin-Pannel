'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';
import { ProductManagement } from '@/constants/product-management-data';
import Image from 'next/image'; // Import Image component

import vegetable from '@/public/assets/vegetables_862860.png'; 
import fruit from '@/public/assets/strawberry_13643533.png'; 

export const columns: ColumnDef<ProductManagement>[] = [
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
    enableSorting: true,
    enableHiding: false
  },
  {
    accessorKey: 'sno',
    header: 'Sno',
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: 'productName',
    header: 'Product Name'
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => (
      <div className="flex items-center me-9">
        {row.original.type === 'Vegetable' && (
          <Image src={vegetable} alt="Vegetable" width={20} height={20} />
        )}
        {row.original.type === 'Fruit' && (
          <Image src={fruit} alt="Fruit" width={20} height={20} />
        )}
        <span className="ml-2">{row.original.type}</span>
      </div>
    )
  },
  {
    accessorKey: 'group',
    header: 'Group'
  },
  {
    accessorKey: 'season',
    header: 'Season'
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
    cell: ({ row }) => (
      <div 
        style={{ borderRadius: "20px" }}
        className={`flex items-center px-2 py-1 ${
          row.original.priority === 'High' ? 'bg-red-400' :
          row.original.priority === 'Low' ? 'bg-yellow-400' :
          row.original.priority === 'Medium' ? 'bg-green-400' :
          'bg-red-400'
        }`}
      >
        <span className='text-black bold'>{row.original.priority}</span>
      </div>
    )
  },
  {
    accessorKey: 'price',
    header: 'Product Price',
    cell: ({ row }) => (
      <div className="text-center">
       ₹{row.original.price}
      </div>
    )
  },
  {
    accessorKey: 'available',
    header: 'Available',
    cell: ({ row }) => (
      <div 
        style={{ borderRadius: "20px" }}
        className={`flex items-center px-2 py-1 ${
          row.original.available === 'Yes' ? 'bg-green-400' :
          'bg-red-400'
        }`}
      >
        <span className='text-black bold'>{row.original.available}</span>
      </div>
    )
  },
  {
    accessorKey: 'visibility',
    header: 'Visibility',
    cell: ({ row }) => (
      <div 
        style={{ borderRadius: "20px" }}
        className={`flex items-center px-2 py-1 ${
          row.original.visibility === 'Admin' ? 'bg-blue-400' :
          row.original.visibility === 'Customer+Admin' ? 'bg-orange-400' :
          'bg-red-400'
        }`}
      >
<span className='text-black bold'>{row.original.visibility === 'Admin' ? "Admin" : "Public"}</span>
</div>
    )
  },
  {
    accessorKey: 'roster',
    header: 'Roster'
  },
  {
    accessorKey: 'veggieNameInHindi',
    header: 'Veggie Name in Hindi',
    cell: ({ row }) => (
      <div className="text-center">
        {row.original.veggieNameInHindi}
      </div>
    )
  },
  // {
  //   accessorKey: 'unitQuantity',
  //   header: 'Unit Quantity',
  //   cell: ({ row }) => (
  //     <div className="text-center">
  //       {row.original.unitQuantity} gm
  //     </div>
  //   )
    
  // },
  {
    accessorKey: 'maxQuantity',
    header: 'Max Quantity',
    cell: ({ row }) => (
      <div className="text-center">
        {row.original.maxQuantity} gm
      </div>
    )
    
  },
  {
    accessorKey: 'minQuantity',
    header: 'Min Quantity',
    cell: ({ row }) => (
      <div className="text-center">
        {row.original.minQuantity} gm
      </div>
    )
    
  },
  {
    accessorKey: 'pieces',
    header: 'Pieces',
    cell: ({ row }) => (
      <div className="text-center">
        {row.original.pieces}
      </div>
    )
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
