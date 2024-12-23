import React, { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product, products, categories } from './data/products';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { CategoryFilter } from './components/CategoryFilter';
import { SearchBar } from './components/SearchBar';

function App() {
  const [cartItems, setCartItems] = useState<{ product: Product; quantity: number }[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = products
    .filter((product) => 
      (!selectedCategory || product.category === selectedCategory) &&
      (searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  const addToCart = (product: Product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((items) => items.filter((item) => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleFavorite = (product: Product) => {
    setFavorites((favs) =>
      favs.includes(product.id)
        ? favs.filter((id) => id !== product.id)
        : [...favs, product.id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">E-Boutique</h1>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2 text-gray-600 hover:text-gray-900"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          <div className="col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                    onToggleFavorite={toggleFavorite}
                    isFavorite={favorites.includes(product.id)}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-gray-500">
                  Aucun produit ne correspond à votre recherche
                </div>
              )}
            </div>
          </div>
        </div>

        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Votre Panier</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <Cart
                items={cartItems}
                onRemove={removeFromCart}
                onUpdateQuantity={updateCartQuantity}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;