'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Subscription } from '@/constants/subscription-data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Subscription>[] = [
  {
    accessorKey: 'subType',
    header: ({ column, table }) => (
      <div className="flex items-center">
      
        <Select
          onValueChange={(value) => {
            table.options.meta.updateColumnData(column.id, value);
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
      </div>
    ),
    cell: ({ row, column, table }) => (
      <div>{row.getValue(column.id)}</div>
    ),
  },
  {
    accessorKey: 'noOfBag',
    header: ({ column, table }) => (
      <div className="flex items-center">
       
        <Input
          type="number"
          placeholder="No of Bag"
          onChange={(e) => {
            table.options.meta.updateColumnData(column.id, e.target.value);
          }}
        />
      </div>
    ),
    cell: ({ row, column, table }) => (
      <Input
        type="number"
        value={row.original.noOfBag}
        onChange={(e) => {
          table.options.meta.updateData(row.index, column.id, e.target.value);
        }}
      />
    ),
  },
  {
    accessorKey: 'price',
    header: ({ column, table }) => (
      <div className="flex items-center">
       
        <Input
          type="number"
          placeholder="Price"
          onChange={(e) => {
            table.options.meta.updateColumnData(column.id, e.target.value);
          }}
        />
      </div>
    ),
    cell: ({ row, column, table }) => (
      <Input
        type="number"
        value={row.original.price}
        onChange={(e) => {
          table.options.meta.updateData(row.index, column.id, e.target.value);
        }}
      />
    ),
  },
  {
    accessorKey: 'pricePercentageSeasonalVeggies',
    header: ({ column, table }) => (
      <div className="flex items-center">
       
        <Input
          type="number"
          placeholder="Percentage of Seasonal Veggies"
          onChange={(e) => {
            table.options.meta.updateColumnData(column.id, e.target.value);
          }}
        />
      </div>
    ),
    cell: ({ row, column, table }) => (
      <Input
        type="number"
        value={row.original.pricePercentageSeasonalVeggies}
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
