import React, { lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import "./App.css";
import AddProduct from "./components/AddProduct";
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const HomePage = lazy(() => import("./pages/home"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<ProductDetail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
