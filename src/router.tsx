import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const ErrorPage = lazy(() => import("./pages/errorPage"));
const Layout = lazy(() => import("./components/layout"));
const Home = lazy(() => import("./pages/home"));
const Country = lazy(() => import("./pages/country"));

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
        {
          path: "/:slug/:ccn3",
          element: <Country />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
