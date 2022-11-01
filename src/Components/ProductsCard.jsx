import React from 'react'

const ProductsCard = ({id, title, imgUrl, price}) => {
  return (
    <div className="product-card">
      <div className="image">
        <img src={imgUrl} alt={imgUrl} />
      </div>
      <div className='paragraphs'>
        <p>{title}</p>
        <p className='price'>{price}</p>
      </div>
    </div>
  );
}

export default ProductsCard