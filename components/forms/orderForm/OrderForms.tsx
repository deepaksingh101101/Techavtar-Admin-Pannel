'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { OrderManagement } from '@/constants/order-management-data';
// import { UserManagement, userManagementData } from '@/constants/user-management-data';

export const OrderData: OrderManagement[] = [
  {
    orderId: 101,
    empId: 1022,
    customerName: "Deepak Singh",
    deliveries: [
      {
        deliveryDate: '2023-07-17',
        deliveryTimeSlot: '10am - 12pm',
        deliveryStatus: 'Delivered',
      },
      {
        deliveryDate: '2023-07-18',
        deliveryTimeSlot: '9am - 11am',
        deliveryStatus: 'Pending',
      },
      {
        deliveryDate: '2023-07-19',
        deliveryTimeSlot: '9am - 11am',
        deliveryStatus: 'Pending',
      },
      {
        deliveryDate: '2023-07-20',
        deliveryTimeSlot: '9am - 11am',
        deliveryStatus: 'Pending',
      },
      {
        deliveryDate: '2023-07-20',
        deliveryTimeSlot: '9am - 11am',
        deliveryStatus: 'Pending',
      },
      {
        deliveryDate: '2023-07-20',
        deliveryTimeSlot: '9am - 11am',
        deliveryStatus: 'Pending',
      },
      {
        deliveryDate: '2023-07-20',
        deliveryTimeSlot: '9am - 11am',
        deliveryStatus: 'Pending',
      },
      {
        deliveryDate: '2023-07-20',
        deliveryTimeSlot: '9am - 11am',
        deliveryStatus: 'Pending',
      },
    ],
    bagOrdered: ['Regular Veggie Bag'],
    totalWeight: 10,
    totalPrice: 779,
    addons: ['Lemons'],
    paymentStatus: 'Paid',
    specialInstructions: 'Leave the package at the front door.'
  }
]

export const OrderView: React.FC = () => {
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Order Details`}
          description="View Order Details"
        />
      </div>
      <Separator />
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className='bg-red-100'>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Delivery Date</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Time Slot</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {OrderData[0].deliveries.map((delivery, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'}>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{delivery.deliveryDate}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{delivery.deliveryTimeSlot}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{delivery.deliveryStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
