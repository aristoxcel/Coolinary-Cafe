import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Providers/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
import { Toaster } from 'react-hot-toast'
// import { ScrollRestoration } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
        <RouterProvider router={router}/>
        <Toaster/>
   </AuthProvider>
    {/* <ScrollRestoration /> */}

  </React.StrictMode>,
)
