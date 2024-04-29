import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllTourist from "../pages/AllTourist";
import AddTourist from "../pages/AddTourist";
import MyList from "../pages/MyList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails";
import UpdateDetails from "../pages/UpdateDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/touristspots"),
      },
      {
        path: "/alltourist",
        element: <AllTourist></AllTourist>,
        loader: () => fetch("http://localhost:3000/touristspots"),
      },
      {
        path: "/addtourist",
        element: (
          <PrivateRoute>
            <AddTourist></AddTourist>
          </PrivateRoute>
        ),
      },
      {
        path: "/mylist",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/touristspots"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/touristspots/${params.id}`),
      },
      {
        path: "/updatedetails/:id",
        element: (
          <PrivateRoute>
            <UpdateDetails></UpdateDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/touristspots/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
