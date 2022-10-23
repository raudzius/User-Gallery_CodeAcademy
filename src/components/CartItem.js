import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className='cart-item d-flex space-btw'>
      <div>
        <img className="cartImg" src={item.photo} alt="" />
      </div>
      <div className="ml-20">
        <div>{item.title}</div>
        <div>{item.price}$</div>
      </div>
    </div>
  );
};

export default CartItem;
