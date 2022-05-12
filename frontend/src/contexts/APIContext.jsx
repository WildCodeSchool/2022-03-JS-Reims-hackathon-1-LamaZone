import { useState, useEffect, createContext, useContext } from "react";
import propTypes from "prop-types";
import Axios from "axios";

const ProductsContext = createContext();

export function APIContext({ children }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    Axios.get("http://www.localhost:3001/items").then((res) => {
      setProducts(res.data.results);
    });
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

APIContext.propTypes = {
  children: propTypes.node.isRequired,
};

export const useProductsContext = () => useContext(ProductsContext);
