// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Cotton Jeans', price: 750, image: 'https://th.bing.com/th?id=OIP.zZdmuou-UTWGqAtIakOjhQHaLG&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
    { id: 2, name: 'Smart Watch', price: 4999, image: 'https://www.bhphotovideo.com/images/images2500x2500/apple_mlld2ll_a_watch_smartwatch_38mm_stainless_1187207.jpg' },
    { id: 3, name: 'Smart Phone', price: 99999, image: 'https://th.bing.com/th/id/OIP.d_37IJDKLPKPUiaivYkUiQAAAA?rs=1&pid=ImgDetMain' },
    { id: 4, name: 'T shirt', price: 499, image: 'https://th.bing.com/th/id/OIP.C7X5hloQePcG9VjYkLEFugHaHa?rs=1&pid=ImgDetMain' }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">Shopping Cart</div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="categories">
            <select>
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
            </select>
          </div>
        </nav>
      </header>
      <div className="product-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Rs.{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


