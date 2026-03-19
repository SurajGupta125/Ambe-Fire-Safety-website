import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Error } from "./Error";
import { AppLayout } from "./AppLayout";
import { Home } from "./Pages/home";
import { About } from "./Pages/about";
import { Gallery } from "./Pages/gallery";
import { Addmission } from "./Pages/addmission";
import { Contact } from "./Pages/contact";
import { CourseDetails } from "./Pages/CourseDetails";
import { Courses } from "./Pages/Courses";
import "./index.css"

const App = () => {
  const router = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "/cources",
        element: <Courses />
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />
      },
      {
        path: "gallery",
        element: <Gallery />
      },
      {
        path: "addmission",
        element: <Addmission />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }])
  return <RouterProvider router={router}></RouterProvider>
}
export default App;
