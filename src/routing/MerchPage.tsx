const merchItems = [
  { enName: "Coffee Bean", price: "8 JOD" },
  { enName: "Insulated Temperature Thermo", price: "15 JOD" },
  { enName: "Matte Mug", price: "8 JOD" },
  { enName: "Tote Bag", price: "6 JOD" },
  { enName: "Hoodie", price: "20 JOD" },
  { enName: "Picnic Blanket", price: "10 JOD" },
  { enName: "Playing Cards Set", price: "7 JOD" },
];

const MerchPage = () => {
  return (
    <div className="max-w-lg mx-auto p-6 mt-30">
      <h2 className="text-3xl font-bold text-center mb-4 capitalize underline underline-offset-4 decoration-1">
        Merchandise
      </h2>

      <div>
        {merchItems.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="flex justify-between items-center p-4 gap-10 "
          >
            <span className="text-lg font-medium">{item.enName}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchPage;
