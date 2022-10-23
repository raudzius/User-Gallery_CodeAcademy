import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';
import ProductGallery from './components/ProductGallery';

function App() {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const send = async (product) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    };

    const res = await fetch('http://localhost:4000/addProduct', options);
    const data = await res.json();
    setProducts(data.products);
  };

  const removeProduct = async (index) => {
    const res = await fetch('http://localhost:4000/remove/' + index);
    const data = await res.json();

    setProducts(data.products);
  };

  return (
    <div className="">
      <button onClick={() => setShowCart(true)}>Show Cart</button>
      <ProductForm send={send} />
      <ProductGallery
        products={products}
        removeProduct={removeProduct}
        cart={cart}
        setCart={setCart}
      />
      {showCart && <Cart cart={cart} setShowCart={setShowCart} />}
    </div>
  );
}

export default App;
