import { ReactNode, useEffect, useState } from "react";
import { TransactionContext } from "./TransactionContext";
import { getTransactions } from "../services/api";
import { Transaction } from "../types";

import socket from "../services/socket";

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  // ================ State ================
  const [currency, setCurrency] = useState("USD");
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // ================ Fetch Data (Effect) ================
  useEffect(() => {
    getTransactions().then((data) => {
      setTransactions(
        data.filter((tx: Transaction) => tx.currency === currency)
      );
    });

    socket.on("newTransaction", (newTransaction: Transaction) => {
      setTransactions((prev) => [...prev, newTransaction]);
    });

    return () => {
      socket.off("newTransaction");
    };
  }, [currency]);

  // ================ Rendering ================
  return (
    <TransactionContext.Provider
      value={{ transactions, currency, setCurrency }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
