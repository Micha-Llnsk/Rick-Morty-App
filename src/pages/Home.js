import portal from "../images/fun_portal_rick_and_morty.jpg";
import "./Home.css";

export default function Home() {
  return (
    <section className="App__homeContent">
      <h1>Rick and Morty App</h1>
      <img
        className="App__homeImage"
        src={portal}
        alt="Rick and Morty fighting their out of a portal"
      />
      <p>Done by Micha</p>
    </section>
  );
}
