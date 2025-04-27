import { Link } from "react-router-dom";
import video from "../assets/video.mp4";
import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-4">
        <h1 className="secondary-font underline decoration-[0.5px] underline-offset-[12px] text-white font-bold text-6xl md:text-8xl tracking-wide drop-shadow-lg">
          qahwaBlk
        </h1>
        <span className="text-white uppercase tracking-[0.25em] text-sm md:text-base mt-4 drop-shadow-md">
          Since 2019
        </span>
        <p className="mt-10 text-white text-base md:text-lg max-w-xl drop-shadow-md leading-relaxed">
          Delicious coffee, every day, for everyone, at a reasonable price.
        </p>
        <Link
          to="/menu"
          className="group px-6 py-3 mt-8 border-1 text-black flex items-center gap-5 rounded-full hover:bg-gray-100 cursor-pointer transition duration-300"
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
