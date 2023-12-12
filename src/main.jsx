import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componenents/Home/Home.jsx'
import Main from './Main/Main.jsx'
import About from './componenents/About/About.jsx'
import Login from './componenents/Login/Login.jsx'
import Career from './componenents/Career/Career.jsx';
import Profile from './componenents/Profile/Profile.jsx';

// const router= createBrowserRouter ([
//   {
//     path: '/',
//     element: <Main></Main>,
//     Children : [{
//       path : '/',
//       element: <Home> </Home>,
      
//     },
//     {
//       path: '/about',
//       element: <About></About>
//     },
//     {
//       path: '/login',
//       element: <Login> </Login>
//     }
//   ]
//   }
  

// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path: '/',
      element: <Home> </Home>
    },
  
   {
    path:"/about",
    element: <About> </About>
   },
   {
    path:"/career",
    element: <Career> </Career>
   },
   {
    path: "/profile",
    element: <Profile> </Profile>
   },
   {
    path:"/login",
    element: <Login> </Login>
   }
  
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
