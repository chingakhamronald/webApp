import { createBrowserRouter } from "react-router";
import { SignUpForm } from "./pages/SignUpForm";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Layout from "./pages/Layout";

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
    Component: Layout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
    ],
  },
]);

export default router;
