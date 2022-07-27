import { HelmetProvider, Helmet } from "react-helmet-async";

const About = () => (
  <div className="about">
    <HelmetProvider>
      <Helmet>
        <title>Allocate | About</title>
      </Helmet>
    </HelmetProvider>
    <h2>Your Budget: Reimagined</h2>
    <p>This is Allocate, your new best friend for tracking your budget. </p>
    <p>Choose a transaction. Edit it. Delete it. It's all up to you.</p>
    <img src="./wordmark.png" alt="Allocate Wordmark" />
    <p>
      Created by <a href="https://github.com/scheiber/">Jonathan Scheiber</a>.
    </p>
    <p>
      <a href="https://github.com/scheiber/allocate">Source available</a> on
      GitHub.
    </p>
  </div>
);

export default About;
