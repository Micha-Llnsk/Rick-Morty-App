import "./OneCharacter.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function OneCharacter() {
  const { charId } = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
    
    const { name, image, status, species, type, gender, origin, location } =
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
