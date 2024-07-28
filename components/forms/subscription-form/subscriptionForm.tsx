'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
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
import { useState, useEffect } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Edit, Trash } from 'lucide-react';
import { MultiSelect } from '@/components/ui/MultiSelect';

const subscriptionFormSchema = z.object({
  subscriptionType: z.string(),
  totalDelivery: z.number().positive('Total bags must be greater than zero'),
  frequency: z.string(),
  deliveryDays: z.array(z.string()).min(1, 'Delivery Days is required'),
  subscriptionStartDate: z.string().min(1, 'Subscription Start Date is required'),
  subscriptionEndDate: z.string().min(1, 'Subscription End Date is required'),
  bagName: z.string().min(1, 'Bag Name  is required'),
  subscriptionStatus: z.enum(['Active', 'Inactive']),

  price: z.number().positive('Price must be greater than zero'),
  netPrice: z.any(),
  offers: z.number()
}).refine((data) => data.totalDelivery % frequencyNumbers[data.frequency] === 0, {
  message: 'Total bags must be a multiple of frequency',
  path: ['totalDelivery'],
}).refine((data) => data.totalDelivery % subscriptionTypeNumbers[data.subscriptionType] === 0, {
  message: 'Total bags must be a multiple of the associated subscription type',
  path: ['totalDelivery'],
});

type SubscriptionFormValues = z.infer<typeof subscriptionFormSchema>;

interface SubscriptionFormType {
  initialData: any | null;
}

const frequencyNumbers: { [key: string]: number } = {
  Daily: 1,
  Weekly: 1,
  Monthly: 1/4,
  Fortnightly: 1/2,
  Biweekly: 2
};

const subscriptionTypeNumbers: { [key: string]: number } = {
  Trial: 1,
  Monthly: 4,
  Quarterly: 12,
  'Semi-Annual': 24,
  Annually: 48
};

const deliveryDaysOptions = [
  { id: '1', name: 'Monday' },
  { id: '2', name: 'Tuesday' },
  { id: '3', name: 'Wednesday' },
  { id: '4', name: 'Thursday' },
  { id: '5', name: 'Friday' },
  { id: '6', name: 'Saturday' },
  { id: '7', name: 'Sunday' }
];

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
      subscriptionType: initialData?.subscriptionType || 'Trial',
      frequency: initialData?.frequency || 'Weekly',
      price: initialData?.price || 0,
      totalDelivery: initialData?.totalDelivery || 1,
      offers: initialData?.offers || 0,
      netPrice: initialData?.netPrice || 0,
      deliveryDays: initialData?.deliveryDays || [],
      bagName: initialData?.bagName || '',
      subscriptionStatus: initialData?.subscriptionStatus || 'Active',
      subscriptionStartDate: initialData?.subscriptionStartDate || '',
      subscriptionEndDate: initialData?.subscriptionEndDate || '',
    }
  });

  const { handleSubmit, control, watch, setValue } = form;

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

  const [isSubscriptionTypeModalOpen, setIsSubscriptionTypeModalOpen] = useState(false);
  const [isFrequencyModalOpen, setIsFrequencyModalOpen] = useState(false);
  const [subscriptionTypes, setSubscriptionTypes] = useState([
    'Trial',
    'Monthly',
    'Quarterly',
    'Semi-Annual',
    'Annually'
  ]);
  const [frequencies, setFrequencies] = useState([
    'Daily',
    'Weekly',
    'Monthly',
    'Fortnightly',
    'Biweekly'
  ]);
  const [newSubscriptionType, setNewSubscriptionType] = useState('');
  const [newFrequency, setNewFrequency] = useState('');

  const openSubscriptionTypeModal = () => {
    setIsSubscriptionTypeModalOpen(true);
  };

  const closeSubscriptionTypeModal = () => {
    setIsSubscriptionTypeModalOpen(false);
  };

  const openFrequencyModal = () => {
    setIsFrequencyModalOpen(true);
  };

  const closeFrequencyModal = () => {
    setIsFrequencyModalOpen(false);
  };

  const addSubscriptionType = () => {
    if (newSubscriptionType) {
      setSubscriptionTypes([...subscriptionTypes, newSubscriptionType]);
      setNewSubscriptionType('');
    }
  };

  const deleteSubscriptionType = (index: number) => {
    setSubscriptionTypes(subscriptionTypes.filter((_, i) => i !== index));
  };

  const addFrequency = () => {
    if (newFrequency) {
      setFrequencies([...frequencies, newFrequency]);
      setNewFrequency('');
    }
  };

  const deleteFrequency = (index: number) => {
    setFrequencies(frequencies.filter((_, i) => i !== index));
  };

  const frequency = watch('frequency');
  const subscriptionType = watch('subscriptionType');
  const price = watch('price');
  const offers = watch('offers');

  useEffect(() => {
    const freqNum = frequencyNumbers[frequency];
    const subTypeNum = subscriptionTypeNumbers[subscriptionType];
    const totalDelivery = freqNum * subTypeNum;
    setValue('totalDelivery', subTypeNum);
  }, [frequency, subscriptionType, setValue]);

  useEffect(() => {
    const netPrice = price - (price * (offers / 100));
    setValue('netPrice', parseFloat(netPrice.toFixed(2)));
  }, [price, offers, setValue]);

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </div>
      <Separator />
      <Dialog open={isSubscriptionTypeModalOpen} onOpenChange={(open) => !open && closeSubscriptionTypeModal()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manage Subscription Types</DialogTitle>
            <DialogDescription>You can manage subscription types here.</DialogDescription>
          </DialogHeader>
          <div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subscription Type</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {subscriptionTypes.map((type, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{type}</td>
                    <td className="px-6 flex justify-end py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Trash onClick={() => deleteSubscriptionType(index)} className="cursor-pointer text-red-500" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex mt-4">
              <Input
                type="text"
                placeholder="Add new subscription type"
                value={newSubscriptionType}
                onChange={(e) => setNewSubscriptionType(e.target.value)}
              />
              <Button onClick={addSubscriptionType} className="ml-2">
                Add
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={isFrequencyModalOpen} onOpenChange={(open) => !open && closeFrequencyModal()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manage Frequencies</DialogTitle>
            <DialogDescription>You can manage frequencies here.</DialogDescription>
          </DialogHeader>
          <div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {frequencies.map((freq, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{freq}</td>
                    <td className="px-6 py-4 flex justify-end whitespace-nowrap text-right text-sm font-medium">
                      <Trash onClick={() => deleteFrequency(index)} className="cursor-pointer text-red-500" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex mt-4">
              <Input
                type="text"
                placeholder="Add new frequency"
                value={newFrequency}
                onChange={(e) => setNewFrequency(e.target.value)}
              />
              <Button onClick={addFrequency} className="ml-2">
                Add
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
          <div className="gap-8 md:grid md:grid-cols-3">
            <FormField
              control={control}
              name="subscriptionType"
              render={({ field }) => (
                <FormItem>
                  <div className="flex">
                    <FormLabel>Subscription Type</FormLabel>
                    <Edit onClick={openSubscriptionTypeModal} className='ms-3 cursor-pointer text-red-500' height={15} width={15} />
                  </div>
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
                      {subscriptionTypes.map((type, index) => (
                        <SelectItem key={index} value={type}>{type}</SelectItem>
                      ))}
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
                  <div className="flex">
                    <div className="flex items-center">
                      <FormLabel>Frequency</FormLabel>
                      <Edit onClick={openFrequencyModal} className='ms-3 cursor-pointer text-red-500' height={15} width={15} />
                      {/* <span className='ms-2 text-white font-bold bg-red-600 px-[5px] py-[0.3px]' style={{borderRadius:"50%",fontSize:"10px"}} >{frequencyNumbers[field.value]}</span> */}
                    </div>
                  </div>
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
                      {frequencies.map((freq, index) => (
                        <SelectItem key={index} value={freq}>{freq}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="totalDelivery"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Delivery</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Bags"
                      disabled
                      className='mt-0'
                      min={1}
                      {...field}
                      value={field.value}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bagName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Bag Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Enter Bag Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="subscriptionStartDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subscription Start Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subscriptionEndDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subscription End Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="subscriptionStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subscription Status</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select Subscription Status"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Controller
              control={form.control}
              name="deliveryDays"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Days</FormLabel>
                  <FormControl>
                    <MultiSelect
                      value={field.value || []}
                      onChange={(value) => field.onChange(value)}
                      options={deliveryDaysOptions}
                      disabled={loading}
                      placeholder="Select Delivery Days"
                    />
                  </FormControl>
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
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value ? Number(value) : "");
                      }}                    />
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
      <FormLabel>Offers (%)</FormLabel>
      <FormControl>
        <Input
          type="number"
          placeholder="Enter Offer in Percentage"
          {...field}
          onChange={(e) => {
            const value = e.target.value;
            field.onChange(value ? Number(value) : '');
          }}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

            <FormField
              control={control}
              name="netPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Net Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      disabled
                      placeholder="Net Price"
                      {...field}
                      readOnly
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
