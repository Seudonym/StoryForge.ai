import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Landing from './landing';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Landing/>
    ),
    

    
  },
  {
    path:"ai",
    element:(
      <App/>
    )
  },
  
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);



