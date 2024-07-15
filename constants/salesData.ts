import { StaticImageData } from "next/image";
import shop1 from '@/public/assets/icons/shop1.png'
import shop2 from '@/public/assets/icons/shop2.png'
import shop3 from '@/public/assets/icons/shop3.png'
import shop4 from '@/public/assets/icons/shop4.png'
import shop5 from '@/public/assets/icons/shop5.png'
// Define the Sale interface
export interface Sale {
    avatar: StaticImageData;  // Use the correct type for your image data
    name: string;
    email: string;
    amount: string;
  }
  
  // Array of Sale data
  export const salesData: Sale[] = [
    {
      avatar: shop1, // Placeholder, replace with actual path or variable holding the avatar image
      name: 'Green Harvest Market',
      email: '200kg Today',
      amount: '+₹1,999.00'
    },
    {
      avatar: shop2,
      name: 'Organic Greens Hub',
      email: '45kg Today',
      amount: '+₹299.00'
    },
    {
      avatar: shop3,
      name: 'Farm Fresh Vegetables',
      email: '47kg Today',
      amount: '+₹99.00'
    },
    {
      avatar: shop4,
      name: 'Veggie Delight Store',
      email: '20kg Today',
      amount: '+₹39.00'
    },
    {
      avatar: shop5,
      name: 'Fresh Veggie Corner',
      email: '237kg Today',
      amount: '+₹39.00'
    }
  ];
  