import "./Index.css";
import Transactions from "../components/Transactions";
import { Helmet } from "react-helmet";

const Index = () => (
  <div>
    <Helmet>
      <title>Allocate | Transactions</title>
    </Helmet>
    <Transactions />
  </div>
);

export default Index;
