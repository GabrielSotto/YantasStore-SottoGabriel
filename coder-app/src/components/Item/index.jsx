import React from 'react';
import {useNavigate} from 'react-router-dom';
import './styles.css'

const Item = ({product}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail/${product.id}`)
  }

  return (
    <div className='cardContainer' onClick={handleNavigate}>
          <img src={product.image} alt="product-detail" />
          <h1>{product.title}</h1>
    </div>
  )
}

export default Item