import React from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { CartItem } from '../types/menu';

interface CartSummaryProps {
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onCheckout: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  cartItems,
  onRemoveItem,
  onUpdateQuantity,
  onCheckout
}) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <Card className="sticky top-4 bg-transparent">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            <ShoppingBag className="h-12 w-12 text-emerald-400" />
          </div>
          <CardTitle className="text-emerald-400">Your cart is empty</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="sticky top-4 shadow-lg bg-transparent">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-emerald-400">
            <ShoppingBag className="h-5 w-5" />
            Your Order
          </span>
          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
            {itemCount} items
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="max-h-80 overflow-y-auto space-y-3">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-600">₹{item.price}</span>
                  <span className="text-xs text-gray-500">× {item.quantity}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="h-6 w-6 p-0 rounded-full"
                  disabled={item.quantity <= 1}
                >
                  -
                </Button>
                <span className="text-sm font-medium min-w-[20px] text-center">
                  {item.quantity}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="h-6 w-6 p-0 rounded-full"
                >
                  +
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemoveItem(item.id)}
                  className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-emerald-400">Total:</span>
            <span className="text-2xl font-bold text-amber-600">₹{total}</span>
          </div>

          <Button
            onClick={onCheckout}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg"
          >
            Place Order - ₹{total}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};