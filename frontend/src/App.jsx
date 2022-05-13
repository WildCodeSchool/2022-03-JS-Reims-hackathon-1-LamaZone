import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contribute from "./pages/Contribute";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/contribute" element={<Contribute />} />
      </Routes>
    </Router>
  );
}

export default App;
