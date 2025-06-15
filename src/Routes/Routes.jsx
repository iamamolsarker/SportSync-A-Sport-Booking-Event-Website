import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home"
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login"
import ErrorElement from "../Pages/Error/ErrorElement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorElement></ErrorElement>,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: "register",
            Component: Register
        },
        {
            path: "login",
            Component: Login
        },
    ]
  },
]);