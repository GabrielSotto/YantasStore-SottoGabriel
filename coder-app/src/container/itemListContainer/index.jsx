import React from 'react';
import ItemCount from '../../components/ItemCount';
import './styles.css';

const ItemListContainer = ({greeting}) => {

  const agregarAlCarrito = (quantity) => {
    console.log(`Se agregó la cantidad ${quantity} al carrito!`);
  }

  return (
    <div className='item-list-container'>
        <h1>{greeting}</h1>
        <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>
    </div>
  )
}

export default ItemListContainer;