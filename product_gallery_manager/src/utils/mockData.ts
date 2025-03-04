import { Product } from '../types/product';

export const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Modern Laptop',
    description: 'High-performance laptop for professionals',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853'
  },
  {
    id: '2',
    name: 'Wireless Headphones',
    description: 'Premium noise-canceling headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
  },
  {
    id: '3',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
  }
];
