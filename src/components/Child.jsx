import React from "react";

//props = {}

// const obj = {prop:value}

//props.userName
//{userName}

//destructuring => const {prop,prop2,prop3} = obj;

function Child({ userName, displayAlert, counter }) {
  return (
    <div>
      <p>Child username {userName}</p>
      <button
        onClick={displayAlert}
        className="border bg-sky-300 text-white p-4 rounded-md cursor-pointer"
      >
        Click Me!
      </button>

      <span>counter from parent ==== {counter}</span>
    </div>
  );
}

export default Child;
