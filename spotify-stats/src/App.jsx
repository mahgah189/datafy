import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "/src/pages/layouts/Layout/Layout";
import Home from "/src/pages/Home/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
