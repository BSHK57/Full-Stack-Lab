// src/components/NavBar/NavBar.js
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/about">About</Link>
    </nav>
  );
};

export default NavBar;
