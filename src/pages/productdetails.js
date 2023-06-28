import React, { useContext, useEffect, useState } from 'react';
import { Productsale } from '../pages/productsale';
import { PRODUCTSSALE } from '../productSALE';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';
import { ALLPRODUCTS } from '../allproduct';
import './productdetails.css';

export const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = ALLPRODUCTS.find((p) => p.id === productId);
  const { cartItems, addToCart, updateCartItemCount, removeFromCart } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  const [activeCard, setActiveCard] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardToggle = (cardNumber) => {
    setActiveCard(cardNumber === activeCard ? 0 : cardNumber);
  };

  const handleAddToCart = () => {
    if (cartItems[id] && cartItems[id] > 0) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <div className='container mt-5 mb-5'>
      <div className='row g-2 align-items-center'>
        <div className='col-lg-6 col-12 '>
          <img src={product.defimage} alt={product.productName} style={{ objectFit: "cover", width:"100%"}} />
          <div className='row' style={{ width: "100%" }}>
            <div className='col-3 active'>
              <img src={product.defimage} alt={product.productName} style={{ width: "100%",  border: "1px solid green", cursor: "pointer" }} />
            </div>
            <div className='col-3'>
              <img src={product.productImg} alt={product.productName} style={{ width: "100%", cursor: "pointer" }} />
            </div>
            <div className='col-3'>
              <img src={product.productImg} alt={product.productName} style={{ width: "100%", cursor: "pointer" }} />
            </div>
            <div className='col-3'>
              <img src={product.productImg} alt={product.productName} style={{ width: "100%", cursor: "pointer" }} />
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-12 '>
          <h2 style={{ color: "#343434", fontSize: "38px" }}>{product.productName} </h2>
          <p style={{ color: "#343434", fontSize: "32px" }}>  ${product.productPrice}<span className='discount-details'>$450</span></p>
          <p className='discrtiption'>With rounded light green and white-striped leaves, the <br></br> Calathea Orbifolia is a decorative and unique houseplant.</p>
            <div className='container  m-0 p-0 d-flex align-items-center'>
              <p className='m-0'>Quantity</p>
              <div className='d-flex' style={{marginLeft:"16px", marginRight:"70px"}}>
              <button className="cartbutton1" onClick={() => removeFromCart(id)}> - </button>
              <input className="screen " value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}  readOnly></input>
              <button className="cartbutton2" onClick={() => addToCart(id)}> + </button>
              </div>
              <p className="m-0">Include  Planter</p>
              <select style={{marginLeft:"16px"}}>
                <option>Yes</option>
                <option>No</option>
              </select>
           </div>
           <div className='mb-0'>
           <button className={`buybutton p-3 ${cartItemAmount > 0 ? 'remove-from-cart' : ''}`} onClick={handleAddToCart} style={{width:"50%"}}>
              {cartItemAmount > 0 ? 'Remove from Cart' : 'Buy'}
              {cartItemAmount > 0 && ` (${cartItemAmount})`}
            </button>
          <Link  to='/cart'>
                <button
                  className={`buybutton p-3 ${cartItemAmount > 0 ? '' : 'disabled-button'}`}
                  style={{ marginLeft: "30px" }}
                  disabled={cartItemAmount === 0}>
                    Go to Cart
                </button>
          </Link>
          </div>
          <h4 className='m-0 '>Delivery</h4>
          <span className='pincode'>Enter your Pincode to check Delivery time</span><br></br>
          <input className="mt-2 mb-2"type='text'></input> 
          <a className='checkbutton' href='/'>CHECK</a>
          <p className='details-last-text'>Delivery available for this location.<br></br>Typically delivered in 5-7 working days.<br></br>Standard Delivery.</p>
        </div>
    </div>
      </div>

      <div className='productdetailsbanner'>
       <div className='container justify-content-center align-items-center p-5'>
       <p>
      <a
        className={`btn text-light ${activeCard === 1 ? 'active' : ''}`}
        data-bs-toggle="collapse"
        href="#multiCollapseExample1"
        role="button"
        aria-expanded={activeCard === 1 ? 'true' : 'false'}
        aria-controls="multiCollapseExample1"
        onClick={() => handleCardToggle(1)}
      >
        Care Guide
      </a>
      <button
        className={`btn text-light ${activeCard === 2 ? 'active' : ''}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#multiCollapseExample2"
        aria-expanded={activeCard === 2 ? 'true' : 'false'}
        aria-controls="multiCollapseExample2"
        onClick={() => handleCardToggle(2)}
      >
        Plant Bio
      </button>
      <button
        className={`btn text-light ${activeCard === 3 ? 'active' : ''}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#multiCollapseExample3"
        aria-expanded={activeCard === 3 ? 'true' : 'false'}
        aria-controls="multiCollapseExample3"
        onClick={() => handleCardToggle(3)}
      >
        Reviews
      </button>
    </p>
    <div className="row">
      <div className={`col-12 ${activeCard === 1 ? 'show' : ''}`}>
        <div className="collapse multi-collapse show" id="multiCollapseExample1" data-bs-parent=".productdetailsbanner">
          <div className="card card-body z-1 ">
            <h5>Care Guide</h5>
            <p>Placeholder content for the Care Guide section.</p>
            <h5>Light Requirements</h5>
            <p>Calatheas thrive in medium, indirect sunlight but tolerate lower light levels too. Bright direct sunlight can cause the stunning colours on their leaves to fade, with prolonged exposure likely to burn and scorch their leaves.</p>
            <h5>Humidity</h5>
            <p>Your Calathea will also appreciate being placed in a humid environment, which you can create with by misting it frequently, placing it close to other plants or on a pebble tray partly filled with water. Calatheas thrive in steamy bathrooms and kitchens.</p>
          </div>
        </div>
      </div>
      <div className={`col-12 ${activeCard === 2 ? 'show' : ''}`}>
        <div className="collapse multi-collapse" id="multiCollapseExample2" data-bs-parent=".productdetailsbanner">
          <div className="card card-body">
          <h5>Care Guide</h5>
            <p>Placeholder content for the Care Guide section.</p>
            <h5>Light Requirements</h5>
            <p>Calatheas thrive in medium, indirect sunlight but tolerate lower light levels too. Bright direct sunlight can cause the stunning colours on their leaves to fade, with prolonged exposure likely to burn and scorch their leaves.</p>
            <h5>Humidity</h5>
            <p>Your Calathea will also appreciate being placed in a humid environment, which you can create with by misting it frequently, placing it close to other plants or on a pebble tray partly filled with water. Calatheas thrive in steamy bathrooms and kitchens.</p>
          </div>
        </div>
      </div>
      <div className={`col-12 ${activeCard === 3 ? 'show' : ''}`}>
        <div className="collapse multi-collapse" id="multiCollapseExample3" data-bs-parent=".productdetailsbanner">
          <div className="card card-body">
          <h5>Care Guide</h5>
            <p>Placeholder content for the Care Guide section.</p>
            <h5>Light Requirements</h5>
            <p>Calatheas thrive in medium, indirect sunlight but tolerate lower light levels too. Bright direct sunlight can cause the stunning colours on their leaves to fade, with prolonged exposure likely to burn and scorch their leaves.</p>
            <h5>Humidity</h5>
            <p>Your Calathea will also appreciate being placed in a humid environment, which you can create with by misting it frequently, placing it close to other plants or on a pebble tray partly filled with water. Calatheas thrive in steamy bathrooms and kitchens.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>


      <div className='shop container mt-5'>
        <div className='shopTitle d-flex justify-content-center mt-5'>
          <h1 className='tittle-product-cards'>You May Also Like...</h1>
        </div>
        <div className='products row mt-5 g-3'>
          {PRODUCTSSALE.map((product) => (
            <Productsale data={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};
