import { NavLink } from "react-router-dom";
import logo from "../images/logo_rick_and_morty.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="App__head">
      <img className="App__logo" src={logo} alt="Rick and Morty Logo" />
      <nav className="App__nav">
        <button className="dropdown-btn">MENU</button>
        <div className="dropdown-content">
          <NavLink activeClassName="selected" className="dropdown-item" exact to="/">HOME</NavLink>
          <NavLink activeClassName="selected" className="dropdown-item" to="/allcharacters">CHARACTERS</NavLink>
          <NavLink activeClassName="selected" className="dropdown-item" to="/favs">FAVS</NavLink>
        </div>
      </nav>
    </header>
  );
}