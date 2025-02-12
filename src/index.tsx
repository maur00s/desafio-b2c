import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import { ThemeContextProvider } from "@telefonica/mistica";
import { theme } from "./theme/theme";
import "../i18n"; 

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <ThemeContextProvider theme={theme}>
      <App />
    </ThemeContextProvider>
  );
} else {
  console.error("Root element not found");
}
