import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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

const MenuPage = () => {
  interface Menu {
    arName: string;
    enName: string;
    price: number;
    category: string;
    _id: string;
  }

  const [menu, setMenu] = useState<{ category: string; items: Menu[] }[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/menu")
      .then((res) => {
        const groupedMenu = res.data.reduce(
          (acc: { category: string; items: Menu[] }[], menuItem: Menu) => {
            // Check if category already exists in the accumulator
            const existingCategory = acc.find(
              (item) => item.category === menuItem.category
            );

            if (existingCategory) {
              // Add the item to the existing category's items array
              existingCategory.items.push(menuItem);
            } else {
              // If no category exists, create a new one
              acc.push({
                category: menuItem.category,
                items: [menuItem],
              });
            }
            return acc;
          },
          []
        );

        setMenu(groupedMenu);
      })
      .catch((err) => console.error(err));
  }, []);

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="max-w-md mx-auto p-6 mt-30">
      <h2 className="text-2xl font-bold mb-10 text-center">{t("menu")}</h2>

      {menu.map((category) => (
        <div key={category.category} className="mb-8">
          <h3 className="text-3xl font-bold text-center mb-4 capitalize underline underline-offset-4 decoration-1">
            {category.category}
          </h3>
          <div>
            {category.items.map((menuItem) => (
              <div
                className="flex justify-between items-center p-4"
                key={menuItem._id}
              >
                <p>
                  {currentLanguage === "ar" ? menuItem.arName : menuItem.enName}
                </p>
                <p>{menuItem.price.toFixed(2)} JOD</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
