import React, {useEffect, useState} from 'react';
// import {products} from '../../data/products';
import ItemList from '../../components/ItemList';
import './styles.css';

const ItemListContainer = () => {
  const [productos, setProductos] = useState ([])

  useEffect(() => {
    (async () => {
      // const obtenerProductos = new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve(products)
      //   }, 2000);
      // })

      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const productos = await response.json();
        setProductos(productos);
      } catch (error) {
        console.log(error);      
      }
    })()

  }, [])
  
  
  return (
    <div className='item-list-container'>
      <ItemList products = {productos}/>
    </div>
  )
}

export default ItemListContainer;