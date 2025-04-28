import { useTranslation } from "react-i18next";

const MenuPage = () => {
  const menuItems = [
    {
      category: "Black Coffee  -  قهوة بلاك",
      items: [
        { enName: "Espresso - اسبريسو", price: "1 JOD" },
        { enName: "Americano - اميريكانو", price: "1 JOD" },
        { enName: "American / Filtered - اميريكان", price: "1 JOD" },
      ],
    },
    {
      category: "Milk Coffee  -  قهوة ميلك",
      items: [
        { enName: "Cappuccino - كابتشينو", price: "1.5 JOD" },
        { enName: "Latte / Iced - لاتيه / بارد", price: "1.5 JOD" },
        {
          enName: "Flat White Corlado - فلات وايت / كورتادو",
          price: "1.5 JOD",
        },
      ],
    },
    {
      category: "Sweet Coffee  -  قهوة سويت",
      items: [
        { enName: "Spanish Latte - لاتيه اسباني", price: "2 JOD" },
        { enName: "Pistachio Latte - لاتيه فستق حلبي", price: "2 JOD" },
        { enName: "Rose Latte - لاتيه ورد", price: "2 JOD" },
        { enName: "Lotus Latte - لاتيه لوتس", price: "2 JOD" },
        { enName: "Caramel Latte - لاتيه كراميل", price: "2 JOD" },
        { enName: "Hazelnut Latte - لاتيه بندق", price: "2 JOD" },
        { enName: "White Mocha - موكا أبيض", price: "2 JOD" },
        { enName: "Khareeef - خريف", price: "2 JOD" },
      ],
    },
    {
      category: "Snack  -  تصبيرة",
      items: [
        { enName: "Cookies - بسكويت", price: "1 JOD" },
        { enName: "Cakes - كعك", price: "1 JOD" },
        { enName: "Brownies - براونيز", price: "2 JOD" },
        { enName: "Kaek - كعيك", price: "1 JOD" },
        { enName: "Fatireh - فطيرة", price: "1 JOD" },
        { enName: "Forsa Sandwiches - ساندويشات الفرصة", price: "1 JOD" },
        { enName: "Biscotti - بيسكوتي", price: "1 JOD" },
      ],
    },
  ];

  const { t } = useTranslation();

  return (
    <div className="max-w-md mx-auto p-6 mt-30">
      <h2 className="text-2xl font-bold mb-10 text-center">{t("menu")}</h2>
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
