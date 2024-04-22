
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductContext from "../Context/ProductContext";
function Navbar() {
  const {cart}= useContext(ProductContext)
  return (
    <nav>
      
    <Link to={"/"}><h1>My Store</h1></Link>
    <ul>
      <Link to={"/jewelery"}><a>Jewelery</a></Link>
      <a>Female</a>
      <a>Kids</a>
      <a>Decore</a>
    </ul>
   <Link to={"/cart"}> <button>cart<FaShoppingCart/>{cart.length}</button></Link>
   </nav>
  )
}

export default Navbar