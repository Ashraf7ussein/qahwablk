import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLocationArrow } from "react-icons/fa6";

interface Locations {
  arName: string;
  enName: string;
  location: string;
  _id: string;
}

const LocationsPage = () => {
  const { t } = useTranslation();
  const [locations, setLocations] = useState<Locations[]>([]);

  useEffect(() => {
    axios
      .get("https://qahwablk-backend-1.onrender.com/merch")
      .then((res) => {
        console.log(res.data);
        setLocations(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full mt-30 max-w-screen-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {t("ourLocations")}
      </h2>
      <div className="flex flex-col gap-4">
        {locations.map((loc, index) => (
          <a
            key={index}
            href={loc.location}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "rgb(42, 50, 53)" }}
            className="flex items-center justify-between p-4 rounded-lg duration-300 hover:scale-105 transition w-full text-sm sm:text-base"
          >
            <span className="truncate">{loc.enName}</span>
            <FaLocationArrow className="text-white flex-shrink-0 ml-2" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default LocationsPage;
