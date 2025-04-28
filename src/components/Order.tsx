import careem from "../assets/careem.png";
import talabat from "../assets/talabat.webp";

const Order = () => {
  return (
    <section className="py-5 border-t-1 py-20">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-8">
          <button
            type="button"
            className="text-gray-900 bg-[#00E784] hover:bg-[#00E784]/50 focus:outline-none font-medium rounded-lg text-lg 
              gap-2 px-5 py-2.5 inline-flex items-center transition-all duration-300 hover:cursor-pointer"
          >
            <a href="https://www.talabat.com" target="_blank"></a>
            Order from{"  "}
            <img src={careem} alt="Talabat" className="h-5" />
          </button>
          <button
            type="button"
            className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/50 focus:outline-none font-medium rounded-lg text-lg 
              gap-1 px-5 py-2.5 inline-flex items-center transition-all duration-300 hover:cursor-pointer"
          >
            <a href="https://www.talabat.com" target="_blank"></a>
            Order from{"  "}
            <img src={talabat} alt="Talabat" className="h-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Order;
