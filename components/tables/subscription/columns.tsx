'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { Subscription } from '@/constants/subscription-data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { CellAction } from './cell-action';

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
    enableHiding: false,
  },
  {
    accessorKey: 'subType',
    header: 'Sub Type',
    cell: ({ row }) => (
      <Select
        value={row.original.subType}
        onValueChange={(value) => {
          // Update the row data with the selected value
          row.original.subType = value;
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a sub type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Trial">Trial</SelectItem>
          <SelectItem value="Monthly">Monthly</SelectItem>
          <SelectItem value="Quarterly">Quarterly</SelectItem>
          <SelectItem value="Semi Annual">Semi Annual</SelectItem>
          <SelectItem value="Annual">Annual</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    accessorKey: 'noOfBag',
    header: 'No of Bag',
    cell: ({ row }) => (
      <Input
        type="number"
        value={row.original.noOfBag}
        onChange={(e) => {
          // Update the row data with the entered value
          row.original.noOfBag = e.target.value;
        }}
      />
    ),
  },
  {
    accessorKey: 'pricePercentageSeasonalVeggies',
    header: 'Price Percentage of Seasonal Veggies',
    cell: ({ row }) => (
      <Input
        type="number"
        value={row.original.pricePercentageSeasonalVeggies}
        onChange={(e) => {
          // Update the row data with the entered value
          row.original.pricePercentageSeasonalVeggies = e.target.value;
        }}
      />
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
