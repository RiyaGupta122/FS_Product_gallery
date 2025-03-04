import React, { useState, useEffect } from 'react';
import { Product } from '../types/product';

interface EditProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (product: Product) => void;
}

export const EditProductModal: React.FC<EditProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onUpdate
}) => {
  const [editedProduct, setEditedProduct] = useState<Product | null>(null);

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  if (!isOpen || !editedProduct) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onUpdate(editedProduct);
            onClose();
          }}
        >
          <input
            type="text"
            placeholder="Product Name"
            className="w-full mb-4 p-2 border rounded"
            value={editedProduct.name}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, name: e.target.value })
            }
          />
          <textarea
            placeholder="Description"
            className="w-full mb-4 p-2 border rounded"
            value={editedProduct.description}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, description: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price"
            className="w-full mb-4 p-2 border rounded"
            value={editedProduct.price}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, price: Number(e.target.value) })
            }
          />
          <input
            type="text"
            placeholder="Image URL"
            className="w-full mb-4 p-2 border rounded"
            value={editedProduct.image}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, image: e.target.value })
            }
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
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
