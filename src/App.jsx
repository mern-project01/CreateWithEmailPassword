import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SignUp from "./componet/signUp/SignUp";
import Main from "./componet/Main/Main";
import Home from "./componet/Home/Home";
import Login from "./componet/Login/Login";
import PrivetRout from "./componet/PrivetRout/PrivetRout";
import About from "./componet/About/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },

        {
          path: "/about",
          element: (
            <PrivetRout>
              <About></About>
            </PrivetRout>
          ),
        },
        {
          path: "/singup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
