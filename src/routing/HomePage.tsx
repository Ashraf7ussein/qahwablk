import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import careem from "../assets/careem.png";
import talabat from "../assets/talabat.webp";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      {/* Order From Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <p className="text-2xl font-semibold text-gray-800 mb-6">
            Order from
          </p>
          <div className="flex justify-center items-center gap-8">
            <button
              type="button"
              className="text-gray-900 bg-[#00E784] hover:bg-[#00E784]/50 focus:outline-none font-medium rounded-lg text-lg 
                  gap-2 px-5 py-2.5 inline-flex items-center transition-all duration-300 hover:cursor-pointer"
            >
              <a href="https://www.talabat.com" target="_blank"></a>
              Buy with{"  "}
              <img src={careem} alt="Talabat" className="h-5" />
            </button>
            <button
              type="button"
              className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/50 focus:outline-none font-medium rounded-lg text-lg 
                  gap-1 px-5 py-2.5 inline-flex items-center transition-all duration-300 hover:cursor-pointer"
            >
              <a href="https://www.talabat.com" target="_blank"></a>
              Buy with{"  "}
              <img src={talabat} alt="Talabat" className="h-7" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
