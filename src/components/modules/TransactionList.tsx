import { TransactionContext } from "../../context/TransactionContext";
import { useContext } from "react";

const TransactionList = () => {
  // =========== Context ============
  const context = useContext(TransactionContext);
  if (!context) return null;
  const { transactions } = context;

  // =========== Rendering ============
  return (
    <ul className="mt-4">
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        transactions.map((tx) => (
          <li key={tx._id} className="border p-2 mb-2 rounded">
            <span className="font-bold">{tx.to}</span> - {tx.amount}{" "}
            {tx.currency} -
            <span
              className={`ml-2 ${
                tx.status === "Approved" ? "text-green-500" : "text-yellow-500"
              }`}
            >
              {tx.status}
            </span>
          </li>
        ))
      )}
    </ul>
  );
};

export default TransactionList;
