import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Recipe from "./pages/recipe";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
