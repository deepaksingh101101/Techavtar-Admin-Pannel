// app/dashboard/user-management/page.tsx
import { ReportAndAnalytics } from '@/components/analytics/ReportAnalytics';
import BreadCrumb from '@/components/breadcrumb';
import MainLayout from '@/components/layout/main-layout';

const breadcrumbItems = [
    { title: 'Report And Analytics', 
        link: '/report'}
    ];

export default function ReportAndAnalyticsPage() {
  return (
    <MainLayout meta={{ title: 'Report And Analytics' }}>
      <div className="flex-1 space-y-4 min-h-screen p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <ReportAndAnalytics/>
      </div>
    </MainLayout>
  );
}

