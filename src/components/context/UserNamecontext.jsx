import React, { createContext, useState } from "react";

export const NameContext = createContext(null);
//provider
function UserNamecontext({ children }) {
  const [userName, setUserName] = useState("ftghrhfde");

  return (
    <NameContext.Provider value={{ userName, setUserName }}>
      {children}
    </NameContext.Provider>
  );
}
export default UserNamecontext;

// 1= create context : creatContext()
// 2= create provider : component provide state to consumers
// 3= use the shared state inside the consumer througth useContext()
