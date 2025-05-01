import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
      .get("https://qahwablk-backend-1.onrender.com/menu")
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
                <p className="text-lg">
                  {currentLanguage === "ar" ? menuItem.arName : menuItem.enName}
                </p>
                <p className="text-lg">
                  {menuItem.price.toFixed(2)} {t("jod")}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
