import "./OneCharacter.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./AllCharacters.css";

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

      let statusClass;
      switch (char.status) {
        case "Alive":
          statusClass = "CharCard--alive";
          break;
          case "Dead":
            statusClass = "CharCard--dead";
            break;
            default:
              statusClass = "CharCard--unknown";
              break;
            }

      return (
        <li className={`List__Item--Wrap ${statusClass}`} key={char.id}>
          <Link className="List__Item" to={`/character/${char.id}`}>
            <img src={char.image} alt={char.name} />
            <div className="List__Item--Text">
              <h2>{char.name}</h2>
              <p>Status: {char.status}</p>
              <p>Species: {char.species}</p>
            </div>
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
    <div className="App__List--Wrapper">
      <ul className="App__List--Content">{renderCharacters()}</ul>
      <button
        className="backButton"
        onClick={() => loadMoreCharactersOnClick()}
      >
        Load More
      </button>
    </div>
  );
}
