"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "@/reducer/CartReducer";

const CartContext = createContext<any>(null);

//! GET CART FROM LOCALSTORAGE (SSR-safe)
const getLocalCartData = () => {
  if (typeof window !== "undefined") {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      return JSON.parse(localCart);
    }
  }
  return [];
};

const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  discounted_price: "",
};

const CartProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id: any, product: any, amount: any) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, product, amount } });
  };

  const removeItem = (id: any) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increment = (id: any) => {
    dispatch({ type: "INCREMENT", payload: id });
  };

  const decrement = (id: any) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //!   SAVE CART IN LOCALSTORAGE (SSR-safe)
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        increment,
        decrement,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
