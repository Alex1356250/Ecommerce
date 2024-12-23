export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Montre Classic',
    description: 'Montre élégante en acier inoxydable',
    price: 199.99,
    category: 'Montres',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '2',
    name: 'Sac en Cuir',
    description: 'Sac à main en cuir véritable',
    price: 299.99,
    category: 'Accessoires',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '3',
    name: 'Lunettes de Soleil',
    description: 'Lunettes de soleil polarisées',
    price: 149.99,
    category: 'Accessoires',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '4',
    name: 'Bracelet Or',
    description: 'Bracelet en or 18 carats',
    price: 499.99,
    category: 'Bijoux',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80',
  },
];

export const categories = [...new Set(products.map(product => product.category))];