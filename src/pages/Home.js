import "./Home.css";
import { Helmet } from "react-helmet";

const Home = () => (
  <div className="tagline">
    <Helmet>
      <title>Allocate | Home</title>
    </Helmet>
    <h1>Take control of your budget.</h1>
    <h2>You've just discovered Allocate.</h2>
    <h2>The budgeting app for the rest of us.</h2>
    <a href="/transactions">
      <img src="./splash.png" alt="Allocate Icon" />
    </a>
  </div>
);

export default Home;
