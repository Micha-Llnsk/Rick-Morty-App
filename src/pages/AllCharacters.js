import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AllCharacters() {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  function renderCharacters() {
    const ListOfChars = characters.map((char) => {
      return (
        <li key={char.id}>
          <img src={char.image} alt={char.name} />
          <Link to={`/onecharacter/${char.id}`}>
            <h2>{char.name}</h2>
          </Link>
        </li>
      );
    });
    return ListOfChars;
  }

  return <ul>{renderCharacters()}</ul>;
}
