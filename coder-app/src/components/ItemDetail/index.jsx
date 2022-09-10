import React from 'react';
import ItemCount from '../ItemCount';
import './styles.css'

const ItemDetail = ({product}) => {
    console.log(product)
      return (
        <div className="detailContainer">
          <img src={product.image} alt="product-detail"/>
          <div>
            <h2>{product.title}</h2>
            <h4>{product.category}</h4>
            <ItemCount/>
          </div>
        </div>
      )
  
}

export default ItemDetail