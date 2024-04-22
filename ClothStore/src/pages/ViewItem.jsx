import React, { useContext } from 'react'
import {  useParams } from 'react-router-dom'
// import View from '../component/View'
import ProductContext from '../Context/ProductContext'

function ViewItem() {
  const params = useParams()
   const {products,addToCart,cart}= useContext(ProductContext)
    const currentProduct = products.filter(product => product.id === parseInt(params.id))

  return (
    <>
     <div className="item">
      <div className="about-image">
        <img src={currentProduct[0].image} alt="" />
      </div>
      <div className="about-text">
        <h1>{currentProduct[0].title}</h1>
        <h2>${currentProduct[0].price}</h2>
        <button className='buy' onClick={()=>addToCart(currentProduct[0])}>Add to Cart</button>
      </div>
     </div>
   </>
  
   
  )
}

export default ViewItem