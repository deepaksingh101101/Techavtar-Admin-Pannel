'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';
import { Subscription, SubscriptionData } from '@/constants/subscription-data';

export const SubscriptionClient: React.FC = () => {
  const router = useRouter();
  const initialData: Subscription[] = SubscriptionData;
  const [data, setData] = useState<Subscription[]>(initialData);

  const handleSearch = (searchValue: string) => {
    const filteredData = initialData.filter(item =>
      item.subscriptionPlan.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  const handleSort = (sortBy: string, sortOrder: 'asc' | 'desc') => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.subscriptionPlan.localeCompare(b.subscriptionPlan);
      } else {
        return b.subscriptionPlan.localeCompare(a.subscriptionPlan);
      }
    });
    setData(sortedData);
  };

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Subscription (${data.length})`}
          description="Manage Subscription"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/subscription`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        searchKey="subscriptionPlan"
        columns={columns}
        data={data}
        onSearch={handleSearch} 
      />
    </>
  );
};
