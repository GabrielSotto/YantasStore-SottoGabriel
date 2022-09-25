import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import ItemCount from '../ItemCount';
import { Shop } from '../../context/CartProvider';
import './styles.css'

const ItemDetail = ({product}) => {
  const [qty, setQty] = useState(0);
  const navigate= useNavigate();

  const {addItem} = useContext(Shop)

  const addCart = (quantity) => {
    const productSave = {...product, quantity:qty}
    addItem (productSave);
    setQty (quantity);
  };

  const handleFinish = () => {
    const productSave = {...product, quantity:qty}
    addItem (productSave);
    navigate('/cart');

  };
  
      return (
        <div className="detailContainer">
          <img src={product.image} alt="product-detail"/>
          <div>
            <h2>{product.title}</h2>
            <h4>{product.category}</h4>
            {!qty ? (<ItemCount stock={15} initial={1} onAdd={addCart}/>) : (<button onClick={handleFinish}>Finalizar Compra</button> )}
          </div>
        </div>
      )
  
}

export default ItemDetail