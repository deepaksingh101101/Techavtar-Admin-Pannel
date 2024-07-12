import BreadCrumb from '@/components/breadcrumb';
import { ComplaintForm } from '@/components/forms/complaint-stepper/create-complaint';
import { CreateEmployeeForm } from '@/components/forms/employee-stepper/create-employee';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ComplaintManagementData } from '@/constants/complaint-management-data';

const breadcrumbItems = [{ title: 'Employee', link: '/dashboard/employee' }];
export default function page() {
  // Example structure of user options
 const UserOptions = [
  { id: '1', name: 'User One' },
  { id: '2', name: 'User Two' },
  { id: '3', name: 'User Three' },
];

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <CreateEmployeeForm  initialData={null} userOptions={UserOptions} />
      </div>
    </ScrollArea>
  );
}
