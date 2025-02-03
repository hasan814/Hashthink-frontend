import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Toaster />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
