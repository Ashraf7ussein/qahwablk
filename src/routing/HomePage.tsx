import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Order from "../components/Order";
import Merchandise from "../components/Merchandise";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Merchandise />
      <Order />
    </>
  );
};

export default HomePage;
