// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import ProductContext from '../Context/ProductContext'

// function View({item}) {
//     const {id, title,price,image}=item
//     const {removeItem, addToCart}= useContext (ProductContext)
//   return (
//    <div className='product'>
//         <img src={image} alt="" />
//         <h3>{title}</h3>
//         <h3>Price : ${price}</h3>
//         <Link to={"/cart"}>  <button className='add_cart' onClick={()=> addToCart(item)}>Add to cart</button></Link>
//         <button className='remove' onClick={()=> removeItem(item.id)}>Remove Item</button>
//    </div>
//   )
// }

// export default View