// app/dashboard/user-management/page.tsx
import BreadCrumb from '@/components/breadcrumb';
import MainLayout from '@/components/layout/main-layout';
import { ProductManagementClient } from '@/components/tables/product-management-tables/client';
import { SubscriptionManagementClient } from '@/components/tables/subscription-management-tables/client';

const breadcrumbItems = [{ title: 'Product Management', link: '/dashboard/product-management' }];

export default function ProductManagementPage() {
  return (
    <MainLayout meta={{ title: 'Product Management' }}>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <ProductManagementClient  />
      </div>
    </MainLayout>
  );
}

