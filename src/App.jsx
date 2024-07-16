import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

const App = () => {
  return (
    <>
      <div className="app">
        <Outlet />
      </div>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
