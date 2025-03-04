import React, { useState } from 'react';
import { Product } from '../types/product';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (product: Omit<Product, 'id'>) => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    image: ''
  });

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onAdd(product);
            onClose();
          }}
        >
          <input
            type="text"
            placeholder="Product Name"
            className="w-full mb-4 p-2 border rounded"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <textarea
            placeholder="Description"
            className="w-full mb-4 p-2 border rounded"
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            className="w-full mb-4 p-2 border rounded"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="w-full mb-4 p-2 border rounded"
            value={product.image}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
