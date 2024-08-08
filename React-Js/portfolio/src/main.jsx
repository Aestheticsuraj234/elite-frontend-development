
import ReactDOM from 'react-dom/client'
import "./global.css"
import { GlobalProvider } from './context/GlobalContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from "./Layout"
import User from './User'
import Github from './Github'




const router = createBrowserRouter([
  {
    path:"",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/> 
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/user/:id",
        element:<User/>
      },
      {
        path:"/github",
        element:<Github/>
      }
    ]

  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
 
  <GlobalProvider>
  <RouterProvider router={router} />
  </GlobalProvider>


)
