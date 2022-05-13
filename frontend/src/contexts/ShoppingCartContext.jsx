/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext, useContext } from "react";
import propTypes from "prop-types";

const ShoppingCartContext = createContext();

export function ShoppingCartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

ShoppingCartContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export const useShoppingCartContext = () => useContext(ShoppingCartContext);
