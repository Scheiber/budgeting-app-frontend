import TransactionEditForm from "../components/TransactionEditForm";
import "./Edit.css";
import { Helmet } from "react-helmet";

const Edit = () => (
  <div>
    <Helmet>
      <title>Allocate | Edit Transaction</title>
    </Helmet>
    <h2>Edit this item:</h2>
    <TransactionEditForm />
  </div>
);

export default Edit;
