import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    //add product
    case "ADD":
      // add product to cart
      const checkProduct = state.cart?.find(
        (item) => item.id === action.payload?.id
      );

      if (!checkProduct) {
        return { ...state, cart: [...state.cart, action.payload] };
      }
      alert("prouct already exists");
      return state;

    // remove product
    case "REMOVE":
      const prods = state.cart;

      const newCart = prods.filter((item) => item.id !== action.payload.id);

      return { ...state, cart: newCart };

    // update quantity

    case "UPDATE_QUANTITY":
      const productExists = state.cart?.find(
        (item) => item.id === action.payload?.id
      );
      if (!productExists) {
        alert("product doesnot exists");
        return;
      }
      const delta = action.payload.delta; // +1 -1
      let updatedProduct = {};
      if (delta == "+1") {
        updatedProduct = {
          ...action.payload,
          quantity: action.payload.quantity + 1,
        };
      } else {
        updatedProduct = {
          ...action.payload,
          quantity: action.payload.quantity - 1,
        };
      }
      const updatedCart = state.cart.map((item) => {
        if (item.id == action.payload.id) {
          return updatedProduct;
        }
        return item;
      });
      return { ...state, cart: updatedCart };

    //clear cart
    case "CLEAR_CART":
      return { ...state, cart: [] };

    default:
      break;
  }
};

function CartContextProvider({ children }) {
  const initialState = {
    cart: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // useReducer == useState
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
