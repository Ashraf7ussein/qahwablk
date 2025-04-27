import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import LocationsPage from "./LocationsPage";
import Layout from "./Layout";
import MerchPage from "./MerchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
      { path: "merchandise", element: <MerchPage /> },
      { path: "locations", element: <LocationsPage /> },
    ],
  },
]);

export default router;
