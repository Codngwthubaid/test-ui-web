import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { MenuItem } from '../types/menu';

interface MenuCardProps {
  item: MenuItem;
  quantity: number;
  onQuantityChange: (id: string, quantity: number) => void;
  onAddToCart: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  item,
  quantity,
  onQuantityChange,
  onAddToCart
}) => {
  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(0, quantity + delta);
    onQuantityChange(item.id, newQuantity);
  };

  return (
    <Card className="bg-transparent group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
            {item.name}
          </CardTitle>
          <Badge variant="secondary" className="bg-amber-100 text-amber-800 font-semibold">
            ₹{item.price}
          </Badge>
        </div>
        <CardDescription className="text-gray-300 leading-relaxed">
          {item.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Ingredients:</h4>
            <div className="flex flex-wrap gap-1">
              {item.ingredients.map((ingredient, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-xs bg-gray-50 text-gray-700 border-gray-200"
                >
                  {ingredient}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {quantity > 0 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-amber-300 hover:bg-amber-50"
                onClick={() => handleQuantityChange(-1)}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="font-semibold text-gray-900 min-w-[20px] text-center">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-amber-300 hover:bg-amber-50"
                onClick={() => handleQuantityChange(1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </>
          )}
        </div>
        
        <Button
          onClick={() => {
            if (quantity === 0) {
              onQuantityChange(item.id, 1);
            }
            onAddToCart(item);
          }}
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {quantity > 0 ? 'Add More' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
};