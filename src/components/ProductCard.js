import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { LuEye } from "react-icons/lu";

const ProductCard = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const ratingStars = (rate) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        stars.push(<AiFillStar />);
      } else {
        stars.push(<AiOutlineStar />);
      }
    }
    return stars;
  };

  return (
    <div key={product.id} className="productCard">
      <div className="discount">-30%</div>
      <div className="iconContainer">
        <div className="icon">
          <AiOutlineHeart />
        </div>
        <div className="icon">
          <LuEye />
        </div>
      </div>
      <img src={product.image} alt={product.title} className="productImage" />
      <h1 className="productTitle">{product.title}</h1>
      <p className="productPrice">${product.price}</p>
      {isExpanded && (
        <>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <div className="product-rating">
            <p>{ratingStars(product.rating.rate)}</p>
            <p>{product.rating.count}</p>
          </div>
        </>
      )}
      <button onClick={toggleExpand}>
        {isExpanded ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default ProductCard;
