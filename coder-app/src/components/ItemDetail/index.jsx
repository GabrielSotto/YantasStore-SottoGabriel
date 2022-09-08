import React from 'react';
import ItemCount from '../ItemCount';

const ItemDetail = ({product}) => {
  return (
    <div className="detailContainer">
        <div>
            <img src={product.image} alt="product-detail"/>
        </div>
        <div>
            <h1>{product.title}</h1>
            <ItemCount/>
        </div>
    </div>
  )
}

export default ItemDetail