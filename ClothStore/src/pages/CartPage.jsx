import React, { useContext } from 'react'
import CartItem from '../component/CartItem'
import ProductContext from '../Context/ProductContext'

function CartPage() {
  const {cart}= useContext(ProductContext)

  const cartValue = cart.reduce((p,c)=>(p+c.price),0)

  console.log(cart)

  return (
   <>
   <div className="nav-cart">
     <div className="items">
      {
        cart.map((product)=>
        <CartItem key ={product.id} product={product} />)
       
      }
    

     </div>
     <div className="bill">
      <h1>Total Item : {cart.length}</h1>
      <h1>Total Amount : {cartValue.toFixed(2)}</h1>
      <button className='buy'>Buy Now</button>
     
     </div>
   </div>
  
   </>
  )
}

export default CartPage