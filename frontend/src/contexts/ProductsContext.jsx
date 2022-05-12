/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, useEffect, createContext, useContext } from "react";
import propTypes from "prop-types";
import Axios from "axios";

const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/items").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export const useProductsContext = () => useContext(ProductsContext);
