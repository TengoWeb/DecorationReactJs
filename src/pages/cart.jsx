import React, { useContext,useEffect } from "react";
import { ShopContext } from "../context/shop-context";
import { ALLPRODUCTS } from "../allproduct"
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import RazoPay from '../assets/blue 1.png'
import emptycart from '../assets/emtycart.png'

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="cart container p-sm-4 ">
      <div className="cart-title mb-5 d-flex justify-content-center">
        <h1>Your Cart Items</h1>
      </div>
      <div
        className="row mb-2 d-flex"
        style={{ borderBottom: "1px solid grey" }}
      >
        <div className="col-6 cartlittletitles">
          <p>Product</p>
        </div>
        <div className="col-2 cartlittletitles mobile-cart-title-delete">
          <p>Price</p>
        </div>
        <div className="col-2 cartlittletitles mobile-cart-title-delete">
          <p>Quantity</p>
        </div>
        <div className="col-2 cartlittletitles mobile-cart-title-delete">
          <p>Total</p>
        </div>
      </div>
      <div className="cart">

  {ALLPRODUCTS.map((product) => {
    if (cartItems[product.id.toString()] !== 0) {
      return <CartItem key={product.id} data={product} />;
    }
    return null;
  })}
</div>
      <div  className="d-flex justify-content-center">
      {Object.values(cartItems).every((item) => item === 0) && (
        <img src={emptycart } alt="/" />
      )}
      </div>
      <div className="checkoutbox">
        <div className="row mb-3 mt-3">
          <div className="col-8 "></div>
          <div className="col-2 cprod-price" >subtotal</div>
          <div className="col-2 prod-price">${totalAmount}</div>
        </div>
        <div className="row mb-3" >
          <div className="col-8" ></div>
          <div className="col-2 prod-price" style={{borderBottom: "1px solid grey"}}>Shipping</div>
          <div className="col-2 prod-price" style={{borderBottom: "1px solid grey"}}>Flat Rate</div>
        </div>
        <div className="row mb-3">
          <div className="col-8 "></div>
          <div className="col-2 fw-bold fs-4">Total</div>
          <div className="col-2 fw-bold fs-4">${totalAmount}</div>
        </div>
      </div>
      <div className="checkout-buttons  " style={{gap:"90px", display:"flex", justifyContent:"end",}}>
      <button className="buybutton m-0 bg-dark" onClick={() => { checkout(); navigate("/checkout"); }}> Checkout</button>
      <button className="buybutton m-0 bg-dark" onClick={() => navigate("/")}>Continue Shopping</button>
      </div>

    </div>

    <div className="billinginfro mb-5 ">
      <div className="container ">
        <div className="row p-3" style={{border:"none", boxShadow:" 0px 8px 23px 0px #506B5221", borderRadius:"8px",}}>
          <h4 className="billing-title">Billing Details</h4>
          <div className="col-md-6 col-12">
            <div className="row g-4">
              <div className="col-6">
                  <label>Fist Name*</label>
                  <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
              </div>

              <div className="col-6">
                <label>Last Name*</label>
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
              </div>

              <div className="col-6">
                <label>Phone*</label>
                <input type="tel" class="form-control" placeholder="Number" aria-label="Number" />
              </div>

              <div className="col-6">
                <label>Email Address*</label>
                <input type="email" class="form-control" placeholder="Email" aria-label="Email" />
              </div>

              <div className="col-12">
                <h3 className="mb-3 billing-title" >Street Adress</h3>
                <input type="address" class="form-control" placeholder="House NO./Apartment No./Plot No." aria-label="Address" />
              </div>   

              <div className="col-12">
              <input type="address" class="form-control" placeholder="Street Name/Locality" aria-label="Address" />
              </div>

              <div className="col-6">
                <label>City*</label>
                <input type="text" class="form-control" placeholder="Tbilisi" aria-label="text" />
              </div>

              <div className="col-6">
                <label>State*</label>
                <input type="text" class="form-control" placeholder="State" aria-label="text" />
              </div>

              <div className="col-6">
                <label>Zip*</label>
                <input type="text" class="form-control" placeholder="016216" aria-label="text" />
              </div>

              <div className="col-6">
                <label>Country*</label>
                <input type="text" class="form-control" placeholder="Goergia" aria-label="text" />
              </div>    
            </div>    
          </div>
          <div className="col-md-6 col-12">
            <label>Order Notes(Optional)</label>
           <textarea class="form-control" aria-label="With textarea" placeholder="Order Notes(Optional)"></textarea>
          </div>
          <div className="123 d-flex justify-content-between">
            <div className="lastdetails-button">
              <h1 className="billing-title">Billing Details</h1>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                 <label class="form-check-label mb-3" for="flexCheckChecked">
                   Pay By Place Order <img src={RazoPay} alt="/"/>Cards, NetBanking, Wallet & UPI
                 </label>
                 <p>Your personal data will be used to process your order, support your<br></br> experience throughout this website, and for other purposes described <br></br>in our Privacy Policy</p>
              </div>
            </div>
            <div className="button  justify-content-end d-flex flex-column">
              <button className="orderbutton">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
