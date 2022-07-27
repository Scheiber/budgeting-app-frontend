import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

const TransactionDetails = () => {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch(() => {
        navigate("/error");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate("/transactions");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  return (
    <div>
      <ul className="trans-details">
        <h2>{transaction.item_name}</h2>
        <li>Date: {transaction.date}</li>
        <li>Amount: ${transaction.amount}</li>
        <li>From: {transaction.from}</li>
        <li>Category: {transaction.category}</li>
      </ul>
      <div className="navigation-buttons">
        <div>
          <Link to={`/transactions`}>
            <button className="navigation-button">Back to transactions</button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <button className="navigation-button">Edit transaction</button>
          </Link>
        </div>
        <div>
          <button className="navigation-button delete" onClick={handleDelete}>
            Delete transaction
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
