import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import {NavbarDiscount} from './components/navbardiscount'
import {Mainlanding} from './pages/mainlanding'
import {Footer} from './components/footer/footer'
import {Cart} from './pages/cart'
import './App.css';
import { ShopContextProvider } from "./context/shop-context";
import { ProductDetails } from './pages/productdetails';
import { Allshoppingpage } from "./pages/allshoppage";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <NavbarDiscount />
          <Routes>
            <Route path="/" element = {<Mainlanding />}/>
            <Route path="/cart" element = {<Cart />}/>
            <Route path="/shop"  element = {<Allshoppingpage />}/>
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        <Footer />
      </Router>
      </ShopContextProvider >
    </div>


  );
}

export default App;
