import "./server";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

import Login, { loader as loginLoader } from "./Components/LoginPage/Login";
import Home from "./Components/HomePage";
import About from "./Components/AboutPage/AboutPage";
import Vanslist, {
  loader as vansLoader,
} from "./Components/VansPage/VanslistPage";
import Layout from "./Components/Layout/Layout";
import Vans, {
  loader as vanDetailLoader,
} from "./Components/VansPage/VansPage";
import Dashboard from "./Components/Host/HostDashboard";
import Income from "./Components/Host/Income";
import Reviews from "./Components/Host/ReviewsPage";
import HostLayout from "./Components/Layout/HostLayout";
import HostVans, { loader as hostVansLoader } from "./Components/Host/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./Components/Host/HostVanDetail";
import HostVanPhotos from "./Components/Host/HostVanPhotos";
import HostVanPricing from "./Components/Host/HostVanPricing";
import HostVanInfo from "./Components/Host/HostVanInfo";
import NotFound from "./Components/UI/NotFoundPage";
import Error from "./Components/UI/Error";
import requireAuth from "./utils";
import { loader } from "./Components/LoginPage/Login";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} loader={loginLoader} />
        <Route
          path="vans"
          element={<Vanslist />}
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<Vans />}
          loader={vanDetailLoader}
          errorElement={<Error />}
        />

        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            loader={async () => await requireAuth()}
            errorElement={<Error />}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async () => await requireAuth()}
            errorElement={<Error />}
          />
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async () => await requireAuth()}
            errorElement={<Error />}
          />
          <Route
            path="vans"
            element={<HostVans />}
            loader={hostVansLoader}
            errorElement={<Error />}
          />
          <Route
            path="vans/:id"
            loader={hostVanDetailLoader}
            element={<HostVanDetail />}
          >
            <Route
              index
              element={<HostVanInfo />}
              loader={async () => await requireAuth()}
              errorElement={<Error />}
            />
            <Route
              path="pricing"
              element={<HostVanPricing />}
              loader={async () => await requireAuth()}
              errorElement={<Error />}
            />
            <Route
              path="photos"
              element={<HostVanPhotos />}
              loader={async () => await requireAuth()}
              errorElement={<Error />}
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
