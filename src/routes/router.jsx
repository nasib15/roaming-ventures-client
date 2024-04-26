import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllTourist from "../pages/AllTourist";
import AddTourist from "../pages/AddTourist";
import MyList from "../pages/MyList";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        element: <AddTourist></AddTourist>,
      },
      {
        path: "/mylist",
        element: <MyList></MyList>,
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
