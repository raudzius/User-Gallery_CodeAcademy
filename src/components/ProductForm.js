import React, { useRef } from 'react';

const ProductForm = ({ send }) => {
  const photoRef = useRef();
  const priceRef = useRef();
  const titleRef = useRef();

  const addProduct = () => {
    const product = {
      photo: photoRef.current.value,
      price: priceRef.current.value,
      title: titleRef.current.value,
    };

    send(product);
  };

  return (
    <div>
      <input ref={photoRef} type="text" placeholder="photo" />
      <input ref={priceRef} type="text" placeholder="price" />
      <input ref={titleRef} type="text" placeholder="title" />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default ProductForm;
