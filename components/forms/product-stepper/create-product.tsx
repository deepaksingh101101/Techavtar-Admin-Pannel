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
import { Trash } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm, SubmitHandler, FieldValues, Controller } from 'react-hook-form';
import { MultiSelect } from '@/components/ui/MultiSelect';

interface ProductFormType {
  initialData: any | null;
}

const productFormSchema = z.object({
  productId: z.number().nonnegative().optional(),
  productName: z.string().min(1, 'Product Name is required'),
  visibility: z.string().min(1, 'Visibility is required'),
  minQuantity: z.number().min(1, 'Minimum Quantity  is required'),
  maxQuantity: z.number().min(1, 'Maximum Quantity is required'),
  available: z.string().min(1, 'Please Enter availability'),
  productPrice: z.number().min(1, 'Product Price is required'),
  type: z.string().min(1, 'Type is required'),
  group: z.string().min(1, 'Group is required'),
  season: z.string().min(1, 'Season is required'),
  priority: z.string().min(1, 'Priority is required'),
  roster: z.string().min(1, 'Roster is required'),
  veggieNameInHindi: z.string().min(1, 'Veggie Name in Hindi is required'),
  unitQuantity: z.number().positive('Unit Quantity must be greater than zero'),
  pieces: z.number().positive('Pieces must be greater than zero'),
  // addons: z.string().optional(),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;

export const CreateProductForm: React.FC<ProductFormType> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const title = initialData ? 'Edit Product' : 'Create New Product';
  const description = initialData
    ? 'Edit product details.'
    : 'To create a new product, fill in the required information.';
  const toastMessage = initialData ? 'Product updated.' : 'Product created.';
  const action = initialData ? 'Save changes' : 'Create';

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    mode: 'onChange',
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = form;

  const onSubmit = async (data: ProductFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        // await axios.post(`/api/products/edit-product/${initialData._id}`, data);
      } else {
        // const res = await axios.post(`/api/products/create-product`, data);
        // console.log("product", res);
      }
      router.refresh();
      router.push(`/dashboard/products`);
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      //   await axios.delete(`/api/${params.storeId}/products/${params.productId}`);
      router.refresh();
      router.push(`/${params.storeId}/products`);
    } catch (error: any) {
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  const visibilityOption = [
    { id: '1', name: 'Admin' },
    { id: '2', name: 'Customer' }
  ];
  

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
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >

<div className="relative mb-4 gap-8 rounded-md border p-4 md:grid md:grid-cols-3">

          <FormField
            control={form.control}
            name="productName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter Product Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="productPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    disabled={loading}
                    placeholder="Enter Prodcut Price"
                    onChange={(e) => field.onChange(e.target.value === '' ? undefined : Number(e.target.value))}
                    value={field.value || ''}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter Type"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="group"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Group</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter Group"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="season"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Season</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter Season"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter Priority"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="roster"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Roster</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter Roster"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="veggieNameInHindi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Veggie Name in Hindi</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter Veggie Name in Hindi"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="unitQuantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unit Quantity (gms)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    disabled={loading}
                    placeholder="Enter Unit Quantity"
                    onChange={(e) => field.onChange(e.target.value === '' ? undefined : Number(e.target.value))}
                    value={field.value || ''}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="minQuantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Minimum Quantity (gms)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    disabled={loading}
                    placeholder="Enter Minimum Quantity"
                    onChange={(e) => field.onChange(e.target.value === '' ? undefined : Number(e.target.value))}
                    value={field.value || ''}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="maxQuantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Maximum Quantity (gms)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    disabled={loading}
                    placeholder="Enter Maximum Unit Quantity"
                    onChange={(e) => field.onChange(e.target.value === '' ? undefined : Number(e.target.value))}
                    value={field.value || ''}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="pieces"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pieces</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    disabled={loading}
                    placeholder="Enter Pieces"
                    onChange={(e) => field.onChange(e.target.value === '' ? undefined : Number(e.target.value))}
                    value={field.value || ''}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
                  control={control}
                  name="available"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Availability</FormLabel>
                      <FormControl>
                        <Select disabled={loading} onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Available">Available</SelectItem>
                            <SelectItem value="Unavailable">Unavailable</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage>{errors.available?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                
                      {/* <Controller
              control={form.control}
              name="visibility"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Visibility</FormLabel>
                  <FormControl>
                    <MultiSelect
                      value={field.value || []}
                      onChange={(value) => field.onChange(value)}
                      options={visibilityOption}
                      disabled={loading}
                      placeholder="Select Visibility"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <FormField
                  control={form.control}
                  name="visibility"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Visibility</FormLabel>
                      <FormControl>
                        <Select disabled={loading} onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Visibility" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="Public">Public</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage>{errors.visibility?.message}</FormMessage>
                    </FormItem>
                  )}
                />
          {/* <FormField
            control={form.control}
            name="addons"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add-ons</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter Add-ons (comma separated)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            /> */}
            </div>
          <Button type="submit" disabled={loading}>
            {action}
          </Button>
        </form>
      </Form>
      {initialData && (
        <div className="mt-8 pt-5 border-t border-gray-200">
          <div className="flex justify-between">
            <Heading
              title="Delete Product"
              description="This action cannot be undone."
            />
            <Button
              type="button"
              variant="destructive"
              onClick={onDelete}
              disabled={loading}
            >
              Delete Product
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
