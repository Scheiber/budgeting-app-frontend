import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="nav">
    <Link to="/">
      <div className="logo">
        <img alt="Home" src={require("../images/home.png")} />
      </div>
    </Link>
    <Link to="/about">
      <div>About</div>
    </Link>
    <Link to="/transactions">
      <div>Transactions</div>
    </Link>
    <Link to="/transactions/new">
      <div>New Transaction</div>
    </Link>
  </nav>
);

export default NavBar;
