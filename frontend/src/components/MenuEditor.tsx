import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Spinner from "./Spinner";

interface FormData {
  arName: string;
  enName: string;
  price: number;
  category: string;
}

interface Menu {
  arName: string;
  enName: string;
  price: number;
  category: string;
  _id: string;
}

const MenuEditor = () => {
  const [menu, setMenu] = useState<Menu[]>([]);
  const [editingItem, setEditingItem] = useState<Menu | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const showSuccessMessage = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(null), 3000); // auto-hide after 3 seconds
  };

  const { register, handleSubmit, reset } = useForm<FormData>();

  // fetch menu data
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://qahwablk-backend.onrender.com/menu")
      .then((res) => {
        setMenu(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const onSubmit = (data: FormData) => {
    setLoading(true);
    if (editingItem) {
      // Editing existing item
      const updatedItem = { ...editingItem, ...data };

      axios
        .put(
          `https://qahwablk-backend.onrender.com/menu/${editingItem._id}`,
          updatedItem
        )
        .then(() => {
          showSuccessMessage("itemUpdatedSuccess");

          setMenu((prevMenu) =>
            prevMenu.map((item) =>
              item._id === editingItem._id ? updatedItem : item
            )
          );

          setEditingItem(null);
          setEditMode(false);
          reset();
          console.log("Item updated successfully");
        })
        .catch((err) => {
          console.error("Error updating item:", err);
        })
        .finally(() => setLoading(false));
    } else {
      // Add new item
      const newItem = {
        arName: data.arName,
        enName: data.enName,
        price: data.price,
        category: data.category,
        _id: data.enName,
      };

      const prevMenu = [...menu];

      setMenu((prevMenu) => [...prevMenu, newItem]);
      reset();

      axios
        .post("https://qahwablk-backend.onrender.com/menu", data)
        .then((res) => {
          showSuccessMessage("Item Added successfully.");

          const updatedItem = {
            ...newItem,
            _id: res.data._id,
          };

          setMenu((prevMenu) =>
            prevMenu.map((item) =>
              item._id === "temp-id" ? updatedItem : item
            )
          );
          console.log("SUCCESS POSTED TO THE MENU");
        })
        .catch((err) => {
          console.error("Error posting to menu:", err);

          setMenu(prevMenu);
        })
        .finally(() => setLoading(false));
    }
  };

  // delete item
  const deleteItem = (item: Menu) => {
    const prevMenu = [...menu];

    setMenu(menu.filter((i) => i._id !== item._id));

    axios
      .delete(`https://qahwablk-backend.onrender.com/menu/${item._id}`)
      .then(() => {
        showSuccessMessage("Item deleted successfully.");
      })
      .catch((err) => {
        console.error("Error deleting from menu:", err);

        setMenu(prevMenu);
      });
  };

  const handleCancel = () => {
    setEditingItem(null);
    setEditMode(false);
    reset();
  };

  return (
    <div className="bg-white text-black p-6 pt-20">
      <h2 className="text-2xl font-medium mb-6 text-center pt-10">
        {t("menuEditor")}
      </h2>

      <div className="p-3 relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
        <p className="mb-5 font-medium text-xl">
          {editMode ? t("updatedMenuItem") : t("newMenuItem")}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label
              htmlFor="arName"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              {t("arName")}
            </label>
            <input
              {...register("arName")}
              type="text"
              id="arName"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="enName"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              {t("enName")}
            </label>
            <input
              {...register("enName")}
              type="text"
              id="enName"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              {t("price")}
            </label>
            <input
              {...register("price")}
              type="number"
              id="price"
              step="any"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              {t("category")}
            </label>
            <select
              {...register("category")}
              id="category"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option value=""></option>
              <option value="black coffee">Black Coffee</option>
              <option value="milk coffee">Milk Coffee</option>
              <option value="sweet coffee">Sweet Coffee</option>
              <option value="snack">Snack</option>
            </select>
          </div>
          <div>
            {successMessage && (
              <div className="mb-4 p-3 text-green-800 bg-green-100 rounded-md">
                {successMessage}
              </div>
            )}
            <button
              type="submit"
              className="w-full font-semibold text-lg py-2 rounded-lg mt-4 hover:cursor-pointer bg-blue-500 hover:bg-blue-600 text-white"
            >
              {editingItem ? t("saveChanges") : t("addItem")}
            </button>
            {editMode && (
              <button
                className="w-full font-semibold text-lg py-2 rounded-lg mt-4 hover:cursor-pointer bg-gray-500 hover:bg-gray-600 text-white"
                onClick={() => handleCancel()}
              >
                {t("cancelEdit")}
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {loading && (
          <div className="flex justify-center items-center py-4">
            <Spinner />
          </div>
        )}
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                {t("category")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("arName")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("enName")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("price")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("actions")}
              </th>
            </tr>
          </thead>
          <tbody>
            {menu.map((menuItem) => {
              return (
                <tr
                  className="odd:bg-white even:bg-gray-50 border-gray-200"
                  key={menuItem._id}
                >
                  <td className="px-6 py-4">{menuItem.category}</td>
                  <td className="px-6 py-4">{menuItem.arName}</td>
                  <td className="px-6 py-4">{menuItem.enName}</td>
                  <td className="px-6 py-4">{menuItem.price}</td>
                  <td className="px-6 py-4 space-x-6">
                    <button
                      className="font-medium text-blue-600 hover:underline hover:cursor-pointer"
                      onClick={() => {
                        setEditMode(true);
                        setEditingItem(menuItem);
                        reset(menuItem); // prefill the form with existing values
                        window.scrollTo({ top: 100, behavior: "smooth" }); // move to top
                      }}
                    >
                      {t("edit")}
                    </button>
                    <button
                      onClick={() => deleteItem(menuItem)}
                      className="font-medium text-red-600 hover:underline hover:cursor-pointer"
                    >
                      {t("delete")}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuEditor;
