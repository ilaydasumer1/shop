import React, { useEffect, useState } from 'react';
import Product from "./Product";
import productsData from './products.json';
import './App.css';
import Category from './Category';
import Header from './Header';

function App() {
  const [products, setProducts] = useState(productsData);
/* ürünlerin her birini temsil eden productData parametresi üzerinden dönüyoruz ve her ürünün category özelliğini
 tıklanan kategoriyle (category parametresiyle) karşılaştırıyoruz. Eğer ürünün kategorisi, tıklanan kategoriyle
  aynıysa, o ürün yeni filtrelenmiş ürünler listesine dahil edilir. */
  const [searchTerm, setSearchTerm] = useState("");

  const filterItems = (category) => {
    if (category === "all") {
      setProducts(productsData);
      return;
    }
    const newItems = productsData.filter((productData) => productData.category === category);
    setProducts(newItems);
  };

  const filterPrice = (price) => {
    if(price === "all"){
      setProducts(productsData);
      return;
    }
    const newPrice = productsData.filter((productData) => productData.price === price);
    setProducts(newPrice);
  }

  const filterColor = (color) => {
    if(color === "all"){
      setProducts(productsData);
      return;
    }

    const newColor = productsData.filter((productData) => productData.color === color);
    setProducts(newColor);
  }
  useEffect(() => {
    getSearchData(searchTerm)
  }, [searchTerm])

  const getSearchData = () => {
    const tempData = productsData.filter((product) => {
      if (searchTerm === "") {
        return product;
      } else if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return product;
      }
    });
    setProducts(tempData);
  };
    

  return (
    <div>
      <div>
      <input type="text" className='main-input' placeholder='Enter your search shoes'
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      
      <Header/>
    <div className='product-and-category'>
      <Category filterItems={filterItems} filterPrice={filterPrice} filterColor={filterColor}/>
      <div className='header' >
      </div>
      <div className='product-container'>
        {products.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;