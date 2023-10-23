import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { HomeLayout, LandingPage, Blog } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children:[
      {
        index: true,
        element: <LandingPage/>
      },
      {
        path: "blog",
        element: <Blog/>
      }
    ]
  }
])
export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
