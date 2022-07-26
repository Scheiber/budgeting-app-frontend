import { Helmet } from "react-helmet";

const Error = () => (
  <div className="error-page">
    <Helmet>
      <title>Allocate | Not Found</title>
    </Helmet>
    <h1>Error 404: Not Found</h1>
    <h2>
      <a href="/">Click here</a> to go back home.
    </h2>
  </div>
);

export default Error;
