import { CalendarDateRangePicker } from '@/components/date-range-picker';
import MainLayout from '@/components/layout/main-layout';
import ProtectedRoute from '@/components/layout/protected-route';
import { Overview } from '@/components/overview';
import { RecentSales } from '@/components/recent-sales';
import { Button } from '@/components/ui/button';
import itemsImage from '@/public/assets/icons/items.png'
import orderImage from '@/public/assets/icons/order.png'
import shopImage from '@/public/assets/icons/shop.png'
import customerImage from '@/public/assets/icons/customers.png'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { AreaChartComp } from '@/components/areaChartComp';
import { DonutComp } from '@/components/donutComp';
import { OrderRecentClient } from '@/components/tables/recent-order-tables/client';

export default function page() {

  const cardData = [
    {
      id: 1,
      title: 'Total Items',
      count: 234,
      description: '4 Items newly Added',
      imageSrc: itemsImage,
    },
    {
      id: 2,
      title: 'Total Orders',
      count: 150,
      description: '2 Orders placed today',
      imageSrc: orderImage,
    },
    {
      id: 3,
      title: 'Grocery Stores',
      count: '224',
      description: '0 Stores connected today',
      imageSrc: shopImage,
    },
    {
      id: 4,
      title: 'Total Customers',
      count: 1024,
      description: '10 Newly added',
      imageSrc: customerImage,
    },
  ];
  

  return (
    <ProtectedRoute>
      <MainLayout meta={{ title: 'Dashboard' }}>
        <ScrollArea className="h-full">
          <div className="flex-1 min space-y-4 p-4 pt-6 md:p-8">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                Hi, Welcome back 👋
              </h2>
              <div className="hidden items-center space-x-2 md:flex">
                <CalendarDateRangePicker />
                <Button>Download</Button>
              </div>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
              {/* <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics" disabled>
                  Analytics
                </TabsTrigger>
              </TabsList> */}
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {/* <Card className='flex justify-between items-center' >
                    <div className="flex flex-col">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Items
                      </CardTitle>
                    
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">234</div>
                      <p className="text-xs mt-1 text-muted-foreground">
                        4 Items newly Added
                      </p>
                    </CardContent>
                    </div>
                    <Image loading='lazy' className='itemsIcon pe-6' src={itemsImage} alt='' />
                  </Card> */}
                 {cardData?.map((data) => (
        <Card key={data.id} className="flex justify-between items-center  border rounded shadow">
          <div className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {data.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.count}</div>
              <p className="text-xs mt-1 text-muted-foreground">
                {data.description}
              </p>
            </CardContent>
          </div>
          <Image
            loading="lazy"
            className="itemsIcon  object-contain pe-2 h-[90px] w-[70px]"
            src={data.imageSrc}
            alt=""
           
          />
        </Card>
      ))}
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <Overview />
                    </CardContent>
                  </Card>
                  <Card className="col-span-4 md:col-span-3">
                    <CardHeader>
                      <CardTitle>Recent Sales</CardTitle>
                      <CardDescription>
                        You made 265 sales this month.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentSales />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="text-white-50 flex lg:flex-nowrap flex-wrap justify-between items-center">
          <AreaChartComp/>
          <DonutComp/>
        </div>


<div className="">
<OrderRecentClient  />

</div>


        </ScrollArea>
       
      </MainLayout>
    </ProtectedRoute>
  );
}
