import video from "../assets/video.mp4";

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
      <div className="absolute top-20 md:top-32 left-0 w-full flex justify-center items-center z-10 flex-col">
        <h1 className="text-7xl md:text-9xl secondary-font text-white underline decoration-[0.5px] underline-offset-[12px]">
          qahwaBlk
        </h1>
        <span className="secondary-font">Since 2019</span>
      </div>
    </section>
  );
};

export default Hero;
