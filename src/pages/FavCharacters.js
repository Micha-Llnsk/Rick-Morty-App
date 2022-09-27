import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactComponent as FavBlack } from "../images/star_black.svg";


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
                        
    function handleDeleteFavorite() {
        if (window.confirm("Do you want to delete this Char from your Favorites?")) {
            localStorage.removeItem(char.id)
            }
    }

                return (
                    <li className={`List__Item--Wrap flex ${statusClass}`} key={char.id}>
                        <Link className="List__Item" to={`/character/${char.id}`}>
                            <img src={char.image} alt={char.name} />
                            <div className="List__Item--Text">
                                <h2>{char.name}</h2>
                                <p>Status: {char.status}</p>
                                <p>Gender: {char.gender}</p>
                            </div>
                        </Link>
                        <FavBlack className="char__icon active" onClick={handleDeleteFavorite} />
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