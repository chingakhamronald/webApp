import { createBrowserRouter } from "react-router";
import { SignUpForm } from "./pages/SignUpForm";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Clothing from "./pages/Clothing";
import Accessories from "./pages/Accessories";
import ProtectedRoute from "./components/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: SignUpForm,
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "/dashboard",
    Component: ProtectedRoute,
    children: [
      {
        path: "",
        Component: Layout,
        children: [
          {
            index: true,
            Component: Dashboard,
          },
          {
            path: "clothing",
            Component: Clothing,
          },
          {
            path: "accessories",
            Component: Accessories,
          },
        ],
      },
    ],
  },
]);

export default router;
