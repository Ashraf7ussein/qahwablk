import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import MenuEditor from "../components/MenuEditor";
import { useEffect, useState } from "react";
import MerchEditor from "../components/merchEditor";

import LocationsEditor from "../components/LocationsEditor";
import { useTranslation } from "react-i18next";

const AdminPage = () => {
  const navigate = useNavigate();
  const [activeEditor, setActiveEditor] = useState<
    "menu" | "merch" | "locations"
  >("menu");
  const { t } = useTranslation();

  // Authentication guard
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="bg-white flex flex-col lg:flex-row">
      <aside className="w-full lg:w-64 bg-gray-100 p-6 border-r pt-35">
        <h2 className="text-xl font-bold mb-6 text-gray-900">
          {t("adminPanel")}
        </h2>
        <button
          onClick={() => setActiveEditor("menu")}
          className={`text-gray-900 w-full text-start px-4 py-2 mb-2 rounded hover:bg-gray-200 ${
            activeEditor === "menu" ? "bg-gray-300 font-semibold" : ""
          }`}
        >
          {t("menuEditor")}
        </button>

        <button
          onClick={() => setActiveEditor("merch")}
          className={`text-gray-900 w-full text-start px-4 py-2 mb-2 rounded hover:bg-gray-200 ${
            activeEditor === "merch" ? "bg-gray-300 font-semibold" : ""
          }`}
        >
          {t("merchEditor")}
        </button>

        <button
          onClick={() => setActiveEditor("locations")}
          className={`text-gray-900 w-full text-start px-4 py-2 mb-2 rounded hover:bg-gray-200 ${
            activeEditor === "locations" ? "bg-gray-300 font-semibold" : ""
          }`}
        >
          {t("locationsEditor")}
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
