import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import shop from "../assets/shop.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <img src={shop} className="object-cover w-full h-full" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Text and button content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-4">
        <h1 className="underline decoration-[0.5px] underline-offset-[12px] text-white font-semibold text-6xl md:text-8xl tracking-wide drop-shadow-lg">
          QahwaBlk
        </h1>
        <span className="text-white uppercase tracking-[0.25em] text-sm md:text-base mt-4 drop-shadow-md">
          Since 2019
        </span>
        <p className="mt-10 text-white text-base md:text-lg max-w-xl drop-shadow-md leading-relaxed">
          Delicious coffee, every day, for everyone, at a reasonable price.
        </p>
        <Link
          to="/menu"
          className="group px-6 py-3 bg-white mt-8 border-1 text-black flex items-center gap-5 rounded-full cursor-pointer transition duration-300 hover:bg-text hover:text-white"
        >
          <span>See Menu</span>
          <IoMdArrowForward
            size={24}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
