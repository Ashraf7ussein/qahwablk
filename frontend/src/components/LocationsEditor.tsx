import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Spinner from "./Spinner";

interface FormData {
  arName: string;
  enName: string;
  location: string;
}

interface Location {
  arName: string;
  enName: string;
  location: string;
  _id: string;
}

const LocationsEditor = () => {
  const { t } = useTranslation();
  const [locations, setLocations] = useState<Location[]>([]);
  const [editingItem, setEditingItem] = useState<Location | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [loading, setLoading] = useState(false);

  // fetch LOCATION data
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://qahwablk-backend.onrender.com/locations")
      .then((res) => {
        setLocations(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // add and edit location data
  const onSubmit = (data: FormData) => {
    setLoading(true);
    if (editingItem) {
      // Editing existing item
      const updatedItem = { ...editingItem, ...data };

      axios
        .put(
          `https://qahwablk-backend.onrender.com/locations/${editingItem._id}`,
          updatedItem
        )
        .then(() => {
          showSuccessMessage(t("itemUpdatedSuccess"));

          setLocations((prevMenu) =>
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
        location: data.location,
        _id: data.enName,
      };

      const prevMenu = [...locations];

      setLocations((prevMenu) => [...prevMenu, newItem]);
      reset();

      axios
        .post("https://qahwablk-backend.onrender.com/locations", data)
        .then((res) => {
          showSuccessMessage(t("itemAddedSuccess"));

          const updatedItem = {
            ...newItem,
            _id: res.data._id,
          };

          setLocations((prevMenu) =>
            prevMenu.map((item) =>
              item._id === "temp-id" ? updatedItem : item
            )
          );
          console.log("SUCCESS POSTED TO THE LOCATION MENU");
        })
        .catch((err) => {
          console.error("Error posting to merch menu:", err);

          setLocations(prevMenu);
        })
        .finally(() => setLoading(false));
    }
  };

  // delete item
  const deleteItem = (item: Location) => {
    const prevMenu = [...locations];

    setLocations(locations.filter((i) => i._id !== item._id));

    axios
      .delete(`https://qahwablk-backend.onrender.com/locations/${item._id}`)
      .then(() => {
        showSuccessMessage(t("itemDeleteSuccess"));
      })
      .catch((err) => {
        console.error("Error deleting from merch:", err);

        setLocations(prevMenu);
      })
      .finally(() => setLoading(false));
  };

  const showSuccessMessage = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(null), 3000); // auto-hide after 3 seconds
  };

  const handleCancel = () => {
    setEditingItem(null);
    setEditMode(false);
    reset();
  };

  return (
    <div className="bg-white text-black p-6 pt-20">
      <h2 className="text-2xl font-medium mb-6 text-center pt-10">
        {t("locationsEditor")}
      </h2>
      <div className="p-3 relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
        <p className="mb-5 font-medium text-xl">
          {editMode ? t("updatedLocationItem") : t("newLocationItem")}
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
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              {t("location")}
            </label>
            <input
              {...register("location")}
              type="text"
              id="location"
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
                {t("arName")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("enName")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("location")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("actions")}
              </th>
            </tr>
          </thead>
          <tbody>
            {locations.map((locationItem) => {
              return (
                <tr
                  className="odd:bg-white even:bg-gray-50 border-gray-200"
                  key={locationItem._id}
                >
                  <td className="px-6 py-4">{locationItem.arName}</td>
                  <td className="px-6 py-4">{locationItem.enName}</td>
                  <td className="px-6 py-4">{locationItem.location}</td>
                  <td className="px-6 py-4 space-x-6">
                    <button
                      className="font-medium text-blue-600 hover:underline hover:cursor-pointer"
                      onClick={() => {
                        setEditMode(true);
                        setEditingItem(locationItem);
                        reset(locationItem); // prefill the form with existing values
                        window.scrollTo({ top: 100, behavior: "smooth" }); // move to top
                      }}
                    >
                      {t("edit")}
                    </button>
                    <button
                      onClick={() => deleteItem(locationItem)}
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

export default LocationsEditor;
