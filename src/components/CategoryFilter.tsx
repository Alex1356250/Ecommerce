import React from 'react';
import { Filter } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-gray-600" />
        <h2 className="text-lg font-semibold">Catégories</h2>
      </div>
      <div className="space-y-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === null
              ? 'bg-blue-100 text-blue-700'
              : 'hover:bg-gray-100'
          }`}
        >
          Toutes les catégories
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-blue-100 text-blue-700'
                : 'hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}