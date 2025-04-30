import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface FormData {
  arName: string;
  enName: string;
  price: number;
}

interface Merch {
  arName: string;
  enName: string;
  price: number;
  _id: string;
}

const MerchEditor = () => {
  const { t } = useTranslation();
  const [merch, setMerch] = useState<Merch[]>([]);
  const [editingItem, setEditingItem] = useState<Merch | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  // fetch MERCH data
  useEffect(() => {
    axios
      .get("http://localhost:5000/merch")
      .then((res) => {
        setMerch(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // add ane edit merch data
  const onSubmit = (data: FormData) => {
    if (editingItem) {
      // Editing existing item
      const updatedItem = { ...editingItem, ...data };

      axios
        .put(`http://localhost:5000/merch/${editingItem._id}`, updatedItem)
        .then((res) => {
          showSuccessMessage("Item updated successfully.");

          setMerch((prevMenu) =>
            prevMenu.map((item) =>
              item._id === editingItem._id ? updatedItem : item
            )
          );

          reset();
          console.log("Item updated successfully");
        })
        .catch((err) => {
          console.error("Error updating item:", err);
        });
    } else {
      // Add new item
      const newItem = {
        arName: data.arName,
        enName: data.enName,
        price: data.price,
        _id: data.enName,
      };

      const prevMenu = [...merch];

      setMerch((prevMenu) => [...prevMenu, newItem]);
      reset();

      axios
        .post("http://localhost:5000/merch", data)
        .then((res) => {
          showSuccessMessage("Item Added successfully.");

          const updatedItem = {
            ...newItem,
            _id: res.data._id,
          };

          setMerch((prevMenu) =>
            prevMenu.map((item) =>
              item._id === "temp-id" ? updatedItem : item
            )
          );
          console.log("SUCCESS POSTED TO THE MERCH MENU");
        })
        .catch((err) => {
          console.error("Error posting to merch menu:", err);

          setMerch(prevMenu);
        });
    }
  };

  // delete item
  const deleteItem = (item: Merch) => {
    const prevMenu = [...merch];

    setMerch(merch.filter((i) => i._id !== item._id));

    axios
      .delete(`http://localhost:5000/merch/${item._id}`)
      .then((res) => {
        console.log("SUCCESS DELETED FROM THE Merch");
        showSuccessMessage("Item deleted successfully.");
      })
      .catch((err) => {
        console.error("Error deleting from merch:", err);

        setMerch(prevMenu);
      });
  };

  const showSuccessMessage = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(null), 3000); // auto-hide after 3 seconds
  };

  return (
    <div className="bg-white text-black p-6 pt-20">
      <h2 className="text-2xl font-medium mb-6 text-center pt-10">
        {t("merchEditor")}
      </h2>

      <div className="p-3 relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
        <p className="mb-5 font-medium text-xl">
          {editMode ? t("updatedMerchItem") : t("newMerchItem")}
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
              {editingItem ? t("editItem") : t("addItem")}
            </button>
            {editMode && (
              <button
                className="w-full font-semibold text-lg py-2 rounded-lg mt-4 hover:cursor-pointer bg-gray-500 hover:bg-gray-600 text-white"
                onClick={() => {
                  setEditMode(false);
                }}
              >
                {t("cancelEdit")}
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
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
            {merch.map((merchItem) => {
              return (
                <tr
                  className="odd:bg-white even:bg-gray-50 border-gray-200"
                  key={merchItem._id}
                >
                  <td className="px-6 py-4">{merchItem.arName}</td>
                  <td className="px-6 py-4">{merchItem.enName}</td>
                  <td className="px-6 py-4">{merchItem.price}</td>
                  <td className="px-6 py-4 space-x-6">
                    <button
                      className="font-medium text-blue-600 hover:underline hover:cursor-pointer"
                      onClick={() => {
                        setEditMode(true);
                        setEditingItem(merchItem);
                        reset(merchItem); // prefill the form with existing values
                        window.scrollTo({ top: 100, behavior: "smooth" }); // move to top
                      }}
                    >
                      {t("edit")}
                    </button>
                    <button
                      onClick={() => deleteItem(merchItem)}
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

export default MerchEditor;
