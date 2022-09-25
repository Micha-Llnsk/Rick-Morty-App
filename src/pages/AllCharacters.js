import "./OneCharacter.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./AllCharacters.css";

export default function AllCharacters() {
  const [resources, setResources] = useState([]);
  const [totalPages, setTotalPages] = useState();

  const [filterObject, setFilterObject] = useState({
    status: "",
    gender: "",
    name: "",
    page: 1,
  });

  const [reloadDataSet, setReloadDataSet] = useState(true);
  const apiBaseUri = "https://rickandmortyapi.com/api/character";


  function compileApiUri(baseUrl, filterObject) {
    let apiFilterParams = new URLSearchParams({});
    Object.entries(filterObject).forEach((filter) => {
      if (filter && filter[1]) {
        apiFilterParams.append(filter[0], filter[1]);
      }
    });
  return apiFilterParams.toString() ? baseUrl + "/?" + apiFilterParams.toString() : baseUrl;
}


  useEffect(() => {
    fetch(compileApiUri(apiBaseUri, filterObject))
      .then((res) => res.json())
      .then((data) => {
        setResources((prevResources) => {
          if (reloadDataSet) {
            setReloadDataSet(false);
            return data?.results || [];
          } else {
            return [...prevResources, ...(data?.results || [])];
          }
        });
        setTotalPages(data?.info?.pages || 1);
      })
      .catch((error) => console.log(error));
  }, [filterObject]);


  function renderCharacters() {
    const ListOfChars = resources.map((char) => {
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
            </div>
          </Link>
        </li>
      );
    });
    return ListOfChars;
  }

  function handleLoadMore() {
    if (filterObject.page < totalPages) {
      setFilterObject({...filterObject, page: filterObject.page + 1 });
    }
  }

  function handleFilterInputChange(e) {
    setFilterObject({
      ...filterObject,
      [e.target.name]: e.target.value,
      page: 1,
    });
    setReloadDataSet(true);
  }

  return (
  <div className="App__List--Wrapper">
    <div className="search__wrap">
    <form className="search__form">
      <select id="status-filter" className="form--item" name="status" onChange={handleFilterInputChange}>
        <option value="">-- STATUS --</option>
        <option value="alive">ALIVE</option>
        <option value="dead">DEAD</option>
        <option value="unknown">UNKNOWN</option>
      </select>
      <select id="gender-filter" className="form--item" name="gender" onChange={handleFilterInputChange}>
        <option value="">-- GENDER --</option>
        <option value="female">FEMALE</option>
        <option value="male">MALE</option>
        <option value="unknown">UNKNOWN</option>
        <option value="genderless">GENDERLESS</option>
      </select>
      <input id="name-filter" className="form--item" type="text" name="name" onChange={handleFilterInputChange} placeholder="CHARACTER NAME" />
    </form>
    </div>

      <ul className="App__List--Content">{renderCharacters()}</ul>
      {filterObject.page < totalPages && (
      <button
        className="backButton"
        onClick={() => handleLoadMore()}
      >
        Load More
      </button>
      )}
  </div>
  );
}
