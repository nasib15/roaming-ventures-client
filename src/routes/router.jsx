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
import Bangladesh from "../pages/Bangladesh";
import Indonesia from "./../pages/Indonesia";
import Vietnam from "./../pages/Vietnam";
import Cambodia from "./../pages/Cambodia";
import Malaysia from "../pages/Malaysia";
import Thailand from "../pages/Thailand";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alltourist",
        element: <AllTourist></AllTourist>,
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
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatedetails/:id",
        element: (
          <PrivateRoute>
            <UpdateDetails></UpdateDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/countries/Bangladesh",
        element: <Bangladesh></Bangladesh>,
      },
      {
        path: "/countries/Indonesia",
        element: <Indonesia></Indonesia>,
      },
      {
        path: "/countries/Vietnam",
        element: <Vietnam></Vietnam>,
      },
      {
        path: "/countries/Thailand",
        element: <Thailand></Thailand>,
      },
      {
        path: "/countries/Malaysia",
        element: <Malaysia></Malaysia>,
      },
      {
        path: "/countries/Cambodia",
        element: <Cambodia></Cambodia>,
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
