import TransactionEditForm from "../components/TransactionEditForm";
import "./Edit.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Edit = () => (
  <div>
    <HelmetProvider>
      <Helmet>
        <title>Allocate | Edit Transaction</title>
      </Helmet>
    </HelmetProvider>
    <h2>Edit this item:</h2>
    <TransactionEditForm />
  </div>
);

export default Edit;
