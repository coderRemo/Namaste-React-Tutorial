import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery"; ==> not required as we are implementing lazy loading

// Lazy Loading - we can do this for other pages also
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet /> {/* this gets replaced by children*/}
    </div>
  );
};

// creating router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // children - to intact the header if other links(about, contact, etc.) are accessed
    // this
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
        path: "/restaurants/:resId", // dynamic id
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery", // dynamic id
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />, // shows error message it home page is incorectly typed
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />); // used before using router configuration
root.render(<RouterProvider router={appRouter} />);
