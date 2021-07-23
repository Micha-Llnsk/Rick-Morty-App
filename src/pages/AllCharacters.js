import { Link } from "react-router-dom";

export default function AllCharacters() {
  return (
    <ul>
      <li>
        <Link to="/onecharacter">Char1</Link>
      </li>
      <li>
        <Link to="/onecharacter">Char2</Link>
      </li>
    </ul>
  );
}
