import { createBrowserRouter } from "react-router-dom";

import Receivers from "../pages/Receivers";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Receivers /> }],
  },
]);

export default router;
