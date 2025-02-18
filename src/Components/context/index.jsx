import { createContext, useState } from "react";

export const NameContext = createContext(null);

function NameContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <NameContext.Provider value={{ token, setToken }}>
      {children}
    </NameContext.Provider>
  );
}

export default NameContextProvider;