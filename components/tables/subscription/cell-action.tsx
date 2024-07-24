import { Button } from '@/components/ui/button';
import { Subscription } from '@/constants/subscription-data';

export const CellAction: React.FC<{ data: Subscription }> = ({ data }) => {
  const handleEdit = () => {
    // Implement edit functionality
  };

  const handleDelete = () => {
    // Implement delete functionality
  };

  return (
    <div className="flex space-x-2">
      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};
