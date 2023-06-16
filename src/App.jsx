import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Components/HomePage";
import About from "./Components/AboutPage/AboutPage";
import Vanslist from "./Components/VansPage/VanslistPage";
import Layout from "./Components/Layout/Layout";

import "./server";
import Vans from "./Components/VansPage/VansPage";
import Dashboard from "./Components/Host/HostDashboard";
import Income from "./Components/Host/Income";
import Reviews from "./Components/Host/ReviewsPage";
import HostLayout from "./Components/Layout/HostLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vanslist />} />
          <Route path="/vans/:id" element={<Vans />} />
          <Route path="/host" element={<HostLayout />}>
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
