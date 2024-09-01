import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { useEffect } from "react";
import { Home, NotFound } from "./pages";

import { Scroll } from "./animation";

// this is just for dome paages you want to repeat same component
const Root = () => {
  return (
    <div>
      {/* here we might add navbar */}
      <ScrollRestoration />
      <Outlet />
      {/* here maybe footer, it will show in all the pages */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  // we can create another route object here if we don't want the <Root/> to affect it
]);
export default function App() {
  useEffect(() => {
    Scroll();
  }, []);
  return (
    <>
      <Outlet />
      <RouterProvider router={router} />
    </>
  );
}
