import React , {useContext} from 'react'
import {Shop} from '../../context/CartProvider'
import { db } from '../../firebase/config';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import generateOrder from "../../services/generateOrder";
import './styles.css'

const Cart = () => {
  
  const {cart, removeItem, clearCart, total} = useContext(Shop)
  
  const renderImage = (image) => {
    return(
      <img src={image.value} alt="cart-product" style={{height: '120px'}}></img>
    )
  }
  
  const renderRemoveButton = (item) => {
    const product = item.value
    return (
      <Button onClick={()=> removeItem(product)} variant="contained" color="error">Remove</Button>
    )
  }

  const handleBuy = async () => {
    const totalAmount = total();
    const order = generateOrder("juan", "juan@gmail.com", 123456789, cart, totalAmount);

    console.log(order);

    const docRef = await addDoc(collection (db, "orders"), order);
    cart.forEach(async (productInCart) => {
      const productRef = doc(db, "products", productInCart.id)
      const productSnap = await getDoc(productRef)

      await updateDoc(productRef, {stock: productSnap.data().stock - productInCart.quantity})
    })

    alert(`Thanks for shopping with us. The request was generated with the ID, ${docRef.id}`);

  }

  const columns = [
    { field: 'image', headerName: 'Image', width: 150, renderCell: renderImage },
    { field: 'title', headerName: 'Product', width: 150 },
    { field: 'quantity', headerName: 'Quantity', width: 100 },
    { field: 'remove', headerName: 'Remove', renderCell: renderRemoveButton, width: 100 },
  ];

  const rows = [];
  cart.forEach(item => {
    rows.push({
      id: item.id,
      image: item.image,
      title: item.title,
      quantity: item.quantity,
      remove: item
    })
  })

  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]} rowHeight={150} />
      <Button onClick={clearCart} color="error" variant="outlined">Clear cart</Button>
      <Button onClick={handleBuy}>Checkout</Button>
    </div>
  );

}

export default Cart;