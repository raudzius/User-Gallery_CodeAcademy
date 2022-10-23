import React from 'react';

const ProductCard = ({ product, index, removeProduct, cart, setCart }) => {
  const addToCart = () => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="card">
      <img src={product.photo} alt={product.title + ' photo'} />
      <h4>{product.title}</h4>
      <h4>{product.price} $</h4>
      <button onClick={() => removeProduct(index)}>Delete</button>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
