import React, { useContext, useEffect } from "react";
import Child from "./Child";
import { CartContext } from "./context/CartContext";

function Parent({ displayAlert, counter }) {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="p-5 bg-pink-300">
      {/* <Child displayAlert={displayAlert} counter={counter} /> */}
      <div className="p-4 flex flex-col gap-3">
        {state?.cart?.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
              border: "1px solid #eee",
              padding: 10,
            }}
          >
            <div style={{ flex: 1 }}>
              <img src={item.image} className="w-36 h-28" />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>
                <strong>{item.price} EGP</strong>
              </p>
            </div>

            <div>
              <button
                onClick={() => {
                  dispatch({
                    type: "UPDATE_QUANTITY",
                    payload: { ...item, delta: "-1" },
                  });
                }}
              >
                -
              </button>
              <span style={{ margin: "0 10px" }}>{item.quantity}</span>
              <button
                onClick={() => {
                  dispatch({
                    type: "UPDATE_QUANTITY",
                    payload: { ...item, delta: "+1" },
                  });
                }}
              >
                +
              </button>
            </div>

            <button
              style={{ marginLeft: 20 }}
              onClick={() => {
                dispatch({
                  type: "REMOVE",
                  payload: item,
                });
              }}
            >
              Remove
            </button>
          </div>
        ))}

        <button
          className="bg-amber-200 p-3 text-white"
          onClick={() => {
            dispatch({
              type: "CLEAR_CART",
            });
          }}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Parent;

// props drilling
// state lifting
// useContext() ==> share global state
