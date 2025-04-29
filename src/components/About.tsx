import { useTranslation } from "react-i18next";
import twoCups from "../assets/twoCups.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const { t, i18n } = useTranslation();

  const textAlignment = i18n.language === "ar" ? "text-right" : "text-left";
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });

    //  destroy AOS on component unmount
    return () => AOS.refresh();
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 max-w-6xl mx-auto border-b-1"
      >
        <div data-aos="fade-up" className={`space-y-6 ${textAlignment}`}>
          <h2 className="text-3xl font-bold">{t("aboutQahwaBlk")}</h2>
          <p className="leading-relaxed">{t("aboutText")}</p>
        </div>
        <img
          data-aos="fade-up"
          src={twoCups}
          className="w-100 md:w-80 rounded-lg shadow-lg object-cover"
        />
      </div>
    </>
  );
};

export default About;
