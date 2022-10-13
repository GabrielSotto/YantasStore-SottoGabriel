import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { newContext } from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.scss";

function ItemDetail({ product }) {
  const { addToCart } = useContext(newContext);
  const [cantidad, setCantidad] = useState();

  const onAdd = (counter) => {
    setCantidad(counter);

    const producto = { item: product, quantity: counter };
    addToCart(producto);
  };

  return (
    <div className="detail-card">
      <div className="product-img">
        <img src={product.image} className="img" alt="..." />
      </div>
      <div className="product-info">
        <h1 className="detail-title">{product.title}</h1>
        <p className="detail-description">{product.description}</p>
        <h2 className="detail-price">${product.price}</h2>
        {cantidad ? (
          <Link to="/cart">
            <button className="add-cart-btn">
              <h2 className="add-cart-text">Finalizar compra</h2>
            </button>
          </Link>
        ) : (
          <ItemCount stock={product.stock} initial={0} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
