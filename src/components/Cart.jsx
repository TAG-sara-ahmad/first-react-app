import React, { act, useContext, useReducer, useState } from "react";
import { products } from "../products";
import AddProductModal from "./AddProductModal";
import { CartContext } from "./context/CartContext";

function Cart() {
  // state => current state (updated)
  //dispatch => action {type : 'INCREMENT', payload: new product }
  // reducer => function (state, action)

  const { dispatch } = useContext(CartContext);
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div className="p-4 flex flex-col">
      <h2>Cart</h2>
      <>
        <p>Your cart is empty.</p>
        <button
          className="mb-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setShowPopUp(true)}
        >
          ➕ Add New Product
        </button>
      </>

      <AddProductModal
        showPopup={showPopUp}
        setShowPopup={setShowPopUp}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Cart;

// products array
// operations :  add, remove, update quantity, clear cart
