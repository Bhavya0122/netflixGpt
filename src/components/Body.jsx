import React ,{useEffect} from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Body = () => {
  const appRoute = createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  ]);

    return (
    <div>
    <RouterProvider router={appRoute}/>
    </div>
  )
}

export default Body;