'use client';

import { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Subscription } from '@/constants/subscription-data';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Subscription>[] = [
  {
    accessorKey: 'subscriptionType',
    header: 'Subscription Type',
   
  },
  {
    accessorKey: 'frequency',
    header: 'Frequency',
  
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  
 
];

const TableComponent = () => {
  const [data, setData] = useState<Subscription[]>([
    {
      subscriptionType: '',
      frequency: '',
      price: 0,
     
    },
  ]);

};

export default TableComponent;
