import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter ,  RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Singlestudent from './pages/Singlestudent.jsx'
import Contact from './pages/Contact.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';











// THERE ARE THREE TYPES OF ROUTER

// PROTECTED ROUTE
// DYNAMIC ROUTE
// NESTED ROUTE



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "",
            element: <h1>Person 1</h1>
          },
          {
            path: "person2",
            element: <h1>Person 2</h1>
          },
          {
            path: "person3",
            element: <h1>Person 3</h1>
          },
        ]
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "service",
        element: <Services />
      },
      {
        path: "singleStudent/:id",
        element: <Singlestudent />
      },
      {
        path: "*",
        element: <h1>Not found!</h1>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}>

  </RouterProvider>

)
