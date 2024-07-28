import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';
import { OrderManagement } from '@/constants/order-management-data';
import { Check, X, Calendar, Clock } from 'lucide-react';

export const columns: ColumnDef<OrderManagement>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'orderId',
    header: 'Order ID'
  },
  {
    accessorKey: 'empId',
    header: 'Emp ID'
  },
  {
    accessorKey: 'customerName',
    header: 'Customer Name',
    cell: ({ row }) => (
      <div className="">
        {row.original.customerName}
      </div>
    )
  },
  {
    accessorKey: 'deliveryDate',
    header: 'Delivery Date',
    cell: ({ row }) => (
        <div className="flex items-center mt-1">
          <Calendar className="text-blue-500 mr-2" width={16} height={16} />
          <span className="text-[12px]">{row.original.deliveryDate}</span>
        </div>
     
    )
  },
  {
    accessorKey: 'deliveryTimeSlot',
    header: 'Delivery Time Slot',
    cell: ({ row }) => (
      <div className="flex items-center mt-1">
        <Clock className="text-blue-500 mr-2" width={16} height={16} />
        <span className="text-[12px]">{row.original.deliveryTimeSlot}</span>
      </div>
   
  )
  },
  {
    accessorKey: 'deliveryStatus',
    header: 'Delivery Status',
    cell: ({ row }) => (
      <div 
        style={{ borderRadius: "20px" }}
        className={`flex items-center px-2 py-1 ${
          row.original.deliveryStatus === 'Delivered' ? 'bg-green-400' :
          row.original.deliveryStatus === 'Pending' ? 'bg-yellow-400' :
          'bg-red-400'
        }`}
      >
        <span className='text-black bold'>{row.original.deliveryStatus}</span>
      </div>
    )
  },
  {
    accessorKey: 'bagOrdered',
    header: 'Bag Ordered',
    cell: ({ row }) => (
      <ul>
        {row.original.bagOrdered?.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    )
  },
  {
    accessorKey: 'totalWeight',
    header: 'Total Weight (kg)',
    cell: ({ row }) => (
      <div className="text-center">
        {row.original.totalWeight}
      </div>
    )
  },
  {
    accessorKey: 'totalPrice',
    header: 'Total Price ',
    cell: ({ row }) => (
      <div className="text-center">
        {row.original.totalPrice}
      </div>
    )
  },
  {
    accessorKey: 'addons',
    header: 'Add-ons',
    cell: ({ row }) => (
      <ul>
        {row.original.addons?.map((addon, index) => (
          <li style={{listStyleType: "square"}} key={index}>{addon}</li>
        ))}
      </ul>
    )
  },
  {
    accessorKey: 'paymentStatus',
    header: 'Payment Status',
    cell: ({ row }) => (
      <div 
        style={{ borderRadius: "20px" }}
        className={`flex items-center px-2 py-1 ${
          row.original.paymentStatus === 'Paid' ? 'bg-green-400' : 'bg-red-400'
        }`}
      >
        {row.original.paymentStatus === 'Paid' ? (
          <Check width={16} height={16} className="text-green-500 mr-2" />
        ) : (
          <X width={16} height={16} className="text-red-900 mr-2" />
        )}
        <span className='text-black bold'>{row.original.paymentStatus}</span>
      </div>
    )
  },
  {
    accessorKey: 'specialInstructions',
    header: 'Special Instructions'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
