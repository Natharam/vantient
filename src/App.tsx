import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ProductDetail from "./pages/ProductDetail";
import "./App.css";
import HomePage from "./pages/home";
import Header from "./components/Header";
import Subscribe from "./components/Subscribe";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<ProductDetail />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
