import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from './Pages/Login/Login';
import List from './Pages/List/List';
import Single from './Pages/Single/Single';
import NewUserProduct from './Pages/New/NewUserProduct';
import { userInputs } from './formDummtData';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/users",
      element: <List/>,
    },
    {
      path: "/users/:id",
      element: <Single/>,
    },
    {
      path: "/new",
      element: <NewUserProduct inputs={userInputs}/>,
    },
    {
      path: "/products",
      element: <List/>,
    },
    {
      path: "/products/:productId",
      element: <List/>,
    },
    
  ]);
  return <>
  <RouterProvider router={router} />
  </>;
}

export default App;
