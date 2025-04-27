import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import ProductsPage from "./ProductsPage";
import LocationsPage from "./LocationsPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "locations", element: <LocationsPage /> },
    ],
  },
]);

export default router;
