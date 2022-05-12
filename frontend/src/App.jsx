import Home from "@pages/Home";
import { ProductsContextProvider } from "./contexts/ProductsContext";
import "./App.css";

function App() {
  return (
    <ProductsContextProvider>
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl text-blue-900">
          React and Tailwind with Vitejs!
        </h1>
      </div>
    </ProductsContextProvider>
  );
}

export default App;
