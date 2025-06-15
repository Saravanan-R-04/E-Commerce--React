import React from 'react'
import Logo from '../../Ecommerce_Frontend_Assets/logo.png';
import Cart from '../../Ecommerce_Frontend_Assets/cart_icon.png';
import { useState } from 'react';
import '../../E-Commerce/Components/Navbar.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from './Context/ShopContext';
const Navbar = () => {

  const{getTotalCartItems}=useContext(ShopContext);
  return (
    <>
    <div className='nav-bar'>
        <img className="nav-bar-logo" src={Logo} />
        <h2 className='nav-bar-title'>SHOPPER</h2>
        <ul className='nav-bar-menu'>
            <li  className='shop'>
                <Link className='link' to='/'>Shop</Link>
            </li>
            <li className='men'>
                <Link className='link' to='/mens'>Men</Link>
            </li>
            <li  className='women'>
                <Link className='link' to='/womens'>Women</Link>
            </li>
            <li  className='kids'>
                <Link className='link' to='/kids'>Kids</Link>
            </li>
        </ul>
        <button className='nav-bar-login'>
            <Link className='link' to='/login' style={{color:"white"}}>Login</Link>
        </button>
        <Link className='link' to='/cart'><img className='nav-bar-cart' src={Cart} /></Link>
        <span className='nav-bar-count'>{getTotalCartItems()}</span>
    </div>
    </>
  )
}

export default Navbar