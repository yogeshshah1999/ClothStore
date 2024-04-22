import React, { useContext, useEffect } from 'react'
import ProductContext from '../Context/ProductContext'
import Card from './Card'

function ProductContainer() {
const{products, fetchProducts}=useContext(ProductContext)
useEffect(()=>{
 fetchProducts()
},[])
  return (
    <>
    <h1 className='all-products-title'>
    All Products
</h1>
<div className='container'>

{
products.map((product) =>
     <Card product={product} key={product.id}/>
)
}
</div>
 </>
 
)
}

export default ProductContainer