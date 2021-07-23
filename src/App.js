import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AllCharacters from "./pages/AllCharacters";
import OneCharacter from "./pages/OneCharacter";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav className="App__nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allcharacters">Characters</NavLink>
          </nav>
        </header>
        <main className="App__content">
          <Switch>
            <Route path="/character/:charId">
              <OneCharacter />
            </Route>
            <Route path="/allcharacters">
              <AllCharacters />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <h2>No match </h2>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
