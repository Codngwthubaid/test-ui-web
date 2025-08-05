import React, { useState, useMemo } from 'react';
import { Pizza, UtensilsCrossed, Cookie, Soup } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { MenuCard } from './MenuCard';
import { CartSummary } from './CartSummary';
import { menuItems } from '../constant/index';
import type { MenuItem, CartItem } from '../types/menu';
import { useRazorpay } from '../hooks/useRazorpay';

export const RestaurantMenu: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('pizza');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const { initializePayment } = useRazorpay();

  const tabConfig = [
    { value: 'pizza', label: 'Pizza', icon: Pizza },
    { value: 'pasta', label: 'Pasta', icon: UtensilsCrossed },
    { value: 'appetizers', label: 'Appetizers', icon: Soup },
    { value: 'desserts', label: 'Desserts', icon: Cookie },
  ];

  const categorizedItems = useMemo(() => {
    return menuItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, MenuItem[]>);
  }, []);

  const handleQuantityChange = (id: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: quantity
    }));

    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => {
        const existingItem = prev.find(item => item.id === id);
        if (existingItem) {
          return prev.map(item =>
            item.id === id ? { ...item, quantity } : item
          );
        }
        return prev;
      });
    }
  };

  const handleAddToCart = (item: MenuItem) => {
    const currentQuantity = quantities[item.id] || 0;
    const newQuantity = currentQuantity + 1;

    setQuantities(prev => ({
      ...prev,
      [item.id]: newQuantity
    }));

    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: newQuantity }];
      }
    });
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    setQuantities(prev => ({
      ...prev,
      [id]: 0
    }));
  };

  const handleUpdateCartQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
    } else {
      handleQuantityChange(id, quantity);
    }
  };

  const handleCheckout = async () => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const options = {
      key: 'rzp_test_1234567890', // Replace with your actual Razorpay key
      amount: total * 100,
      currency: 'INR',
      name: 'Delizioso Restaurant',
      description: 'Food Order Payment',
      handler: (response: any) => {
        console.log('Payment successful:', response);
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        setCartItems([]);
        setQuantities({});
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#F59E0B'
      }
    };

    try {
      await initializePayment(options);
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-transparent h-14 shadow-lg z-10">
              {tabConfig.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex items-center gap-2 text-lg font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-400 data-[state=active]:to-emerald-400 text-white border border-gray-200"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {tabConfig.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="space-y-6 max-h-[1300px] overflow-y-auto pr-2"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categorizedItems[tab.value as keyof typeof categorizedItems]?.map((item) => (
                    <MenuCard
                      key={item.id}
                      item={item}
                      quantity={quantities[item.id] || 0}
                      onQuantityChange={handleQuantityChange}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              </TabsContent>

            ))}
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <CartSummary
            cartItems={cartItems}
            onRemoveItem={handleRemoveItem}
            onUpdateQuantity={handleUpdateCartQuantity}
            onCheckout={handleCheckout}
          />
        </div>
      </div>
    </div>
  );
};
