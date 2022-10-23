import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, setShowCart }) => {
  const countTotal = () => {
    return cart.reduce((prevVal, { price }) => prevVal + Number(price), 0);
  };

  return (
    <div className="cart">
      <div className="d-flex space-btw">
        <h2>{`Total Price: ${countTotal()}$`}</h2>
        <h1 onClick={() => setShowCart(false)}>X</h1>
      </div>
      <div>
        {cart.map((x, i) => (
          <CartItem key={i} cart={cart} item={x} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
