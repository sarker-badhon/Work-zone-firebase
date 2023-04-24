import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Layout/Main.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Blog from './components/Blog.jsx'
import Contacts from './components/Contacts.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import AuthProvider from './components/AuthProvider/AuthProvider.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/blog",
          element:<PrivateRoute><Blog></Blog></PrivateRoute>
        },
        {
          path:"/contacts",
          element:<Contacts></Contacts>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
      ]
    }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router = {router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
