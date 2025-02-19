import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Home";
import Admin from "../admin";
import About from "../Components/about";
import Login from "../Components/login";
import Product from "../Page/product";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
