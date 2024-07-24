'use client';

import { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Subscription } from '@/constants/subscription-data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Subscription>[] = [
  {
    accessorKey: 'subscriptionType',
    header: 'Subscription Type',
    cell: ({ row, column, table }) => (
      <Select
        value={row.original.subscriptionType || ''}
        onValueChange={(value) => {
          table.options.meta.updateData(row.index, column.id, value);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a Subscription type" />
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
    accessorKey: 'frequency',
    header: 'Frequency',
    cell: ({ row, column, table }) => (
      <Input
        type="number"
        value={row.original.noOfBag || ''}
        onChange={(e) => {
          table.options.meta.updateData(row.index, column.id, e.target.value);
        }}
      />
    ),
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row, column, table }) => (
      <Input
        type="number"
        value={row.original.price || ''}
        onChange={(e) => {
          table.options.meta.updateData(row.index, column.id, e.target.value);
        }}
      />
    ),
  },
  {
    accessorKey: 'pricePercentageSeasonalVeggies',
    header: 'Percentage of Seasonal Veggies',
    cell: ({ row, column, table }) => (
      <Input
        type="number"
        value={row.original.pricePercentageSeasonalVeggies || ''}
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

const TableComponent = () => {
  const [data, setData] = useState<Subscription[]>([
    {
      subscriptionType: '',
      noOfBag: '',
      price: '',
      pricePercentageSeasonalVeggies: '',
    },
  ]);

  const updateData = (rowIndex: number, columnId: string, value: any) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  const tableOptions = {
    data,
    columns,
    getCoreRowModel: () => {},
    meta: {
      updateData,
    },
  };

  return <Table {...tableOptions} />;
};

export default TableComponent;
