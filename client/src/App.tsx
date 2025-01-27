import React from 'react';
import { createBrowserRouter, BrowserRouter, Routes, Route, Link, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./Components/Layout/index"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import ScrollBox from './Components/ScrollBox';


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;