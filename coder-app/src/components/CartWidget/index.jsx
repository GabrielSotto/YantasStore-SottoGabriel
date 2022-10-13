import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { newContext } from '../Context/CartContext';
import "./CartWidget.scss";

function CartWidget() {
  
  const { calculateItemsQuantity } = useContext(newContext)
  
  return (
    <div>
        <div className="miCart">
            <FontAwesomeIcon icon={ faCartShopping } className="miCart-icon" />
            <p className="miCart-text">{calculateItemsQuantity() !== 0 && calculateItemsQuantity() }</p>
        </div>
    </div>
  )
}


export default CartWidget;