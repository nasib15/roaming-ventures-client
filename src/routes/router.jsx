import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import AllTourist from "../components/AllTourist";
import AddTourist from "../components/AddTourist";
import MyList from "../components/MyList";

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
    ],
  },
]);

export default router;
