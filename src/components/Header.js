import { NavLink } from "react-router-dom";
import logo from "../images/logo_rick_and_morty.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="App__head">
      <img className="App__logo" src={logo} alt="Rick and Morty Logo" />
      <nav className="App__nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allcharacters">Characters</NavLink>
      </nav>
    </header>
  );
}
