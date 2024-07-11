'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
// import { UserManagement, userManagementData } from '@/constants/user-management-data';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';
import { SubscriptionManagement, SubscriptionManagementData } from '@/constants/subscription-management-data';
import { ProductManagement, ProductManagementData } from '@/constants/product-management-data';

export const ProductManagementClient: React.FC = () => {
  const router = useRouter();
  const initialData: ProductManagement[] = ProductManagementData;
  const [data, setData] = useState<ProductManagement[]>(initialData);

  const handleSearch = (searchValue: string) => {
    const filteredData = initialData.filter(item =>
      item.productName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  const handleSort = (sortBy: string, sortOrder: 'asc' | 'desc') => {
    // Example: Sorting by first name
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.productName.localeCompare(b.productName);
      } else {
        return b.productName.localeCompare(a.productName);
      }
    });
    setData(sortedData);
  };

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Product (${data.length})`}
          description="Manage Product (Client side table functionalities.)"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/product`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        searchKey="productName"
        columns={columns}
        data={data}
        onSearch={handleSearch} 
        onSort={handleSort} 
      />
    </>
  );
};
