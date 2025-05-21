import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AuthLayout from "../layout/AuthLayout";
import Signup from "../pages/auth/signup/Signup";
import Signin from "../pages/auth/signin/Signin";
import Event from "../pages/event/Event";
import PrivateRoute from "./PrivateRoute";
import CreateEvent from "../pages/create-event/CreateEvent";
import IndividualEvents from "../pages/individual-events/IndividualEvents";
import UpdateEvent from "../pages/update-event/UpdateEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "event",
        element: <Event />,
      },
      {
        path: "save-event",
        element: (
          <PrivateRoute>
            <IndividualEvents />
          </PrivateRoute>
        ),
      },
      {
        path: "create-event",
        element: (
          <PrivateRoute>
            <CreateEvent />
          </PrivateRoute>
        ),
      },
      {
        path: "update-event/:id",
        element: (
          <PrivateRoute>
            <UpdateEvent />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/specefic-event/${params.id}`),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);
