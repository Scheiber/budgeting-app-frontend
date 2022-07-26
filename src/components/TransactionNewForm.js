import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/transactions`, transaction)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className="new-transaction">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name: </label>
        <input
          id="item_name"
          className="field"
          type="text"
          value={transaction.item_name}
          onChange={handleTextChange}
          required
          placeholder="Groceries, Coffee, Income"
        />
        <br />
        <label htmlFor="amount">Amount: </label>
        <input
          id="amount"
          className="field"
          type="number"
          required
          value={transaction.amount}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          className="field"
          type="text"
          name="date"
          value={transaction.date}
          onChange={handleTextChange}
          required
          placeholder="January 1st, 2022"
        />
        <br />
        <label htmlFor="from">From: </label>
        <input
          id="from"
          className="field"
          type="text"
          onChange={handleTextChange}
          value={transaction.from}
          required
          placeholder="Employer, Store, Business"
        />
        <br />
        <label htmlFor="category">Category: </label>
        <input
          id="category"
          className="field"
          type="text"
          name="category"
          value={transaction.category}
          placeholder="expense, income"
          onChange={handleTextChange}
          required
        />
        <br />

        <input className="submit" type="submit" />
      </form>
      <Link to={`/transactions`}>
        <br />
        <button className="cancel">Cancel</button>
      </Link>
    </div>
  );
}

export default TransactionNewForm;
