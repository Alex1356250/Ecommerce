import React from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { Product } from '../data/products';

interface CartProps {
  items: { product: Product; quantity: number }[];
  onRemove: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export function Cart({ items, onRemove, onUpdateQuantity }: CartProps) {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-center space-x-2 text-gray-500">
          <ShoppingCart className="w-5 h-5" />
          <span>Votre panier est vide</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Panier</h2>
      <div className="space-y-4">
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-600">{product.price.toFixed(2)} €</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  onUpdateQuantity(product.id, parseInt(e.target.value))
                }
                className="w-16 px-2 py-1 border rounded"
              />
              <button
                onClick={() => onRemove(product.id)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <p className="text-lg font-semibold">
          Total: {total.toFixed(2)} €
        </p>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
          Commander
        </button>
      </div>
    </div>
  );
}