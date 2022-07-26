import TransactionNewForm from "../components/TransactionNewForm";
import "./Edit.css";
import { Helmet } from "react-helmet";

function New() {
  return (
    <div>
      <Helmet>
        <title>Allocate | New Transaction</title>
      </Helmet>
      <h2>Add a new item:</h2>
      <TransactionNewForm />
    </div>
  );
}

export default New;
