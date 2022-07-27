import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const TransactionEditForm = () => {
  const navigate = useNavigate();
  let { index } = useParams();

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

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch();
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then(() => {
        navigate(`/transactions/${index}`);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className="edit-transaction">
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

        <input className="submit" type="submit" value="Update" />
      </form>
      <br />
      <Link to={`/transactions/${index}`}>
        <button className="cancel">Cancel</button>
      </Link>
    </div>
  );
};

export default TransactionEditForm;
