import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ProductsContextProvider } from "./contexts/ProductsContext";
import { ShoppingCartContextProvider } from "./contexts/ShoppingCartContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <ShoppingCartContextProvider>
        <Router>
          <App />
        </Router>
      </ShoppingCartContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
