import { ColumnDef } from '@tanstack/react-table';
import { Bag } from '@/constants/bag-data';
import { BagCellAction } from './cell-action';

export const columns: ColumnDef<Bag>[] = [
  {
    accessorKey: 'bagName',
    header: 'Bag Name',
    cell: ({ row }) => <span>{row.original.bagName}</span>,
  },
  {
    accessorKey: 'bagItems',
    header: 'Bag Items',
    cell: ({ row }) => (
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className='bg-red-100'>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Item Name</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Item Price (₹)</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Item Weight (kg)</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Item Pieces</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {row.original.bagItems.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'}>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.itemName}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.itemPrice}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.itemWeight ?? '-'}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.itemPieces ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
  {
    accessorKey: 'totalPrice',
    header: 'Total Price (₹)',
    cell: ({ row }) => (
      <div className="flex justify-center">
        <span className='text-center'>{row.original.totalPrice}</span>
      </div>
    ),
  },
  {
    accessorKey: 'totalWeight',
    header: 'Total Weight (kg)',
    cell: ({ row }) => (
      <div className="flex justify-center">
        <span className='text-center'>{row.original.totalWeight ?? '-'}</span>
      </div>
    ),
  },
  {
    accessorKey: 'totalPieces',
    header: 'Total Pieces',
    cell: ({ row }) => (
      <div className="flex justify-center">
        <span className='text-center'>{row.original.totalPieces ?? '-'}</span>
      </div>
    ),
  },
  {
    accessorKey: 'createdBy',
    header: 'Created By',
    cell: ({ row }) => (
      <div 
        style={{ borderRadius: "20px" }}
        className={`flex items-center px-2 py-1 ${
          row.original.createdBy.role === 'Admin' ? 'bg-red-400' :
          row.original.createdBy.role === 'Customer' ? 'bg-green-400' :
          row.original.createdBy.role === 'Employee' ? 'bg-yellow-400' :
          'bg-red-400'
        }`}
      >
        <span className='text-black bold'>{`${row.original.createdBy.role} - ${row.original.createdBy.name}`}</span>
      </div>
    ),
  },
  {
    accessorKey: 'createdDate',
    header: 'Created At',
    cell: ({ row }) => (
      <div className="flex">
        <span className=''>{row.original.createdDate}</span>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <span className={`${row.original.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
        {row.original.status}
      </span>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => <BagCellAction data={row.original} />
  }
];
