import Navbar from "./component/Navbar";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ProductProvider } from "./Context/ProductContext";
import ViewItem from "./pages/ViewItem";

function App() {



  return (
    <Router>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/view/:id" element ={<ViewItem/>}></Route>
        </Routes>
      </ProductProvider>
    </Router>
  );
}

export default App;
