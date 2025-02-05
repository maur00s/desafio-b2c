import React from "react";
import { Routes, Route } from "react-router-dom";
import { Product } from "../pages/Product"; 

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default RoutesComponent;
