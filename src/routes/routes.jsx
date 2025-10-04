import MainLayouts from "@/Layouts/MainLayouts";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    // ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
