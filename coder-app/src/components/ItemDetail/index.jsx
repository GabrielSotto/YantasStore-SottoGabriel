import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ItemCount from '../ItemCount';
import './styles.css'

const ItemDetail = ({product}) => {
  const [qty, setQty] = useState(0);
  const navigate= useNavigate();

  const addCart = (quatity) => {
    setQty (quatity);
  };

  const handleFinish = () => {
    navigate('/cart');
  };
  
      return (
        <div className="detailContainer">
          <img src={product.image} alt="product-detail"/>
          <div>
            <h2>{product.title}</h2>
            <h4>{product.category}</h4>
            {!qty ? (<ItemCount stock={product.count} initial={1} onAdd={addCart}/>) : (<button onClick={handleFinish}>Finalizar Compra</button> )}
          </div>
        </div>
      )
  
}

export default ItemDetail