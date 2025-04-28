import Card from "./Card";
import bottle from "../assets/bottle.png";
import coffeeBag from "../assets/coffeeBag.png";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Merchandise = () => {
  const products = [
    {
      img: bottle,
      name: "Khalta 340g",
      description:
        "Make your own drink with Spanish Pistachio or Hazelnut Khalta.",
    },
    {
      img: coffeeBag,
      name: "Coffee Bean 250g",
      description: "Fresh Colombian coffee beans, rich and aromatic.",
    },
    {
      img: "hoddies",
      name: "Hoodies",
      description: "",
    },
  ];
  const { t, i18n } = useTranslation();

  return (
    <section className="p-8 flex justify-center items-center flex-col">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {t("merchandise")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card key={index} product={product} index={index} />
        ))}
      </div>

      <Link
        to="/merchandise"
        className="group px-6 py-3 bg-white mt-8 border-1 text-black flex items-center gap-5 rounded-full cursor-pointer transition duration-300 hover:bg-text hover:text-white"
      >
        <span>{t("seeAll")}</span>
        <IoMdArrowForward
          size={24}
          className={`transition-transform duration-300 group-hover:translate-x-2 ${
            i18n.language === "ar" ? "rotate-180" : ""
          }`}
        />
      </Link>
    </section>
  );
};

export default Merchandise;
