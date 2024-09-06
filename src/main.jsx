import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import About from './Components/About/About.jsx';
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/ContactUs.jsx';
import SignIn from './Components/SignIn'; // Correct path for SignIn component
import Signup from './Components/Signup'; // Correct path for SignUp component
// import Header from './components/Header'; // Header component

// Creating the routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
