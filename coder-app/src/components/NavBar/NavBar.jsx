import React from 'react'
import CartWidget from '../NavBar/NavBar'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'

function NavBar() {
  return (
    <div className="nav">
        <NavLink to= "/" className="nav-title"><p>YantasStore</p></NavLink>
        <NavLink to= "/category/deportivo" className="nav-option"><p>DEPORTIVO</p></NavLink>
        <NavLink to= "/category/salida" className="nav-option"><p>PARA SALIR</p></NavLink>
        <NavLink to= "/category/cuero" className="nav-option"><p>DE CUERO</p></NavLink>
        <NavLink to= "/cart" className="nav-widget"><CartWidget /></NavLink>
    </div>
  )
}

export default NavBar