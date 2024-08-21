import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  // ScrollRestoration,
} from "react-router-dom";
import { useEffect } from "react";
import { Home, NotFound } from "./pages";
// import { Scroll } from "./animation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  useEffect(() => {
    // Scroll;
  }, []);
  return (
    <>
      <Outlet />
      <RouterProvider router={router} />
    </>
  );
}
