import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home"
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login"
import ErrorElement from "../Pages/Error/ErrorElement";
import MyBookings from "../Pages/Event User/MyBookings";
import ManageEvent from "../Pages/Event Manager/ManageEvent";
import Events from "../Pages/Events/Events";
import PrivateRoutes from "./PrivateRoutes";
import CreateEvent from "../Pages/Event Manager/CreateEvent";

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
          path: "my-event",
          element:<PrivateRoutes><MyBookings></MyBookings></PrivateRoutes>
        },
        {
          path: "manage-event",
          element:<PrivateRoutes><ManageEvent></ManageEvent></PrivateRoutes>
        },
        {
          path: "/add-event",
          element:<PrivateRoutes><CreateEvent></CreateEvent></PrivateRoutes>
        },
        {
          path: "all-event",
          element:<Events></Events>
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