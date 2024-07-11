import BreadCrumb from '@/components/breadcrumb';
import { CreateOrder } from '@/components/forms/order-stepper/create-order';
import { CreateSubscriptionOne } from '@/components/forms/subscription-stepper/create-subscription';
import { ScrollArea } from '@/components/ui/scroll-area';

const breadcrumbItems = [{ title: 'Product', link: '/dashboard/product' }];
export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <CreateOrder  initialData={null} />
      </div>
    </ScrollArea>
  );
}
