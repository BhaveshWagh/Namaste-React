import React from "react";
import ReactDOM from "react-dom/client";

import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import About from "../components/About";
import Error from "../components/Error";
import RestaurantMenu from "../components/RestaurantMenu";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "../components/Contact";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
