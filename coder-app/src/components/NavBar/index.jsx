import React from 'react';
import CartWidget from '../CartWidget';
// import {Button} from '@mui/material';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
  // const [login, setLogin] = useState(false);
  // const [Singup, setSingup] = useState(false);

  // const handleLogin = () => {
  //   setLogin(true)
  // };
  
  // const handleSingup = () => {
  //   setSingup(true)
  // };
  
  return (
    <nav className="NavBar">
      <Link to="/">YantasStore</Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/women's clothing">Damas</Link></li>
        <li><Link to="/category/men's clothing">Caballeros</ Link></li>
        <li><Link to="/category/jewelery">Joyeria</Link></li>
        <li><Link to="/category/electronics">Electronica</Link></li>
        <Link to="/cart"><CartWidget/></Link>
      </ul>
    </nav>
  )
}

export default NavBar


        //  <div className="buttonContainer">
        // <Button variant="contained" size="medium" onClick={handleLogin}>Login</Button>
        // <Button variant="contained" size="medium" onClick={handleSingup}>Singup</Button>
        // </div>