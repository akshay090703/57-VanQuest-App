import "./server";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Login from "./Components/LoginPage/Login";
import Home from "./Components/HomePage";
import About from "./Components/AboutPage/AboutPage";
import Vanslist, {
  loader as vansLoader,
} from "./Components/VansPage/VanslistPage";
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
import Error from "./Components/UI/Error";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route
          path="vans"
          element={<Vanslist />}
          errorElement={<Error />}
          loader={vansLoader}
        />
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
    )
  );

  return <RouterProvider router={router} />;
}
