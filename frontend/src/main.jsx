import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsContextProvider } from "./contexts/ProductsContext";
import { ShoppingCartContextProvider } from "./contexts/ShoppingCartContext";
import { ValueContextProvider } from "./contexts/ValueContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <ShoppingCartContextProvider>
        <ValueContextProvider>
          <App />
        </ValueContextProvider>
      </ShoppingCartContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
