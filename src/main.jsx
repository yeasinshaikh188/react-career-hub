import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>, 
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/Applied",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:"/job/:id",
        element:<JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
