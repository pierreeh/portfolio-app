import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/errorPage";

const Home = lazy(() => import("./pages/home"));
const RestCountriesLayout = lazy(
  () => import("./components/RestCountries/restCountriesLayout")
);
const RestCountries = lazy(() => import("./pages/restCountries/restCountries"));

export default function Router() {
  const router = createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
        },
        {
          element: <RestCountriesLayout />,
          children: [
            {
              path: "/where-in-the-world",
              element: <RestCountries />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
