import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import MenuEditor from "../components/MenuEditor";
import LocationsEditor from "../components/LocationsEditor";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import MerchEditor from "../components/MerchEditor";

const AdminPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeEditor, setActiveEditor] = useState<
    "menu" | "merch" | "locations"
  >("menu");
  const [authChecked, setAuthChecked] = useState(false);

  // Authentication guard
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      } else {
        setAuthChecked(true);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:");
    }
  };

  if (!authChecked) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700">
        {t("loading")}...
      </div>
    );
  }

  return (
    <div className="bg-white flex flex-col lg:flex-row min-h-screen">
      <aside className="w-full lg:w-64 bg-gray-100 p-6 border-r">
        <h2 className="text-xl font-bold mb-6 text-gray-900">
          {t("adminPanel")}
        </h2>

        {/* Navigation Buttons */}
        <button
          onClick={() => setActiveEditor("menu")}
          className={`text-gray-900 w-full text-start px-4 py-2 mb-2 rounded hover:bg-gray-200 ${
            activeEditor === "menu" ? "bg-gray-300 font-semibold" : ""
          }`}
          aria-pressed={activeEditor === "menu"}
        >
          {t("menuEditor")}
        </button>

        <button
          onClick={() => setActiveEditor("merch")}
          className={`text-gray-900 w-full text-start px-4 py-2 mb-2 rounded hover:bg-gray-200 ${
            activeEditor === "merch" ? "bg-gray-300 font-semibold" : ""
          }`}
          aria-pressed={activeEditor === "merch"}
        >
          {t("merchEditor")}
        </button>

        <button
          onClick={() => setActiveEditor("locations")}
          className={`text-gray-900 w-full text-start px-4 py-2 mb-2 rounded hover:bg-gray-200 ${
            activeEditor === "locations" ? "bg-gray-300 font-semibold" : ""
          }`}
          aria-pressed={activeEditor === "locations"}
        >
          {t("locationsEditor")}
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          {t("logout")}
        </button>
      </aside>

      <main className="flex-1 p-6 overflow-auto">
        {activeEditor === "menu" && <MenuEditor />}
        {activeEditor === "merch" && <MerchEditor />}
        {activeEditor === "locations" && <LocationsEditor />}
      </main>
    </div>
  );
};

export default AdminPage;
