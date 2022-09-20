import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Item = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail/${product.id}`);
  };

  return (
    <div className="card-container" onClick={handleNavigate}>
      <div className="card-image">
        <img src={product.image} alt="product-detail" />
      </div>
      <div className="card-body">
        <span className="product-category">{product.category}</span>
        <h4>{product.title}</h4>
        <p className="description">{product.description}</p>
        <div className="card-footer">
          <div className="product-price">${product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
