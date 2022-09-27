import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactComponent as FavYellow } from "../images/star_yellow.svg";


export default function FavCharacters() {
    const [favChars, setFavChars] = useState([]);
    
    useEffect(() => {
        let keyArray = [];
        for (let i = 0; i < localStorage.length; i++) {
            let storedValue = localStorage.key(i);
            keyArray.push(storedValue);
        }
        const ListOfFavs = keyArray.map(e => JSON.parse(localStorage.getItem(e)));
        setFavChars(ListOfFavs);
    }, []);

    function renderCharacters() {
        const ListOfChars = favChars.map((char) => {
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
                          <p>Gender: {char.gender}</p>
                          <FavYellow className="char__icon" />
                        </div>
                      </Link>
                    </li>
                  );
                });
                return ListOfChars;
              }

    return (
        <div className="App__List--Wrapper">
            <ul className="App__List--Content">{renderCharacters()}</ul>
        </div>
  );
}