import shop from "../assets/shop.jpg";

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 max-w-6xl mx-auto border-b-1">
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-3xl font-bold">About QahwaBlk</h2>
          <p className="leading-relaxed">
            In 2019, we started QahwaBLK with a simple yet bold question: Could
            we consistently deliver an exceptional cup of coffee without the
            hefty price tag or intimidating atmosphere? This question became our
            mission, leading us to create a space where everyone feels welcome.
            <br />
            <br />
            Our approach strips away the complexities, focusing on quality
            coffee and genuine interactions. It's not just our baristas who make
            QahwaBLK special — it's the culture they embody and share with every
            customer. By marrying straightforward marketing with our team's
            passion, we've turned every visit into an opportunity for
            connection, making QahwaBLK a place where coffee lovers gather not
            just for the beverage, but for the experience that comes with it.
          </p>
        </div>
        <img
          src={shop}
          alt="QahwaBlk shop"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />
      </div>
    </>
  );
};

export default About;
