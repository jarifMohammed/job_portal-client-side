import {
    createBrowserRouter,

  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
        path:"/",
        element:<HomePage></HomePage>
        },
        {
            path: 'register',
            element:<Register></Register>
        },
        {
          path:'SignIn',
          element:<SignIn></SignIn>
        }
      ]
    },
  ]);
  export default  router