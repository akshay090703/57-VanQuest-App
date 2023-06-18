import "./server";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/HomePage";
import About from "./Components/AboutPage/AboutPage";
import Vanslist from "./Components/VansPage/VanslistPage";
import Layout from "./Components/Layout/Layout";
import Vans from "./Components/VansPage/VansPage";
import Dashboard from "./Components/Host/HostDashboard";
import Income from "./Components/Host/Income";
import Reviews from "./Components/Host/ReviewsPage";
import HostLayout from "./Components/Layout/HostLayout";
import HostVans from "./Components/Host/HostVans";
import HostVanDetail from "./Components/Host/HostVanDetail";
import HostVanPhotos from "./Components/Host/HostVanPhotos";
import HostVanPricing from "./Components/Host/HostVanPricing";
import HostVanInfo from "./Components/Host/HostVanInfo";
import NotFound from "./Components/UI/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vanslist />} />
          <Route path="vans/:id" element={<Vans />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
