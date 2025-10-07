import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootLayout from "../Layouts/RootLayout";
import errorPage from "../Pages/errorPage";
import AllApps from "../Pages/AllApps";
import Installation from "../Pages/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: errorPage,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: AllApps,
      },{
        path:'/installation',
        Component:Installation,
      }
    ],
  },
]);
