import React, { useContext } from "react";
import { NameContext } from "./context/UserNamecontext";

//props = {}

// const obj = {prop:value}

//props.userName
//{userName}

//destructuring => const {prop,prop2,prop3} = obj;

function Child({ displayAlert, counter }) {
  const { setUserName } = useContext(NameContext);

  return (
    <div className="p-4 bg-amber-200 flex flex-col justify-start items-start gap-3">
      <button
        className="border bg-red-300 text-white p-4 rounded-md cursor-pointer"
        onClick={() => setUserName("sara")}
      >
        Change user name
      </button>
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
