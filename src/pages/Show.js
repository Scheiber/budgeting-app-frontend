import TransactionDetails from "../components/TransactionDetails";
import { HelmetProvider, Helmet } from "react-helmet-async";

function Show() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Allocate | Show Transaction</title>
        </Helmet>
      </HelmetProvider>
      <h2>Transaction Details</h2>
      <TransactionDetails />
    </div>
  );
}

export default Show;
