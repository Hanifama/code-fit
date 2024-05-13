import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { ThemeProvider } from "@material-tailwind/react";

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register.jsx'
import ErrorPage from './Pages/errorpage.jsx'
import Navbar from './components/Elements/Navbar/Index.jsx'
import Header from './components/Elements/Header/Index.jsx'
import { MembersTable } from './components/Elements/Table/Table.jsx';


const router = createBrowserRouter([
  {
    path : "/home",
    element : <Navbar/>,
    errorElement : <ErrorPage/>
  },
  {
    path : "/login",
    element : <LoginPage/>
  },
  {
    path : "/register",
    element : <RegisterPage/>
  },
  {
    path : "/Table",
    element : <MembersTable/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
