export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  ingredients: string[];
  image?: string;
  category: 'pizza' | 'pasta' | 'appetizers' | 'desserts';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id?: string;
  handler: (response: any) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
}

declare global {
  interface Window {
    Razorpay: any;
  }
}