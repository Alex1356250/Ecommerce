import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

export function SearchBar({ searchTerm, onSearch }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Rechercher un produit..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
      />
    </div>
  );
}