
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition group border border-gray-100 dark:border-zinc-700">
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/50 backdrop-blur-md rounded-xl px-2 py-1 text-xs font-bold flex items-center gap-1 shadow-sm">
          <span className="material-icons-round text-yellow-400 text-sm">star</span>
          {product.rating}
          <span className="text-gray-400 text-[10px] font-medium">({product.reviews}+)</span>
        </div>
      </Link>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">{product.name}</h3>
            <p className="text-xs text-gray-400 flex items-center gap-1">
              <span className="material-icons-round text-xs">category</span>
              {product.tags[0]}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <span className="text-xl font-bold text-primary">{product.price} EGP</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-secondary hover:bg-teal-700 text-white p-2 rounded-xl flex items-center justify-center transition shadow-md shadow-secondary/20"
          >
            <span className="material-icons-round text-sm ml-2">add_shopping_cart</span>
            <span className="text-sm font-bold">إضافة</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
