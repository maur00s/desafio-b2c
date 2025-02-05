import React from "react";
import {
  ResponsiveLayout,
} from "@telefonica/mistica";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "../routes"

const App: React.FC = () => {
  return (
    <ResponsiveLayout
      variant="alternative"
      backgroundColor="#fff"
      children={
        <BrowserRouter>
          <RoutesComponent/>
        </BrowserRouter>
      }
    />
  );
};

export default App;