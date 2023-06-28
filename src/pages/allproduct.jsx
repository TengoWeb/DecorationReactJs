import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';
import { Link } from 'react-router-dom';

export const AllProduct = (props) => {
  const { id, productName, productPrice, productImg } = props.data;
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  const handleAddToCart = () => {
    if (cartItemAmount > 0) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  return (
    <div className='buy-card col-lg-3 col-md-4 col-sm-6 col-6'>
      <Link to={`/products/${id}`}>
        <div
          className='justify-content-center d-flex flex-column h-100'
          style={{
            border: '20px solid rgb(255, 252, 252)',
            borderRadius: '8px',
            boxShadow: '35px 35px 35px 0px #506B5221',
            backgroundColor: 'white',
          }}
        >
          <img src={productImg} alt='/' />

          <p className='mb-1 mt-3 productname'>{productName}</p>
          <p className='m-0 productprice'>${productPrice}</p>
          <div className='button-group d-flex'>
            <button className='buybutton w-100' onClick={handleAddToCart}>
              {cartItemAmount > 0 ? 'Remove from Cart' : 'Buy'}
              {cartItemAmount > 0 && ` (${cartItemAmount})`}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};