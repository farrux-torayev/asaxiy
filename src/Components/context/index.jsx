import { createContext, useState } from "react";

export const NameContext = createContext(null);

function NameContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [cart, setCart] = useState([])
  const [product, setProduct ] =useState()

  return (
    <NameContext.Provider value={{ token, setToken, cart, setCart, product, setProduct }}>
      {children} 
    </NameContext.Provider>
  );
}

export default NameContextProvider;