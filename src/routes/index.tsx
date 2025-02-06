import React from "react";
import { Routes, Route } from "react-router-dom";
import { Product, Offer, Info } from "../pages"; 

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product" element={<Product />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/info" element={<Info />} />
    </Routes>
  );
};

export default RoutesComponent;
