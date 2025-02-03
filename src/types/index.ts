import { ReactNode } from "react";

export interface Transaction {
  _id: string;
  to: string;
  amount: number;
  currency: string;
  status: string;
}

export interface TransactionContextType {
  transactions: Transaction[];
  currency: string;
  setCurrency: (currency: string) => void;
}


export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}