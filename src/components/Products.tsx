import Card from "./Card";
import bottle from "../assets/bottle.png";
import coffeeBag from "../assets/coffeeBag.png";
import { Link } from "react-router-dom";

const Products = () => {
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

  return (
    <section className="p-8 flex justify-center items-center flex-col">
      <h2 className="text-3xl font-bold mb-8 text-center">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card key={index} product={product} index={index} />
        ))}
      </div>
      <button className=" px-6 py-3 mt-8 bg-white text-black rounded-full hover:bg-gray-100 cursor-pointer transition duration-300">
        <Link to="/products">See All</Link>
      </button>
    </section>
  );
};

export default Products;
