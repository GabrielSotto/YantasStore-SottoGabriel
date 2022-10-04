import React from 'react'
import { createContext, useState } from "react";

export const Shop = createContext();

const CartProvider = ({children}) => {
  const[cart, setCart] = useState([])

  const addItem = (item) => {
    const repeatProduct = isInCart(item.id);
  
    if (repeatProduct) {
      const testProductRepeat = cart.map(product => {
        if (product.id === item.id) {
          product.quantity += item.quantity
          return product
        }
          return product
      })
      setCart(testProductRepeat)
    } 
    else {
      const cartModified = [...cart, item];
      setCart(cartModified);
    }

  }

  const isInCart = (id) => {
    return cart.some(product => product.id === id)
  }

  const removeItem = (item) => {
    setCart(cart.filter(product => product.id !== item.id))
  }

  const clearCart = () => setCart([])

  const total = () => {
    const total = cart.reduce((acc, product ) => acc += product.quantity * product.price, 0);
    return total;
  }


  return (
    <Shop.Provider value={{cart, addItem, clearCart, removeItem, total}}>
        {children}
    </Shop.Provider>
  )
}

export default CartProvider