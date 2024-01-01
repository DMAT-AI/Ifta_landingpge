import React from 'react';
import VideoPage from './pages/VideoPage.jsx';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path:"/video-section",
    element:<VideoPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
