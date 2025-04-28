import { useTranslation } from "react-i18next";
import shop from "../assets/shop.jpg";

const About = () => {
  const { t, i18n } = useTranslation();

  // Conditionally set text alignment based on language
  const textAlignment = i18n.language === "ar" ? "text-right" : "text-left";

  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 max-w-6xl mx-auto border-b-1">
        <div className={`space-y-6 ${textAlignment}`}>
          <h2 className="text-3xl font-bold">{t("aboutQahwaBlk")}</h2>
          <p className="leading-relaxed">{t("aboutText")}</p>
        </div>
        <img
          src={shop}
          alt="QahwaBlk shop"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />
      </div>
    </>
  );
};

export default About;
