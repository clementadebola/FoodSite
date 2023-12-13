import '../styles/header.css'
import axios from 'axios';
import { useState } from 'react';
import logo from '../Asset/man with food.jpg'
import cart from '../Asset/icon-cart.svg'
import menu from '../Asset/icon-menu.svg'

const Header = () => {
    // function toggleSidebar() {
    //     const sidebar = document.querySelector('.main');
    //     sidebar.classList.toggle('active')
    // }
    
  
    return ( 
        <div className=''>
            <div className='header'>
            <div className='logo'>
                <img src={logo} alt="" />    
            </div>
            <div className='main'>
            <ul>
                <li> HOME</li>
                <li>About us</li>
                <li>Services</li>
                <li>Explore</li>
            </ul>
            </div>
           
           
            <div className='btn'>
                <img src={cart} alt="" id='cart-icon'/>
                <img src={menu} onClick={toggleSidebar()} alt="menu" id='menu-icon'/>
            </div>
         </div>
         {/* <div className='menu'>
            <ul>
                <li>HOME</li>
                <li>About us</li>
                <li>Services</li>
                <li>Explore</li>
            </ul>
            </div> */}
        </div>
     );
}
 
export default Header;