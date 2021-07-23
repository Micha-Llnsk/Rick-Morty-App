import "./OneCharacter.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AllCharacters() {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(2);

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
          <Link to={`/character/${char.id}`}>
            <h2>{char.name}</h2>
          </Link>
        </li>
      );
    });
    return ListOfChars;
  }

  function loadMoreCharactersOnClick() {
    const urlPage = `https://rickandmortyapi.com/api/character/?page=${page}`;
    fetch(urlPage)
      .then((res) => res.json())
      .then((data) => {
        const moreCharacters = [...characters, ...data.results];
        setCharacters(moreCharacters);
      });
    return setPage(page + 1);
  }

  return (
    <div>
      <ul>{renderCharacters()}</ul>
      <button
        className="backButton"
        onClick={() => loadMoreCharactersOnClick()}
      >
        Load More
      </button>
    </div>
  );
}
