import "./OneCharacter.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {ReactComponent as FavBlack} from "../images/star_black.svg";

export default function OneCharacter() {
  const { charId } = useParams();
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState();
  const history = useHistory();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${charId}`;
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        setIsLoading(false);
      });
  }, [charId]);

  function renderCharacter() {
    if (isLoading || character === null) {
      return "Loading...";
    } 
    
    const { name, id, image, status, species, type, gender, origin, location } =
      character;
      
      let statusClass;
      switch (status) {
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
    
    function saveFavChar() {
      if (localStorage.getItem(id) === null) {
        localStorage.setItem(id, JSON.stringify(character));
        setIsSaved(true);
      }  else {
        localStorage.removeItem(id);
        setIsSaved(false);
      }
    }

    return (
      <section className={`char__card ${statusClass}`}>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Type: {type}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin?.name}</p>
        <p>Location: {location?.name}</p>
        <FavBlack className={isSaved ? "char__icon active" : "char__icon"} onClick={saveFavChar} />
      </section>
    );
  }

  return (
    <>
      {renderCharacter()}
      <button className="backButton" onClick={() => history.goBack()}>
        Go Back
      </button>
    </>
  );
}
