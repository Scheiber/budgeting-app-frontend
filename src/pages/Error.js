import "./Error.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Error = () => (
  <div className="error-page">
    <HelmetProvider>
      <Helmet>
        <title>Allocate | Not Found</title>
      </Helmet>
    </HelmetProvider>
    <h1>404: Not Found</h1>
    <p className="error-text">
      The page you are looking for might have been removed, had its named
      changed, or is temporarily unavailable.
    </p>
    <p className="error-text">
      <a href="/">Click here</a> to go back home.
    </p>
  </div>
);

export default Error;
