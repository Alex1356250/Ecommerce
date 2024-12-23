import React from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
  isFavorite: boolean;
}

export function ProductCard({ product, onAddToCart, onToggleFavorite, isFavorite }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onToggleFavorite(product)}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            {product.price.toFixed(2)} €
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}