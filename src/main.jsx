import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import IndiService from './pages/IndiService.jsx';
import Home from './pages/Home.jsx'
import FormComp from './Components/Form/index.jsx'
import  './utils/i18Next.js'

const router =  createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children :[
      {
        path:'/service/:serviceId',
        element : <IndiService/>
      },
      {
        path:'/',
        element : <Home/>
      },
      {
        path:'/form',
        element :  <FormComp/>
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
 
<StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,


)
