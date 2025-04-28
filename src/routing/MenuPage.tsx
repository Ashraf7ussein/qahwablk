const MenuPage = () => {
  const menuItems = [
    {
      category: "Black Coffee",
      items: [
        { enName: "Espresso", price: "1 JOD" },
        { enName: "Americano", price: "1 JOD" },
        { enName: "American / Filtered", price: "1 JOD" },
      ],
    },
    {
      category: "Milk Coffee",
      items: [
        { enName: "Cappuccino", price: "1.5 JOD" },
        { enName: "Latte / Iced", price: "1.5 JOD" },
        { enName: "Flat White Corlado", price: "1.5 JOD" },
      ],
    },
    {
      category: "Sweet Coffee",
      items: [
        { enName: "Spanish Latte", price: "2 JOD" },
        { enName: "Pistachio Latte", price: "2 JOD" },
        { enName: "Rose Latte", price: "2 JOD" },
        { enName: "Lotus Latte", price: "2 JOD" },
        { enName: "Caramel Latte", price: "2 JOD" },
        { enName: "Hazelnut Latte", price: "2 JOD" },
        { enName: "White Mocha", price: "2 JOD" },
        { enName: "Khareeef", price: "2 JOD" },
      ],
    },
    {
      category: "Snack",
      items: [
        { enName: "Cookies", price: "1 JOD" },
        { enName: "Cakes", price: "1 JOD" },
        { enName: "Brownies", price: "2 JOD" },
        { enName: "Kaek", price: "1 JOD" },
        { enName: "Fatireh", price: "1 JOD" },
        { enName: "Forsa Sandwiches", price: "1 JOD" },
        { enName: "Biscotti", price: "1 JOD" },
      ],
    },
  ];

  return (
    <div className="max-w-md mx-auto p-6 mt-30">
      <h2 className="text-2xl font-bold mb-10 text-center">Menu</h2>
      {menuItems.map((category, catIndex) => (
        <div key={catIndex} className="mb-8">
          {/* Render the category title */}
          <h2 className="text-3xl font-bold text-center mb-4 capitalize underline underline-offset-4 decoration-1">
            {category.category}
          </h2>

          {/* Render the items inside the category */}
          <div>
            {category.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex justify-between items-center p-4"
              >
                <span className="text-lg font-medium">{item.enName}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
