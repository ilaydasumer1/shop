import React from 'react';
import './App.css';
import {AiFillStar} from "react-icons/ai";
import {BsFillBasket3Fill} from "react-icons/bs";

const Product = ({ data }) => {
  return (
    <div className="product-card">
      <div className='img-container'>
        <img className="product-img" src={data.img} alt={data.title} />
      </div>
      <h4 className='products-of-title'>{data.title}</h4>
      <div className='icon-and-reviews'>
      <div className='icon'>
      <AiFillStar /> <AiFillStar />  <AiFillStar />  <AiFillStar />
      </div>
      <p className="product-reviews">{data.reviews}</p>
      </div>
      <div className='price-and-icon'>
      <p className="product-price">{data.price}</p>
      <div className='icon-2'>
      <BsFillBasket3Fill/>
      </div>
      </div>
    </div>
  );
}

export default Product;