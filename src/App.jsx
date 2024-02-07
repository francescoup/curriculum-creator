import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Template from "./pages/Template";
import Form from "./pages/Form";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/template",
    element: <Template />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
