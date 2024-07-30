'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Trash, CalendarIcon } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import ReactSelect from 'react-select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';

interface OrderManagementFormType {
  initialData: any | null;
}

const orderFormSchema = z.object({
  customerName: z.string().min(1, 'Customer Name is required'),
  employeeName: z.string().min(1, 'Employee Name is required'),
  deliveryDate: z.date({
    required_error: "Delivery Date is required.",
  }),
  deliveryTimeSlot: z.string().min(1, 'Delivery Time Slot is required'),
  deliveryStatus: z.string(),
  bagOrdered: z.array(z.string()).min(1, 'Products Ordered is required'),
  totalWeight: z.number().positive('Total Weight must be greater than zero'),
  addons: z.string().optional(),
  paymentStatus: z.string(),
  specialInstructions: z.string().optional(),
});

type FormFields = keyof typeof orderFormSchema.shape;

interface Step {
  id: string;
  name: string;
  fields?: FormFields[]; // Optional because the last step doesn't have fields
}

const steps: Step[] = [
  {
    id: 'Step 1',
    name: 'Order Details',
    fields: [
      'customerName',
      'employeeName',
      'deliveryDate',
      'deliveryTimeSlot',
      'deliveryStatus',
      'bagOrdered',
      'totalWeight',
      'paymentStatus',
    ]
  },
  {
    id: 'Step 2',
    name: 'Add-ons and Instructions',
    fields: [
      'addons',
      'specialInstructions'
    ]
  },
  { id: 'Step 3', name: 'Complete' } // No fields needed here
];

const dummyBags = [
  { value: 'Regular Veggie Bag', label: 'Regular Veggie Bag', weight: 4000 },
  { value: 'Mini Veggie Bag', label: 'Mini Veggie Bag', weight: 3000 },
  { value: 'Large Veggie Bag', label: 'Large Veggie Bag', weight: 5000 },
  { value: 'Veggie Bag', label: 'Veggie Bag', weight: 5000 }
];

export const CreateOrder: React.FC<OrderManagementFormType> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isTotalWeightValid, setIsTotalWeightValid] = useState(true);
  const title = initialData ? 'Edit Order' : 'Create New Order';
  const description = initialData ? 'Edit the Order details.' : 'To create a new Order, fill in the required information.';
  const toastMessage = initialData ? 'Order updated.' : 'Order created.';
  const action = initialData ? 'Save changes' : 'Create';

  const form = useForm({
    resolver: zodResolver(orderFormSchema),
    mode: 'onChange',
    defaultValues: {
      customerName: '',
      employeeName: '',
      deliveryDate: new Date(),
      deliveryTimeSlot: '',
      deliveryStatus: 'Pending',
      bagOrdered: [] as string[],
      totalWeight: 0,
      paymentStatus: 'Pending',
      addons: '',
      specialInstructions: ''
    }
  });

  const { control, trigger, watch, handleSubmit, setValue, formState: { errors } } = form;

  const onSubmit: SubmitHandler<typeof orderFormSchema._type> = async (data) => {
    try {
      setLoading(true);
      if (initialData) {
        // await axios.post(`/api/orders/edit-order/${initialData._id}`, data);
      } else {
        // const res = await axios.post(`/api/orders/create-order`, data);
        // console.log("order", res);
      }
      // router.refresh();
      // router.push(`/dashboard/orders`);
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      //   await axios.delete(`/api/${params.storemployeeName}/orders/${params.orderId}`);
      // router.refresh();
      // router.push(`/${params.storemployeeName}/orders`);
    } catch (error: any) {
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const next = async () => {
    if (currentStep < steps.length - 1) {
      const fields: any = steps[currentStep].fields;
      if (fields) {
        const output = await trigger(fields);
        if (!output) return;
      }
      setCurrentStep(step => step + 1);
    } else {
      await handleSubmit(onSubmit)(); // Handle complete form submission at the last step
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  const orderedOptions = [
    { id: '1', name: 'Mini Veggie Bag' },
    { id: '2', name: 'Regular Veggie Bag' },
  ];

  const employeeOptions = [
    { id: '1', name: 'John Doe', phoneNumber: '123-456-7890' },
    { id: '2', name: 'Jane Smith', phoneNumber: '098-765-4321' },
  ];

  const customerOptions = [
    { id: '1', name: 'Alice Johnson', phoneNumber: '123-456-7890' },
    { id: '2', name: 'Bob Brown', phoneNumber: '098-765-4321' },
  ];

  const selectedBags = watch('bagOrdered');

  useEffect(() => {
    const totalWeight = selectedBags.reduce((acc, bagName) => {
      const bag = dummyBags.find((bag) => bag.value === bagName);
      return acc + (bag ? bag.weight : 0);
    }, 0);

    setValue('totalWeight', totalWeight);

    if (totalWeight >= 5000 && totalWeight <= 10000) {
      setIsTotalWeightValid(true);
    } else {
      setIsTotalWeightValid(false);
    }
  }, [selectedBags, setValue]);

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <div>
        <ul className="flex gap-4">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-sky-600 transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4  border-[#029740] py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium  text-[#029740] ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex h-full w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <div
            className={cn(
              currentStep === 1
                ? 'w-full md:inline-block'
                : 'gap-8 md:grid md:grid-cols-3'
            )}
          >
            {currentStep === 0 && (
              <>
                <Controller
                  control={form.control}
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
                  control={form.control}
                  name="employeeName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employee Name</FormLabel>
                      <FormControl>
                        <ReactSelect
                          isClearable
                          isSearchable
                          options={employeeOptions}
                          getOptionLabel={(option) => option.name}
                          getOptionValue={(option) => option.id}
                          isDisabled={loading}
                          onChange={(selected) => field.onChange(selected ? selected.name : '')}
                          value={employeeOptions.find(option => option.name === field.value)}
                          filterOption={(candidate, input) => {
                            const employee = employeeOptions.find(emp => emp.id === candidate.value);
                            return candidate.label.toLowerCase().includes(input.toLowerCase()) ||
                              (employee?.phoneNumber.includes(input) ?? false);
                          }}
                        />
                      </FormControl>
                      <FormMessage>{errors.employeeName?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="deliveryDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Delivery Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "dd MMM yyyy")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="deliveryTimeSlot"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Delivery Time Slot</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          disabled={loading}
                          placeholder="Enter Delivery Time Slot"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="deliveryStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Delivery Status</FormLabel>
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
                              placeholder="Select Delivery Status"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Delivered">Delivered</SelectItem>
                          <SelectItem value="Cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Controller
                  control={form.control}
                  name="bagOrdered"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bag Ordered</FormLabel>
                      <FormControl>
                        <ReactSelect
                          isMulti
                          isClearable
                          isSearchable
                          options={dummyBags}
                          formatOptionLabel={(option) => (
                            <div className="flex justify-between items-center">
                              <span>{option.label}</span>
                              <span className=" ms-4 text-green-700">{option.weight}g</span>
                            </div>
                          )}
                          onChange={(selected) => {
                            field.onChange(selected ? selected.map(option => option.value) : []);
                          }}
                          value={dummyBags.filter(option => field.value.includes(option.value))}
                        />
                      </FormControl>
                      {!isTotalWeightValid && (
                        <FormMessage>
                          <span className="text-red-500">Total weight must be between 5000 to 10000 grams</span>
                        </FormMessage>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="totalWeight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Weight (g)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Total Weight"
                          value={field.value}
                          readOnly
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="paymentStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Status</FormLabel>
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
                              placeholder="Select Payment Status"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Paid">Paid</SelectItem>
                          <SelectItem value="Unpaid">Unpaid</SelectItem>
                          <SelectItem value="Pending">Pending</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            {currentStep === 1 && (
              <>
                <FormField
                  control={form.control}
                  name="addons"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Add-ons</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          disabled={loading}
                          placeholder="Enter Add-ons (comma separated)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="specialInstructions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Instructions</FormLabel>
                      <FormControl>
                        <Textarea
                          disabled={loading}
                          rows={5}
                          placeholder="Enter Special Instructions"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            {currentStep === 2 && (
              <div>
                <h1>Completed</h1>
                <pre className="whitespace-pre-wrap">
                  {JSON.stringify(watch(), null, 2)}
                </pre>
              </div>
            )}
          </div>
        </form>
      </Form>
      {initialData && (
        <div className="mt-8 pt-5 border-t border-gray-200">
          <div className="flex justify-between">
            <Heading
              title="Delete Order"
              description="This action cannot be undone."
            />
            <Button
              type="button"
              variant="destructive"
              onClick={onDelete}
              disabled={loading}
            >
              Delete Order
            </Button>
          </div>
        </div>
      )}

      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
  type="button"
  onClick={next}
  className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
  disabled={!isTotalWeightValid}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
</button>

        </div>
      </div>
    </>
  );
};
