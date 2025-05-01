import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ToastNotification from "../components/ToastNotification";

const ContactUsPage = () => {
  const { t } = useTranslation();

  const schema = z.object({
    name: z
      .string()
      .min(5, { message: t("name_min") })
      .max(50, { message: t("name_max") }),
    phoneNumber: z
      .string()
      .regex(/^(0|\+962)7[987]\d{7}$/, { message: t("phone_invalid") }),
    email: z.string().email({ message: t("email_invalid") }),
    topic: z.string().min(3, { message: t("topic_min") }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [isSending, setIsSending] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const onSubmit = async (data: FormData) => {
    setIsSending(true);
    setToastMessage("");

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("email", data.email);
    formData.append("topic", data.topic);
    formData.append("access_key", "214a594d-9ad5-44eb-9604-5d9124f665ee");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.success) {
        setToastMessage("Form Submitted Successfully!");
        setToastType("success");
        reset();
      } else {
        setToastMessage("Submission failed, please try again.");
        setToastType("error");
      }
    } catch (error) {
      setToastMessage("Something went wrong. Please try again later.");
      setToastType("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-medium mb-6 text-center text-text pt-35">
        Contact us - تواصل معنا
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="px-20 py-8">
        {/* Full Name */}
        <div className="mb-10">
          <label
            htmlFor="name"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Full Name - الاسم الكامل *
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="mb-10">
          <label
            htmlFor="phoneNumber"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Phone Number - رقم التلفون *
          </label>
          <input
            type="text"
            id="phoneNumber"
            {...register("phoneNumber")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your Phone number"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-10">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Email - الايميل *
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Topic */}
        <div className="mb-10">
          <label
            htmlFor="topic"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Topic - الموضوع *
          </label>
          <input
            type="text"
            id="topic"
            {...register("topic")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5"
            placeholder="Topic of your message"
          />
          {errors.topic && (
            <p className="text-red-500 text-sm mt-1">{errors.topic.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSending}
          className={`w-full font-semibold text-lg py-2 rounded-lg mt-4 hover:cursor-pointer  ${
            isSending
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {isSending ? t("sending") : t("submit")}
        </button>
      </form>

      {/* Toast Notification */}
      {toastMessage && (
        <ToastNotification message={toastMessage} type={toastType} />
      )}
    </div>
  );
};

export default ContactUsPage;
