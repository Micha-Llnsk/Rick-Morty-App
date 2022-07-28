import portal from "../images/fun_portal_rick_and_morty.jpg";
import "./Home.css";

export default function Home() {
  return (
    <section className="Home__Content">
      <div className="Home__Text">
        <h2>Welcome</h2>
        <p>to the Rick and Morty</p>
        <h2>Multiverse !!</h2>
      </div>
        <img
          className="Home__Image"
          src={portal}
          alt="Rick and Morty fighting their way out of a portal"
        />
      <div className="Home__Sign">
        <a className="Home__Sign--Link" href="https://github.com/Micha-Llnsk" target="_blank" rel="noreferrer">Made by Micha-Llnsk</a>
      </div>
    </section>
  );
}
