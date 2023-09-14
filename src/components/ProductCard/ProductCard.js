import React, { useState } from "react";
import "./ProductCard.scss";

const ProductCard = ({ image, description, price, rating }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product-card">
      <img src={image} alt="Product" className="product-image" />
      <div className="product-info">
        <p className="product-description ">{description}</p>
        <h2 className="product-price">${price}</h2>
        <div className="product-card__butttom">
          <div className="product-rating">Rating: {rating} / 5</div>
          <button
            className={`favorite-button ${isFavorite ? "favorite" : ""}`}
            onClick={toggleFavorite}
          >
            {isFavorite ? "Added" : "Watch"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
