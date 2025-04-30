import { useTranslation } from "react-i18next";

const LocationsEditor = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white text-black p-6 pt-20">
      <h2 className="text-2xl font-medium mb-6 text-center pt-10">
        {t("locationsEditor")}
      </h2>
    </div>
  );
};

export default LocationsEditor;
