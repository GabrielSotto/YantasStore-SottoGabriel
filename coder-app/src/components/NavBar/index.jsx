import React from 'react';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">YantaStore</Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/women's clothing">Damas</Link></li>
        <li><Link to="/category/men's clothing">Caballeros</ Link></li>
        <li><Link to="/category/jewelery">Joyeria</Link></li>
        <li><Link to="/category/electronics">Electronica</Link></li>
        <CartWidget/>
      </ul>
    </nav>
  )
}
export default NavBar

