import { TransactionProvider } from "./context/TransactionProvider";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <TransactionProvider>
      <div className="flex justify-center items-center min-h-screen">
        <Outlet />
      </div>
    </TransactionProvider>
  );
};

export default App;
