import "./Home.css";

function Home() {
  return (
    <div className="tagline">
      <h1>Take control of your budget.</h1>
      <h2>You've just discovered Allocate.</h2>
      <h2>The budgeting app for the rest of us.</h2>
      <a href="/transactions">
        <img src="./splash.png" alt="Allocate Icon" />
      </a>
    </div>
  );
}

export default Home;
