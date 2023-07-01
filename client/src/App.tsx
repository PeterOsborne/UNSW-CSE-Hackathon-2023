import React from 'react';
import logo from './logo.svg';
import { createBrowserRouter, BrowserRouter, Routes, Route, Link, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';

import Layout from "./Components/Layout/index"
import Home from "./Pages/Home/index"

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
