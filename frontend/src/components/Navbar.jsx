import { NavLink } from "react-router-dom";
import propTypes from "prop-types";

function Navbar({ value, setValue }) {
  const createLink = (link, name) => {
    return (
      <li>
        <NavLink className="m-2" to={link}>
          {name}
        </NavLink>
      </li>
    );
  };
  return (
    <nav className="flex justify-between items-center w-[100vw] h-[4vw]">
      <span>TITLE</span>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ul className="flex">
        {createLink("/", "Home")}
        {createLink("/", "Home")}
        {createLink("/", "Home")}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  value: propTypes.string.isRequired,
  setValue: propTypes.func.isRequired,
};

export default Navbar;
