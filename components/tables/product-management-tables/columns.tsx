'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';
import { ProductManagement } from '@/constants/product-management-data';

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
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'productId',
    header: 'Product ID'
  },
  {
    accessorKey: 'productName',
    header: 'Product Name'
  },
  {
    accessorKey: 'type',
    header: 'Type'
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
    header: 'Priority'
  },
  {
    accessorKey: 'roster',
    header: 'Roster'
  },
  {
    accessorKey: 'veggieNameInHindi',
    header: 'Veggie Name in Hindi'
  },
  {
    accessorKey: 'unitQuantity',
    header: 'Unit Quantity (gms)'
  },
  {
    accessorKey: 'pieces',
    header: 'Pieces'
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
