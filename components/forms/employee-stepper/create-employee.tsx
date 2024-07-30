'use client';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import ReactSelect from 'react-select';

interface EmployeeFormType {
  initialData: any | null;
  userOptions: { id: string; name: string; phoneNo: string }[]; // List of users to assign
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
        // Update existing employee
      } else {
        // Create new employee
      }
      // Refresh or redirect after submission
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderErrorMessage = (error: any) => {
    if (!error) return null;
    if (typeof error === 'string') return error;
    if (error.message) return error.message;
    return null;
  };

  const filterOption = (option: any, inputValue: string) => {
    const user = userOptions.find((user) => user.id === option.value);
    return (
      option.label.toLowerCase().includes(inputValue.toLowerCase()) ||
      (user && user.phoneNo.includes(inputValue))
    );
  };

  return (
    <div className="container mx-auto p-4">
      <Heading title={initialData ? 'Edit Employee' : 'Create Employee'} description="Fill in the details below" />
      <Separator />
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
            <FormField
              control={control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input type="text" disabled={loading} placeholder="Enter Full Name" {...field} />
                  </FormControl>
                  <FormMessage>{renderErrorMessage(errors.fullName)}</FormMessage>
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
                  <FormMessage>{renderErrorMessage(errors.role)}</FormMessage>
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
                  <FormMessage>{renderErrorMessage(errors.contactInformation)}</FormMessage>
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
                  <FormMessage>{renderErrorMessage(errors.contactInformation)}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="assignedUsers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assigned Users<span>Can be searched by phone number</span></FormLabel>
                  <FormControl>
                    <Controller
                      control={control}
                      name="assignedUsers"
                      render={({ field }) => (
                        <ReactSelect
                          isMulti
                          isClearable
                          isSearchable
                          options={userOptions.map((option) => ({
                            value: option.id,
                            label: option.name,
                          }))}
                          value={userOptions.filter((option) =>
                            field.value.includes(option.id)
                          ).map(option => ({ value: option.id, label: option.name }))}
                          onChange={(selected) => {
                            field.onChange(selected ? selected.map(option => option.value) : []);
                          }}
                          filterOption={filterOption}
                          placeholder="Select Assigned Users"
                          isDisabled={loading}
                        />
                      )}
                    />
                  </FormControl>
                  <FormMessage>{renderErrorMessage(errors.assignedUsers)}</FormMessage>
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
