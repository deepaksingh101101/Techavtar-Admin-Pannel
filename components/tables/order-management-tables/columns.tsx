import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';
import { OrderManagement } from '@/constants/order-management-data';

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
    accessorKey: 'userId',
    header: 'User ID'
  },
  {
    accessorKey: 'deliveryDate',
    header: 'Delivery Date'
  },
  {
    accessorKey: 'deliveryTimeSlot',
    header: 'Delivery Time Slot'
  },
  {
    accessorKey: 'deliveryStatus',
    header: 'Delivery Status'
  },
  {
    accessorKey: 'productsOrdered',
    header: 'Products Ordered',
    cell: ({ row }) => (
      <ul>
        {row.original.productsOrdered?.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    )
  },
  {
    accessorKey: 'totalWeight',
    header: 'Total Weight (kg)'
  },
  {
    accessorKey: 'addons',
    header: 'Add-ons',
    cell: ({ row }) => (
      <ul>
        {row.original.addons?.map((addon, index) => (
          <li key={index}>{addon}</li>
        ))}
      </ul>
    )
  },
  {
    accessorKey: 'paymentStatus',
    header: 'Payment Status'
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
