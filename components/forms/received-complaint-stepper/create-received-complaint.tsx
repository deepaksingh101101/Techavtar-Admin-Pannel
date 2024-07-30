'use client';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import ReactSelect from 'react-select';
import { useState } from 'react';

export interface ComplaintManagement {
  complaintId: number;
  userId: number;
  customerName: string;
  complaintType: 'Delay' | 'Bad quality' | 'Wrong item' | 'Not reached';
  description: string;
  status: 'Active' | 'Inactive';
  resolution?: 'Coupon' | 'Store credits' | 'Add-on bag';
}

const complaintFormSchema = z.object({
  complaintId: z.number().nonnegative(),
  userId: z.number().nonnegative(),
  customerName: z.string(),
  complaintType: z.string(),
  description: z.string().min(1, 'Description is required'),
  status: z.enum(['Active', 'Inactive']),
  resolution: z.string(),
});

export const ReceivedComplaintForm: React.FC<{ initialData?: ComplaintManagement }> = ({ initialData }) => {
  const [loading, setLoading] = useState(false);
  const form = useForm<ComplaintManagement>({
    resolver: zodResolver(complaintFormSchema),
    defaultValues: initialData || {
      complaintId: 0,
      userId: 0,
      customerName: '',
      complaintType: 'Delay',
      description: '',
      status: 'Active',
      resolution: undefined,
    },
  });

  const { control, handleSubmit, formState: { errors } } = form;

  const onSubmit: SubmitHandler<ComplaintManagement> = async (data) => {
    try {
      setLoading(true);
      if (initialData) {
        // Update existing complaint
      } else {
        // Create new complaint
      }
      // Refresh or redirect after submission
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const customerOptions = [
    { id: '1', name: 'Alice Johnson', phoneNumber: '123-456-7890' },
    { id: '2', name: 'Bob Brown', phoneNumber: '098-765-4321' },
  ];

  const complaintTypeOptions = [
    { value: 'Delay', label: 'Delay' },
    { value: 'Bad quality', label: 'Bad quality' },
    { value: 'Wrong item', label: 'Wrong item' },
    { value: 'Not reached', label: 'Not reached' },
  ];

  return (
    <div className="container mx-auto p-4">
      <Heading title={initialData ? 'Edit Complaint' : 'Create Complaint'} description="Fill in the details below" />
      <Separator />
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Controller
              control={control}
              name="customerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Customer Name</FormLabel>
                  <FormControl>
                    <ReactSelect
                      isClearable
                      isSearchable
                      options={customerOptions}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      isDisabled={loading}
                      onChange={(selected) => field.onChange(selected ? selected.name : '')}
                      value={customerOptions.find(option => option.name === field.value)}
                      filterOption={(candidate, input) => {
                        const customer = customerOptions.find(cust => cust.id === candidate.value);
                        return candidate.label.toLowerCase().includes(input.toLowerCase()) ||
                          (customer?.phoneNumber.includes(input) ?? false);
                      }}
                    />
                  </FormControl>
                  <FormMessage>{errors.customerName?.message}</FormMessage>
                </FormItem>
              )}
            />

            <Controller
              control={control}
              name="complaintType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Complaint Type</FormLabel>
                  <FormControl>
                    <ReactSelect
                      isClearable
                      isSearchable
                      options={complaintTypeOptions}
                      getOptionLabel={(option) => option.label}
                      getOptionValue={(option) => option.value}
                      isDisabled={loading}
                      onChange={(selected) => field.onChange(selected ? selected.value : '')}
                      value={complaintTypeOptions.find(option => option.value === field.value)}
                    />
                  </FormControl>
                  <FormMessage>{errors.complaintType?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select disabled={loading} onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage>{errors.status?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="resolution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resolution</FormLabel>
                  <FormControl>
                    <Input 
                      disabled={loading} 
                      onChange={field.onChange} 
                      value={field.value} 
                      placeholder="Enter Resolution" 
                    />
                  </FormControl>
                  <FormMessage>{errors.resolution?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input type="text" disabled={loading} placeholder="Enter Description" {...field} />
                </FormControl>
                <FormMessage>{errors.description?.message}</FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {initialData ? 'Save Changes' : 'Create Complaint'}
          </Button>
        </form>
      </Form>
    </div>
  );
};
