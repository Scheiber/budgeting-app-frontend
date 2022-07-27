import "./Home.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Home = () => (
  <div className="tagline">
    <HelmetProvider>
      <Helmet>
        <title>Allocate | Home</title>
      </Helmet>
    </HelmetProvider>
    <h1>Take control of your budget.</h1>
    <h2>You've just discovered Allocate.</h2>
    <h2>The budgeting app for the rest of us.</h2>
    <a href="/transactions">
      <img
        src="./splash.png"
        alt="Allocate Icon"
        title="The all ighty ollar?"
      />
    </a>
  </div>
);

export default Home;
