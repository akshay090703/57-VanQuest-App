import { Link } from "react-router-dom";

import classes from "./AboutPage.module.css";
import bgImg from "../assets/about-hero.png";

export default function About() {
  return (
    <div className={classes["about-page-container"]}>
      <img src={bgImg} className={classes["about-hero-image"]} />
      <div className={classes["about-page-content"]}>
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className={classes["about-page-cta"]}>
        <h2>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <Link className={classes["link-button"]} to="/vans">
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
