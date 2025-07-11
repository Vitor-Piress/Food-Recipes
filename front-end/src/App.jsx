import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Recipe from "./pages/recipe";
import Header from "./components/Header";
import Categories from "./pages/categories";
import User from "./pages/user";
import Chefs from "./pages/chefs";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/user" element={<User />} />
        <Route path="/chefs" element={<Chefs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
