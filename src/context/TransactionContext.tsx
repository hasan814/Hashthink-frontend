import { TransactionContextType } from "../types";
import { createContext } from "react";

export const TransactionContext = createContext<
  TransactionContextType | undefined
>(undefined);
