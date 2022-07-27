import "./Index.css";
import Transactions from "../components/Transactions";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Index = () => (
  <div>
    <HelmetProvider>
      <Helmet>
        <title>Allocate | Transactions</title>
      </Helmet>
    </HelmetProvider>
    <Transactions />
  </div>
);

export default Index;
