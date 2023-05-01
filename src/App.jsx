import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import NewUserProduct from "./Pages/New/NewUserProduct";
import { productInputs, userInputs } from "./formDummtData";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/users",
  //     element: <List />,
  //   },
  //   {
  //     path: "/users/:id",
  //     element: <Single />,
  //   },
  //   {
  //     path: "users/new",
  //     element: <NewUserProduct inputs={userInputs} />,
  //   },
  //   {
  //     path: "/products",
  //     element: <List />,
  //   },
  //   {
  //     path: "/products/:productId",
  //     element: <List />,
  //   },
  // ]);
  return (
    <>
      {/* <RouterProvider router={router} /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<NewUserProduct inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<NewUserProduct inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
