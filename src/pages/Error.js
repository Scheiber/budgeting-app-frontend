import "./Error.css";
import { Helmet } from "react-helmet";

const Error = () => (
  <div className="error-page">
    <Helmet>
      <title>Allocate | Not Found</title>
    </Helmet>
    <h1>404: Not Found</h1>
    <p className="error-text">
      The page you are looking for might have been removed, had its named
      changed, or is temporarily unavailable.
    </p>
    <p className="error-text">
      <a href="/">Click here</a> to go
      back home.
    </p>
  </div>
);

export default Error;
