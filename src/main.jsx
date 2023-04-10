import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter, json } from 'react-router-dom'
import Statistics from './components/Statistics/Statistics'
import Applied from './components/Applied/Applied'
import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'
import Details from './components/Details/Details'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/details',
        element: <Details></Details>,
        loader: async() => fetch('featured.json'),
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
