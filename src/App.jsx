import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Components/HomePage";
import About from "./Components/AboutPage";
import Navbar from "./Components/Navbar";
import Vanslist from "./Components/VanslistPage";

import "./server";
import VanTemplate from "./Components/UI/VanPageTemplate";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vanslist />} />
        <Route path="/vans/:id" element={<VanTemplate />} />
      </Routes>
    </BrowserRouter>
  );
}
