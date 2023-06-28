import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/shop-context';
import { Link } from 'react-router-dom';

export const Product = (props) => {
  const { id, productName, productPrice, productImg } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='buy-card col-lg-3 col-md-4 col-sm-6 col-6 position-relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="justify-content-center d-flex flex-column h-100"
        style={{
          border: "20px solid rgb(255, 252, 252)",
          borderRadius: "8px",
          boxShadow: "0px 8px 23px 0px #506B5221",
          backgroundColor: "white"
        }}
      >
        <img
          src={productImg}
          alt='/'
          className={`product-image ${isHovered ? 'blurred-image' : ''}`}
        />
       <Link to={`/products/${id}`}> <button
          className={`card-hover-button position-absolute ${isHovered ? 'visible' : 'hidden'}`}
          style={{ top: "25%",right: "38%",opacity: isHovered ? 1 : 0,transform: isHovered ? 'scale(1)' : 'scale(0)',transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out' }} >
          About <br></br>Product
        </button></Link>
        <p className='mb-1 mt-3 productname'>{productName}</p>
        <p className='m-0 productprice'>${productPrice}</p>
        <button className='buybutton' onClick={() => addToCart(id)}>
          Buy{cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};
