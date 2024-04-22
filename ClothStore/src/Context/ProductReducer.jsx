const ProductReducer =(state , action)=>{

    switch (action.type) {
        case "GET_PRODUCTS" : 
        return {
            ...state,
            products : action.payload
        }
        case "ADD_TO_CART":
            return {
                ...state,
                cart : [...state.cart, action.payload]
            }
            case "REMOVE_ITEM":
                return{
                    ...state,
                    cart : state.cart.filter(item => item.id !== action.payload)
                }
            case "GET_JWELLARY":
               return{
                ...state,
                jewelery: action.payload
               }

    
        default:
           return state;
    }
}
export default ProductReducer