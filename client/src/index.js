import React from "react";
import ReactDOM from "react-dom";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./error-page";

import App from "./App";
import PostExpand, { loader as postLoader } from "./components/PostExpand";

import "./index.css";
import PApp from "./perA";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "post/:postId/:user/:content",
    element: <PostExpand />,
  },
  {
    path: "/per",
    element: <PApp />,
  },
]);
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
