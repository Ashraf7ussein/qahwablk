import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import shop from "../assets/shop.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <img src={shop} className="object-cover w-full h-full" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Text and button content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-4">
        <h1 className="underline decoration-[0.5px] underline-offset-[12px] text-white font-semibold text-6xl md:text-8xl tracking-wide drop-shadow-lg">
          {t("qahwablk")}
        </h1>

        <span className="text-white uppercase text-xl  mt-4 drop-shadow-md">
          {t("since2019")}
        </span>
        <p className="mt-10 text-white text-base md:text-lg max-w-xl drop-shadow-md leading-relaxed">
          {t("deliciousCoffee")}
        </p>
        <Link
          to="/menu"
          className="group px-6 py-3 bg-white mt-8 border-1 text-black flex items-center gap-5 rounded-full cursor-pointer transition duration-300 hover:bg-text hover:text-white"
        >
          <span>{t("seeMenu")}</span>
          <IoMdArrowForward
            size={24}
            className={`transition-transform duration-300  ${
              i18n.language === "ar"
                ? "rotate-180 group-hover:-translate-x-2"
                : "group-hover:translate-x-2"
            }`}
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
