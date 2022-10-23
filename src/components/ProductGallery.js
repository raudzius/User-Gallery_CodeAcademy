import React from 'react';
import ProductCard from './ProductCard';

const ProductGallery = ({ products, removeProduct, cart, setCart }) => {
  return (
    <div className="p-50 d-flex flex-wrap">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          index={index}
          product={product}
          cart={cart}
          removeProduct={removeProduct}
          setCart={setCart}
        />
      ))}
    </div>
  );
};

export default ProductGallery;
