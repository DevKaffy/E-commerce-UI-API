import { useEffect, useState } from "react";
import React from "react";
import Navbar from './Components/Navbar';
import Title from './Components/Title'
import ProductsCard from "./Components/ProductsCard";
import Main from "./Components/Main";
import "./App.css";
import axios from "axios";


const App = () => {
const [products, setProducts] = useState([]);



  useEffect(()=>{
    axios("https://fakestoreapi.com/products")
    .then((res)=>{
      let vl = res.data
     setProducts([...products ].concat(vl))  
    })
      
  },[])

  console.log(products);
  
  return (
    <>
      <Navbar />
      <Title />
      <Main product = {products}/>
    </>
  );
}


export default App;




