import React, { createContext, useState } from "react";
import data_product from "../../../Ecommerce_Frontend_Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  data_product.forEach(product => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartitems, setCartItems] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartItems = () =>{
    let cartCount=0;
    for(const item in cartitems)
    {
        if(cartitems[item]>0)
        {
            cartCount=cartCount+cartitems[item];
        }
    }
    return cartCount;
  }

  const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartitems) {
    if (cartitems[item] > 0) {
      const itemInfo = data_product.find(product => product.id === Number(item));
      if (itemInfo) {
        totalAmount += itemInfo.new_price * cartitems[item];
      }
    }
  }
  return totalAmount;

};

  const contextValue = { data_product, cartitems, addToCart, removeFromCart,getTotalCartAmount,getTotalCartItems};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
