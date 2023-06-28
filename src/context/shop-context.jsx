import React, { createContext, useState } from 'react';
import { ALLPRODUCTS } from '../allproduct';

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < ALLPRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = ALLPRODUCTS.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.productPrice;
        }
      }
    }
    return totalAmount;
  };

  const getItemSubtotal = (itemId) => {
    const itemInfo = ALLPRODUCTS.find((product) => product.id === itemId);
    const itemQuantity = cartItems[itemId];
    if (itemInfo && itemQuantity > 0) {
      return itemInfo.productPrice * itemQuantity;
    }
    return 0;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    getItemSubtotal,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
