/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext, useContext } from "react";
import propTypes from "prop-types";

const ValueContext = createContext();

export function ValueContextProvider({ children }) {
  const [value, setValue] = useState("");

  return (
    <ValueContext.Provider value={{ value, setValue }}>
      {children}
    </ValueContext.Provider>
  );
}

ValueContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export const useValueContext = () => useContext(ValueContext);
