interface ProductProps {
  product: {
    img: string;
    name: string;
    description: string;
  };
  index?: number; // optional for numbering if needed
}

const Card = ({ product, index }: ProductProps) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center rounded-2xl bg-indigo-600 hover:bg-indigo-900 
     p-6 shadow-md  transition-all duration-300"
    >
      <span className="absolute top-2 left-2 text-white text-sm font-bold">
        {index !== undefined ? (index + 1).toString().padStart(2, "0") : "01"}
      </span>
      <h3 className="text-white text-lg font-semibold text-center">
        {product.name}
      </h3>
      <img
        src={product.img}
        alt={product.name}
        className="w-60 h-60 object-contain mb-4 hover:scale-115 transition-all duration-300"
      />
      <p className="text-white text-sm text-center mt-2">
        {product.description || "No description available"}
      </p>
    </div>
  );
};

export default Card;
