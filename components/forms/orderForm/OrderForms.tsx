'use client';

import { useState, useEffect } from 'react';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { OrderManagement } from '@/constants/order-management-data';

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
        assignedEmployee: "Shivam Singh",
        assignedRoutes: "Route 1"
      },
      {
        deliveryDate: '2023-07-18',
        deliveryTimeSlot: '9am - 11am',
        deliveryStatus: 'Pending',
        assignedEmployee: "Shivam Singh",
        assignedRoutes: "Route 1"
      },
      // Add more deliveries as needed
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
  const order = OrderData[0];
  const [darkMode, setDarkMode] = useState(false);



  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
     
      <div className="flex items-start justify-between">
        <Heading
          title={`Order Details`}
          description="View Order Details"
        />
      </div>
      <Separator />
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Order ID:</p>
            <p className="text-lg text-gray-900 dark:text-gray-100">{order.orderId}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Employee ID:</p>
            <p className="text-lg text-gray-900 dark:text-gray-100">{order.empId}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Customer Name:</p>
            <p className="text-lg text-gray-900 dark:text-gray-100">{order.customerName}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Bag Ordered:</p>
            <p className="text-lg text-gray-900 dark:text-gray-100">{order.bagOrdered.join(', ')}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Total Weight (kg):</p>
            <p className="text-lg text-gray-900 dark:text-gray-100">{order.totalWeight}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Total Price (₹):</p>
            <p className="text-lg text-gray-900 dark:text-gray-100">{order.totalPrice}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Add-ons:</p>
            <p className="text-lg text-gray-900 dark:text-gray-100">{order.addons?.join(', ') || 'None'}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Payment Status:</p>
            <p className={`text-lg ${order.paymentStatus === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
              {order.paymentStatus}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Special Instructions:</p>
            <p className="text-lg text-gray-900 dark:text-gray-100">{order.specialInstructions}</p>
          </div>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr className='bg-red-100 dark:bg-red-900'>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Delivery Date</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Time Slot</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Status</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Assigned Employee</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Assigned Route</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {order.deliveries.map((delivery, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-blue-100 dark:bg-blue-900' : 'bg-blue-200 dark:bg-blue-800'}>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{delivery.deliveryDate}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{delivery.deliveryTimeSlot}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${delivery.deliveryStatus === 'Delivered' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'}`}>
                    {delivery.deliveryStatus}
                  </span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{delivery.assignedEmployee}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{delivery.assignedRoutes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
