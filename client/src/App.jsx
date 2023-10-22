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

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
