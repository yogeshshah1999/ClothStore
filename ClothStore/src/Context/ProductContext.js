import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";

const ProductContext = createContext()

export const ProductProvider = ({children}) =>{
  
 
    const initialState ={
        products : [],
        cart : [],
        jewelery:[]
    }
    const [state , dispatch]= useReducer(ProductReducer,initialState )

     

       //fetch products

       const  fetchProducts = async ()=>{
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
       dispatch({
        type :"GET_PRODUCTS",
        payload: data
       })
    }
     //jewelery api
     const fetchJewelery = async ()=>{
        const res = await fetch('https://fakestoreapi.com/products/category/jewelery')
        const data = await res.json()
        dispatch
        ({
            type:"GET_JWELLARY",
            payload:data
        })
     }
    
        //add to cart


      const addToCart = (product)=>{
        dispatch({
            type :"ADD_TO_CART",
            payload : product
        })
 }
      
 //remove

     const removeItem = (id)=>{
        dispatch({
            type : "REMOVE_ITEM",
            payload : id
        })
     }




    return(
        <ProductContext.Provider value ={{
          products: state.products,
          cart : state.cart,
          addToCart,
          removeItem,
            fetchProducts,
            fetchJewelery

        }}>
            {children}
        </ProductContext.Provider>
    )
}


export default ProductContext