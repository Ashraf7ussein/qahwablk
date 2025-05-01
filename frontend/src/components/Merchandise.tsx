import mug from "../assets/mug.webp";
import bottles from "../assets/bottles.webp";
import deckSet from "../assets/deckSet.webp";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Merchandise = () => {
  const { t, i18n } = useTranslation();

  const products = [
    {
      img: mug,
      name: t("mug"),
      description: t("mugDesc"),
    },
    {
      img: bottles,
      name: t("bottles"),
      description: t("bottlesDesc"),
    },
    {
      img: deckSet,
      name: t("deckSet"),
      description: t("deckSetDesc"),
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in",
    });

    //  destroy AOS on component unmount
    return () => AOS.refresh();
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="p-8 flex justify-center items-center flex-col"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        {t("merchandise")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {product.name}
            </h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>

      <Link
        to="/merchandise"
        className="group px-6 py-3 bg-white mt-8 border-1 text-black flex items-center gap-5 rounded-full cursor-pointer transition duration-300 hover:bg-text hover:text-white"
      >
        <span>{t("seeAll")}</span>
        <IoMdArrowForward
          size={24}
          className={`transition-transform duration-300  ${
            i18n.language === "ar"
              ? "rotate-180 group-hover:-translate-x-2"
              : "group-hover:translate-x-2"
          }`}
        />
      </Link>
    </section>
  );
};

export default Merchandise;
