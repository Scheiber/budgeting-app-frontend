import TransactionDetails from "../components/TransactionDetails";
import { Helmet } from "react-helmet";

function Show() {
  return (
    <div>
      <Helmet>
        <title>Allocate | Show Transaction</title>
      </Helmet>
      <h2>Transaction Details</h2>
      <TransactionDetails />
    </div>
  );
}

export default Show;
