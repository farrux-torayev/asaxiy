import React, { useContext } from "react";
import { NameContext } from "../../Components/context";
import { Navigate } from "react-router";

const ProtectedRouter = ({ children }) => {
  const { token } = useContext(NameContext);
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRouter;
