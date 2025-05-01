import careem from "../assets/careem.webp";
import talabat from "../assets/talabat.webp";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Order = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });

    //  destroy AOS on component unmount
    return () => AOS.refresh();
  }, []);
  return (
    <section className="py-10 border-t">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
          <a
            data-aos="fade-right"
            href="http://careem.me/QahwaBLK1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 bg-[#00E784] hover:bg-[#00E784]/70 focus:outline-none font-semibold rounded-lg text-lg 
              px-6 py-3 flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-300 hover:cursor-pointer"
          >
            {t("orderFrom")} <img src={careem} alt="Careem" className="h-5" />
          </a>

          <a
            data-aos="fade-left"
            href="https://www.talabat.com/jordan/qahwa-blk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/70 focus:outline-none font-semibold rounded-lg text-lg 
              px-6 py-3 flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-300 hover:cursor-pointer"
          >
            {t("orderFrom")} <img src={talabat} alt="Talabat" className="h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Order;
