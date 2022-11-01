import React from 'react'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="left-navbar">
        <img src="/amazon.png" alt="" />
        <span className="delivery-container">
          <img src="/map-pin-line.svg" alt="" />
          <div className="delivery">
            <p className="deliver">Deliver to</p>
            <p className="nigeria">Nigeria</p>
          </div>
        </span>
        <span className="search-bar">
          <select name="products" id="">
            <option value="all">All</option>
            <option value="women">Women's Clothing</option>
            <option value="men">Men's Clothing</option>
            <option value="jewelries">Jewelries</option>
            <option value="electronics">Electronics</option>
          </select>
          <input type="text" />
          <img src="/search-line.svg" alt="" />
        </span>
      </div>
      <div className="right-navbar">
        <span className="english">
          <p className="deliver">English</p>
          <img src="/united-kingdom-logo-svg-vector.svg" alt="" />
        </span>
        <span className="account">
          <p className="deliver">Hello, sign in </p>
          <p>Account & Lists</p>
        </span>
        <span className="returns-order">
          <p className="deliver">Returns</p>
          <p>& Orders</p>
        </span>
        <span className="cart-container">
          <img src="/shopping-cart-line.svg" alt="" />
          <p>Cart</p>
        </span>
      </div>
    </div>
  );
}

export default Navbar