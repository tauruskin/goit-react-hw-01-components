import React from "react";
import PropTypes from "prop-types";
import styles from "../transactionHistory/TransactionHistory.module.css";

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={styles["transaction-item"]}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles["transaction-history"]}>
      <thead>
        <tr className={styles["transaction-head"]}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
