import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, productPrice, productImg } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, getItemSubtotal } = useContext(ShopContext);

  const itemSubtotal = getItemSubtotal(id);

  return (
    <>
    <div className="cartItem mt-3 cart-dekstop">
      <div className="row d-flex align-items-center justify-content-center pb-3" style={{borderBottom:"1px solid gray"}}>
        <div className="col-6 d-flex productNametitle">
          <img src={productImg} alt="/" style={{width:"30%"}}/>  
          <p className="productname">{productName}<br></br><br></br><span className="remove"style={{cursor:"pointer"}} onClick={() => removeFromCart(id)}>Remove</span></p>
        </div>
        <div className="col-2 prod-price">
        <p className="m-0"> ${productPrice}</p>
        </div>
        <div className="col-2 position-relative">
          <div className="add-remove d-flex">
          <button className="cartbutton1" onClick={() => removeFromCart(id)}> - </button>
            <input className="screen" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} ></input>
          <button  className="cartbutton2" onClick={() => addToCart(id)}> + </button> 
          </div>
        </div>
        <div className="col-2 total">
          <p className="m-0"style={{ borderBottom: "",  }}>${itemSubtotal}</p>
        </div>
      </div>
    </div>

<div className="cartItem mt-3  cart-mobile">
<div className="row d-flex align-items-center justify-content-center pb-3" style={{borderBottom:"1px solid gray"}}>
  
  <div className="col-8 d-flex productNametitle gap-3">
    <img src={productImg} alt="/" style={{width:"200px"}}/>  
    <div className="d-flex flex-column align-items-start gap-2">
    <p className="productname m-0">{productName}<br></br><br></br><span className="remove"style={{cursor:"pointer"}} onClick={() => removeFromCart(id)}>Remove</span></p>   
    <p className="m-0"> ${productPrice}</p>
      
        <div className="add-remove d-flex ">
           <button className="cartbutton1" onClick={() => removeFromCart(id)}> - </button>
             <input className="screen" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} ></input>
           <button  className="cartbutton2" onClick={() => addToCart(id)}> + </button> 
          </div>
        </div>
  </div>
</div>
</div>
</>
  );
};