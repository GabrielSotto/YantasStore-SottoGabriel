import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <a href=" " class="brand">YantaStore</a>
      <ul>
        <li><a href="../pages/childrens.jsx">Niños</a></li>
        <li><a href="../pages/ladys.jsx">Damas</a></li>
        <li><a href="gentelmens.jsx">Caballeros</a></li>
        <CartWidget/>
      </ul>
    </nav>
  )
}
export default NavBar

