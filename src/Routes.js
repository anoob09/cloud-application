import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Layout from "./components/layout/Layout";  
  import HomeLayout from "./components/layout/home/HomeLayout";
import Email from "./components/layout/email/Email";

  function Routes() {
    const router = createBrowserRouter([
      {
        // parent route component
        element: <Layout />,
        // child route components
        children: [
          {
            path: "/",
            element: <HomeLayout />,
          },
          // other pages....
          {
            path: "/email",
            element: <Email />,
          },
        ],
      },
    ])
  
    return (
        <RouterProvider router={router} />
    )
  }
  
  export default Routes;