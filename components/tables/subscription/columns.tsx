'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Subscription } from '@/constants/subscription-data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Subscription>[] = [
  {
    accessorKey: 'subType',
    header: 'Sub Type',
    cell: ({ row, column, table }) => (
      <Select
        value={row.getValue(column.id)}
        onValueChange={(value) => {
          table.options.meta.updateData(row.index, column.id, value);
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
    cell: ({ row, column, table }) => (
      <Input
        type="number"
        value={row.getValue(column.id)}
        onChange={(e) => {
          table.options.meta.updateData(row.index, column.id, e.target.value);
        }}
      />
    ),
  },
  {
    accessorKey: 'pricePercentageSeasonalVeggies',
    header: 'Price Percentage of Seasonal Veggies',
    cell: ({ row, column, table }) => (
      <Input
        type="number"
        value={row.getValue(column.id)}
        onChange={(e) => {
          table.options.meta.updateData(row.index, column.id, e.target.value);
        }}
      />
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
