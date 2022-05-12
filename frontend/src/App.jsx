import { useState } from "react";
import CardList from "./components/CardList";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <Navbar value={value} setValue={setValue} />
      <p>Hello from App</p>
      <CardList value={value} />
    </>
  );
}

export default App;
