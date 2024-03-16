import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter , RouterProvider , Navigate} from "react-router-dom"
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import Products from './routes/Products.jsx'

const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {path:"" , element: <Home/>},
    {path:"/Products" , element:<Products/>}
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/> 
  </React.StrictMode>,
)
