import { NavLink } from "react-router-dom";
import { useValueContext } from "../contexts/ValueContext";

function Navbar() {
  const { value, setValue } = useValueContext();
  return (
    <nav className="flex justify-between items-center w-[100vw] flex-wrap">
      <span className="flex items-center justify-center grow">
        <img src="./src/assets/logo.png" alt="logo" className="h-[6rem]" />
        <h1>LamaZone</h1>
      </span>
      <span className="flex flex-row-reverse h-[50px] content-center items-center w-[50%] grow">
        <img
          src="./src/assets/loupe.png"
          alt="glass"
          className="h-[60px] pl-[3px]"
        />
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-[100%]"
        />
      </span>
      <ul className="flex grow items-center justify-center">
        <NavLink className="m-2 flex items-center justify-center" to="/cart">
          Acceuil
          <img
            src="./src/assets/home.png"
            alt="home"
            className="h-[60px] pl-[3px]"
          />
        </NavLink>
        <NavLink
          className="m-2 flex items-center justify-center"
          to="/contribute"
        >
          Contribuer
          <img
            src="./src/assets/thumbs-up.png"
            alt="thumbs-up"
            className="h-[60px] pl-[3px]"
          />
        </NavLink>
        <li>
          <NavLink className="m-2 flex items-center justify-center" to="/cart">
            Panier
            <img
              src="./src/assets/cart.png"
              alt="cart"
              className="h-[60px] pl-[3px]"
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
