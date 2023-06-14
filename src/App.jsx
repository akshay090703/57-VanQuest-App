import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Components/HomePage";
import About from "./Components/AboutPage";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
