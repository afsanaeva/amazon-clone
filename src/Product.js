import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The lean startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.9</strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
          {/* <p>⭐</p>
          <p>🌟</p> */}
        </div>
      </div>
      <img
        src="https://static-01.daraz.com.bd/p/b98eeb31d6b886df372154823e40704e.jpg"
        alt="book"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
