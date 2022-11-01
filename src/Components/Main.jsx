import React from 'react'
import ProductsCard from './ProductsCard'


const Main = ({product}) => {
  // console.log("Main", product)
  return (
    <div className='main'>
      {product.map((product)=> <ProductsCard product={product} key={product.id}
      title ={product.title}
      imgUrl={product.image}
      price={product.price}
      />)}
    </div>
  )
}

export default Main