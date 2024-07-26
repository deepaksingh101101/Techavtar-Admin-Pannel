'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface SubscriptionFormType {
  initialData: any | null;
}

const subscriptionFormSchema = z.object({
  subscriptionType: z.enum(['Trial', 'Monthly', 'Quarterly', 'Semi-Annual', 'Annually']),
  frequency: z.enum(['Daily', 'Weekly', 'Monthly', 'Fortnightly', 'Biweekly']),
  price: z.number().positive('Price must be greater than zero'),
  offers: z.enum(['25% off', '31% off', '36% off', '44% off', '6% off', '11% off'])
});

type SubscriptionFormValues = z.infer<typeof subscriptionFormSchema>;

export const CreateSubscriptionForm: React.FC<SubscriptionFormType> = ({
  initialData
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const title = initialData ? 'Edit Subscription' : 'Create New Subscription';
  const description = initialData
    ? 'Edit the subscription details below.'
    : 'To create a new subscription, fill in the basic information below.';
  const action = initialData ? 'Save changes' : 'Create';

  const form = useForm<SubscriptionFormValues>({
    resolver: zodResolver(subscriptionFormSchema),
    mode: 'onChange',
    defaultValues: {
      subscriptionType: 'Trial',
      frequency: 'Weekly',
      price: 0,
      offers: '25% off'
    }
  });

  const { handleSubmit, control, formState: { errors } } = form;

  const onSubmit: SubmitHandler<SubscriptionFormValues> = async (data) => {
    try {
      setLoading(true);
      if (initialData) {
        // Handle edit logic here
      } else {
        // Handle create logic here
      }
      router.refresh();
      router.push(`/dashboard/subscriptions`);
    } catch (error: any) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
          <FormField
            control={control}
            name="subscriptionType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subscription Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Subscription Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Trial">Trial</SelectItem>
                    <SelectItem value="Monthly">Monthly</SelectItem>
                    <SelectItem value="Quarterly">Quarterly</SelectItem>
                    <SelectItem value="Semi-Annual">Semi-Annual</SelectItem>
                    <SelectItem value="Annually">Annually</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="frequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Frequency</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Frequency" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Daily">Daily</SelectItem>
                    <SelectItem value="Weekly">Weekly</SelectItem>
                    <SelectItem value="Monthly">Monthly</SelectItem>
                    <SelectItem value="Fortnightly">Fortnightly</SelectItem>
                    <SelectItem value="Biweekly">Biweekly</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter Price"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="offers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Offers</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Offer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="25% off">25% off</SelectItem>
                    <SelectItem value="31% off">31% off</SelectItem>
                    <SelectItem value="36% off">36% off</SelectItem>
                    <SelectItem value="44% off">44% off</SelectItem>
                    <SelectItem value="6% off">6% off</SelectItem>
                    <SelectItem value="11% off">11% off</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
