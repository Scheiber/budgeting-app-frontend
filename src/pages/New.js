import TransactionNewForm from "../components/TransactionNewForm";
import { HelmetProvider, Helmet } from "react-helmet-async";

function New() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Allocate | New Transaction</title>
        </Helmet>
      </HelmetProvider>
      <h2>Add a new item:</h2>
      <TransactionNewForm />
    </div>
  );
}

export default New;
