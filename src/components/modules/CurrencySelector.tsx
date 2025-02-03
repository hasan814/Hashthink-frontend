import { TransactionContext } from "../../context/TransactionContext";
import { useContext } from "react";

const CurrencySelector = () => {
  // ============= Context ============
  const context = useContext(TransactionContext);
  if (!context) return null;
  const { currency, setCurrency } = context;

  // ============= Rendering ============
  return (
    <div className="flex gap-2">
      {["USD", "EUR", "GBP"].map((cur) => (
        <button
          key={cur}
          className={`px-4 py-2 rounded ${
            currency === cur ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setCurrency(cur)}
        >
          {cur}
        </button>
      ))}
    </div>
  );
};

export default CurrencySelector;
