import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import ShimmerUI from "./components/ShimmerUI";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";

// Redux
import { Provider } from "react-redux";
import store from "./utils/store";

const Instamart = lazy(() => import("./components/Instamart"));
// In ondemand loading, on render, react will suspend loading because the code is not there, It will give
// error initially and reroute to errorElement
// To handle this we use Suspense

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Rachit",
    email: "rachitshukla08@gmail.com",
  });

  // MAKE API CALL AND GET THE USER NAME AND EMAIL and update user in useEffect

  // Never lazy load the component inside another component as it will load afer every render cycle
  // const About = lazy(() => import("./components/About"));
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        {/* Header is common to all components */}
        <Header />
        {/* Outlet */}
        <Outlet />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            {/* Fallback = component to load while instamart will load */}
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
