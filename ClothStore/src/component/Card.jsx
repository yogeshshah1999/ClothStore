import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from '../Context/ProductContext'

function Card({product}) {
const {viewItem} = useContext (ProductContext)

  const {title , image , price} = product
  return (
    <div className='product'>
      <img src={image} alt="" />

      <h1>{title}</h1>
      <span>
        <h3>Price : {price}</h3>
        <Link to={`/view/${product.id}`} ><button className='add_cart'  >View Item</button> </Link>
        
      </span>
    </div>
  )
}

export default Card