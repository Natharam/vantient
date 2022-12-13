import React, { lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Subscribe from "./components/Subscribe";
import Login from "./components/Login";
import "./App.css";
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const HomePage = lazy(() => import("./pages/Home"));

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
