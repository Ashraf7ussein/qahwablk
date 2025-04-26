import pattern from "../assets/pattern.png";
import Products from "./Products";

const About = () => {
  return (
    <>
      <div className="relative flex flex-col items-center gap-12 my-10 px-6 md:px-12 overflow-hidden">
        {/* Background Pattern with Fade */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 bg-repeat bg-center"
            style={{
              backgroundImage: `url(${pattern})`,
              backgroundSize: "70%",
              opacity: 0.08,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        </div>

        {/* Content */}
        <h2 className="text-3xl font-bold mb-8 text-center">About qahwaBlk:</h2>

        <p className="text-white text-lg md:text-2xl font-light leading-relaxed md:leading-loose max-w-5xl text-center z-10">
          In 2019, we started QahwaBLK with a simple yet bold question: Could we
          consistently deliver an exceptional cup of coffee without the hefty
          price tag or intimidating atmosphere? This question became our
          mission, leading us to create a space where everyone feels welcome.
          <br />
          <br />
          Our approach strips away the complexities, focusing on quality coffee
          and genuine interactions. It's not just our baristas who make QahwaBLK
          special — it's the culture they embody and share with every customer.
          By marrying straightforward marketing with our team's passion, we've
          turned every visit into an opportunity for connection, making QahwaBLK
          a place where coffee lovers gather not just for the beverage, but for
          the experience that comes with it.
        </p>
      </div>
      <Products />
    </>
  );
};

export default About;
