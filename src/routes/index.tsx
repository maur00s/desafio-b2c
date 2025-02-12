import React from "react";
import { Routes, Route } from "react-router-dom";
import { Product, Offer, Info, Error } from "../pages"; 

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product" element={<Product />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/info" element={<Info />} />
        <Route path="/error-credit" element={<Error variant="credit" />} />
        <Route path="/error-service" element={<Error variant="service" />} />
    </Routes>
  );
};

export default RoutesComponent;
