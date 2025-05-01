import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Merch {
  arName: string;
  enName: string;
  price: number;
  _id: string;
}

const MerchPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [merch, setMerch] = useState<Merch[]>([]);

  useEffect(() => {
    axios
      .get("https://qahwablk-backend-1.onrender.com/merch")
      .then((res) => {
        console.log(res.data);
        setMerch(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 mt-30">
      <h2 className="text-2xl font-bold mb-10 text-center">
        {t("merchandise")}
        <div>
          {merch.map((merchItem) => (
            <div
              className="flex justify-between items-center p-4"
              key={merchItem._id}
            >
              <p className="text-lg">
                {currentLanguage === "ar" ? merchItem.arName : merchItem.enName}
              </p>
              <p className="text-lg">
                {merchItem.price.toFixed(2)} {t("jod")}
              </p>
            </div>
          ))}
        </div>
      </h2>
    </div>
  );
};

export default MerchPage;
