import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootLayout from "../Layouts/RootLayout";
import AllApps from "../Pages/AllApps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import PageError from "../Components/PageError";
import AppErrorPage from "../Components/AppErrorPage";
import CoustomLoader from "../Components/CoustomLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <PageError />,
    hydrateFallbackElement: CoustomLoader,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: AllApps,
        errorElement: <AppErrorPage />,
      },
      {
        path: "/installation",
        Component: Installation,
        errorElement: <AppErrorPage />,
      },
      {
        path: "/apps/:id",
        Component: AppDetails,
        errorElement: <AppErrorPage />,
      },
      {
        path: "/installed",
        Component: Installation,
        errorElement: <AppErrorPage />,
      },
    ],
  },
]);
