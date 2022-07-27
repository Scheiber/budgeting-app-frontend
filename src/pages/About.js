import "./About.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const About = () => (
  <div className="about">
    <HelmetProvider>
      <Helmet>
        <title>Allocate | About</title>
      </Helmet>
    </HelmetProvider>
    <h2>Your Budget: Reimagined</h2>
    <div className="description">
      <p>This is Allocate, your new best friend for tracking your budget.</p>
      <p>
        Money has such importance in our society, and the resposibilty of
        balancing a budget can be burdensome.
      </p>
      <p>
        Create a transaction. Mark it as an expense or income. View its details.
        Update it. Delete it.
      </p>
      <p>It's all up to you. The possibilities are endless.</p>
    </div>
    <img class="wordmark" src="./wordmark.png" alt="Allocate Wordmark" />
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
