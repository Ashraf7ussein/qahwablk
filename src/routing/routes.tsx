import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import LocationsPage from "./LocationsPage";
import Layout from "./Layout";
import MerchPage from "./MerchPage";
import CareersPage from "./CareersPage";
import ContactUsPage from "./ContactUsPage";
import AdminPage from "./AdminPage";
import LoginPage from "./LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
      { path: "merchandise", element: <MerchPage /> },
      { path: "locations", element: <LocationsPage /> },
      { path: "careers", element: <CareersPage /> },
      { path: "contactUs", element: <ContactUsPage /> },
      { path: "admin", element: <AdminPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);

export default router;
