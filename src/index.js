import React from "react";
import  ReactDOM  from "react-dom/client";
import appRouter from "./components/App";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);