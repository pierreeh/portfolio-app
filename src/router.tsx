import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/errorPage";

const Home = lazy(() => import("./pages/home"));
const Layout = lazy(() => import("./components/layout"));

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: (
        <Layout>
          <ErrorPage />
        </Layout>
      ),
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
