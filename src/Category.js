import React, { useState } from 'react';
import './App.css';

function Category({filterItems, filterPrice,filterColor}) {
  return (
    <div>
    <div className='category'>
    <h4 className='category-of-title'>Categories</h4>
    <button onClick={() => filterItems("all")} className='category-button'>All</button>
    <button onClick={() => filterItems("sneakers")} className='category-button'>sneakers</button>
    <button onClick={() => filterItems("flats")} className='category-button'>flats</button>
    <button onClick={() => filterItems("sandals")} className='category-button'>sandals</button>
    <button onClick={() => filterItems("heels")} className='category-button'>heels</button>
     </div>
     <div className='price'>
     <h4 className='category-of-title'>Price</h4>
     <button onClick={() => filterPrice("all")} className='category-button'>All</button>
      <button onClick={() => filterPrice("50")} className='category-button'>$0-50</button>
      <button onClick={() => filterPrice("100")} className='category-button'>$50-100</button>
      <button onClick={() => filterPrice("150")} className='category-button'>$100-150</button>
      <button onClick={() => filterPrice("200")} className='category-button'>$150-200</button>
    </div>
    <div className='color'>
    <h4 className='category-of-title'>Colors</h4>
     <button onClick={() => filterColor("all")} className='category-button'>All</button>
      <button onClick={() => filterColor("white")} className='category-button'>White</button>
      <button onClick={() => filterColor("black")} className='category-button'>Black</button>
      <button onClick={() => filterColor("blue")} className='category-button'>Blue</button>
      <button onClick={() => filterColor("green")} className='category-button'>Green</button>
      <button onClick={() => filterColor("red")} className='category-button'>Red</button>
    </div>
     </div>
  )
}


    

export default Category