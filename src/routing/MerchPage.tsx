import { useTranslation } from "react-i18next";

const merchItems = [
  { enName: "Coffee Bean - قهوة كولومبية", price: "8 JOD" },
  {
    enName: "Insulated Temperature Thermo - ترموس معزول للحرارة",
    price: "15 JOD",
  },
  { enName: "Matte Mug - فنجان", price: "8 JOD" },
  { enName: "Tote Bag - حقيبة توت", price: "6 JOD" },
  { enName: "Hoodie - هودي", price: "20 JOD" },
  { enName: "Picnic Blanket - شرشف شدة", price: "10 JOD" },
  { enName: "Playing Cards Set - شدة", price: "7 JOD" },
];

const MerchPage = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-xl mx-auto p-6 mt-30">
      <h2 className="text-3xl font-bold text-center mb-4 capitalize underline underline-offset-4 decoration-1">
        {t("merchandise")}
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
