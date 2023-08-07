import React from 'react';
import './App.css';
import {AiOutlineHeart} from "react-icons/ai";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {BsPersonPlus} from "react-icons/bs";
import {PiShoppingBagOpen} from "react-icons/pi";

function Header() {
  return (
    <div className='all-icon-at-header'>
    <div className='shop-icon-of-header'>
    <PiShoppingBagOpen/> 
    </div>   
    <div className='icon-of-header'> 
    <AiOutlineHeart/>
    <AiOutlineShoppingCart/>
     <BsPersonPlus/>
     </div>
      <hr className="hr-of-header"/>
      <hr className="hr-of-header-2"/>
      <h4 className='header-of-recomended'>Reacomended</h4>
      <div className='buttons-of-header'>  
      <button  className='button-of-header'>All products</button>
      <button  className='button-of-header' >Nike</button>
      <button  className='button-of-header' >Adidas</button>
      <button  className='button-of-header' >Puma</button>
      <button  className='button-of-header' >Vans</button>
      </div>
    </div>
  )
}

export default Header;
