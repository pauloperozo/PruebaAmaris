//////////////////////////////////////////////////////////////////
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//////////////////////////////////////////////////////////////////
import Index from './router'
import Home from './router/home'
import Products from './router/products'
import Services from './router/services'
import Sections from './router/sections'
import Users from './router/users'
//////////////////////////////////////////////////////////////////
import axios from 'axios'
import './index.css'
//////////////////////////////////////////////////////////////////
/*Config Axios */
axios.defaults.baseURL = localStorage.getItem("baseURL")
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
//////////////////////////////////////////////////////////////////
const router = createBrowserRouter([
  {
      path:'/',
      element: <Index/>
  },
  {
      path:'/home',
      element:<Home/>
  },
  {
    path:'/services',
    element:<Services/>
  },
  {
    path:'/products',
    element:<Products/>
  },
  {
    path:'/sections',
    element:<Sections/>
  },
  {
    path:'/users',
    element:<Users/>
  }
])
//////////////////////////////////////////////////////////////////
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
//////////////////////////////////////////////////////////////////