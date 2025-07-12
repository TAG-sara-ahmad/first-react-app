import React from "react";
import Child from "./Child";

function Parent({ displayAlert, counter }) {
  return (
    <div>
      <Child displayAlert={displayAlert} counter={counter} />
    </div>
  );
}

export default Parent;

// props drilling
// state lifting
// useContext() ==> share global state
