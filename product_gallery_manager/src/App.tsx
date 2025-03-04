import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SearchBar } from './components/SearchBar';
import { ProductGrid } from './components/ProductGrid';
import { AddProductModal } from './components/AddProductModal';
import { EditProductModal } from './components/EditProductModal';
import { Product } from './types/product';
import { initialProducts } from './utils/mockData';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleSearch = (query: string) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleAdd = (newProduct: Omit<Product, 'id'>) => {
    const productWithId = { ...newProduct, id: uuidv4() };
    setProducts([...products, productWithId]);
    setFilteredProducts([...products, productWithId]);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleUpdate = (updatedProduct: Product) => {
    const updatedProducts = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    setEditingProduct(null);
  };

  const handleDelete = (id: string) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Product Gallery</h1>
          <div className="flex gap-4">
            <SearchBar onSearch={handleSearch} />
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add Product
            </button>
          </div>
        </div>
        <ProductGrid
          products={filteredProducts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <AddProductModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAdd}
        />
        <EditProductModal
          product={editingProduct}
          isOpen={!!editingProduct}
          onClose={() => setEditingProduct(null)}
          onUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};

export default App;
