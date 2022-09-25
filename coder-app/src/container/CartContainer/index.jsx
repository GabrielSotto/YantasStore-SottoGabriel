import React , {useContext} from 'react'
import {Shop} from '../../context/CartProvider'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import './styles.css'

const Cart = () => {
  
  const {cart, removeItem, clearCart} = useContext(Shop)
  
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
      <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]} rowHeight={'150px'} />
      <Button onClick={clearCart} color="error" variant="outlined">Clear cart</Button>
    </div>
  );

}

export default Cart;