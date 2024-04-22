import React, { useContext } from 'react'
import ProductContext, { ProductProvider } from '../Context/ProductContext'

function CartItem({product}) {
    const {removeItem}= useContext (ProductContext)

    return (
        <div className='cart-item' >
            <img src={product.image} alt="" />

            <h3>{product.title}</h3>
           
                <h3>Price : ${product.price}</h3> 
                <button className='remove' onClick={()=> removeItem(product.id)}>Remove Item</button>
        </div>
    )
}

export default CartItem