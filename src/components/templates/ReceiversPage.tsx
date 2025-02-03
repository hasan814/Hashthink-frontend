import { useState } from "react";

import CurrencySelector from "../modules/CurrencySelector";
import TransactionList from "../modules/TransactionList";
import Popup from "../modules/Popup";

const ReceiversPage = () => {
  // =============== State =============
  const [isPopupOpen, setPopupOpen] = useState(false);

  // =============== Rendering =============
  return (
    <div className="p-6">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => setPopupOpen(true)}
      >
        View Receiver
      </button>

      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <CurrencySelector />
        <TransactionList />
      </Popup>
    </div>
  );
};

export default ReceiversPage;
