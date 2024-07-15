'use client';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { MultiSelect } from '@/components/ui/MultiSelect';
import { useState } from 'react';

interface EmployeeFormType {
  initialData: any | null;
  userOptions: { id: string; name: string }[]; // List of users to assign
}

const employeeFormSchema = z.object({
  employeeId: z.number().nonnegative().optional(),
  fullName: z.string().min(1, 'Full Name is required'),
  role: z.string().min(1, 'Role is required'),
  contactInformation: z.object({
    email: z.string().email('Invalid email format').min(1, 'Email is required'),
    phone: z.string().min(1, 'Phone is required')
  }),
  assignedUsers: z.array(z.string()).optional(),
});

export const CreateEmployeeForm: React.FC<EmployeeFormType> = ({ initialData, userOptions }) => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(employeeFormSchema),
    defaultValues: initialData || {
      employeeId: undefined,
      fullName: '',
      role: '',
      contactInformation: {
        email: '',
        phone: '',
      },
      assignedUsers: [],
    },
  });

  const { control, handleSubmit, formState: { errors } } = form;

  const onSubmit: SubmitHandler<typeof employeeFormSchema._type> = async (data) => {
    try {
      setLoading(true);
      if (initialData) {
        // Update existing employee logic here
      } else {
        // Create new employee logic here
      }
      // Refresh or redirect after submission logic here
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Heading title={initialData ? 'Edit Employee' : 'Create Employee'} description="Fill in the details below" />
      <Separator />
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input type="text" disabled={loading} placeholder="Enter Full Name" {...field} />
                  </FormControl>
                  <FormMessage>{errors.fullName?.message ? String(errors.fullName.message) : ''}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Input type="text" disabled={loading} placeholder="Enter Role" {...field} />
                  </FormControl>
                  <FormMessage>{errors.role?.message ? String(errors.role.message) : ''}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="contactInformation.email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" disabled={loading} placeholder="Enter Email" {...field} />
                  </FormControl>
                  <FormMessage>{errors.contactInformation?.email?.message ? String(errors.contactInformation.email.message) : ''}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="contactInformation.phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="text" disabled={loading} placeholder="Enter Phone" {...field} />
                  </FormControl>
                  <FormMessage>{errors.contactInformation?.phone?.message ? String(errors.contactInformation.phone.message) : ''}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="assignedUsers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assigned Users</FormLabel>
                  <FormControl>
                    <MultiSelect
                      value={field.value || []}
                      onChange={(value) => field.onChange(value)}
                      options={userOptions.map(option => ({ value: option.id, label: option.name }))}
                      disabled={loading}
                      placeholder="Select Assigned Users"
                    />
                  </FormControl>
                  <FormMessage>{errors.assignedUsers?.message ? String(errors.assignedUsers.message) : ''}</FormMessage>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={loading}>
            {initialData ? 'Save Changes' : 'Create Employee'}
          </Button>
        </form>
      </Form>
    </div>
  );
};
