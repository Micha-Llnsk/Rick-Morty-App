import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AllCharacters from "./pages/AllCharacters";
import OneCharacter from "./pages/OneCharacter";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
