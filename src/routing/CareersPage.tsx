import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const CareersPage = () => {
  const { t } = useTranslation();

  const schema = z.object({
    name: z
      .string()
      .min(5, { message: t("name_min") })
      .max(50, { message: t("name_max") }),
    phoneNumber: z
      .string()
      .regex(/^(0|\+962)7[987]\d{7}$/, { message: t("phone_invalid") }),
    livingArea: z.string().min(2, { message: t("living_area_required") }),
    age: z.coerce
      .number()
      .min(18, { message: t("age_min") })
      .max(65, { message: t("age_max") }),
    gender: z.enum(["male", "female"], {
      errorMap: () => ({ message: t("gender_select") }),
    }),
    howDidYouHearAboutUs: z.enum(
      ["online", "blkEmployee", "jordanUni", "ahliUni", "linkedIn", "other"],
      {
        errorMap: () => ({ message: t("option_select") }),
      }
    ),
    jobType: z.enum(["fullTime", "partTime"], {
      errorMap: () => ({ message: t("job_type_select") }),
    }),
    studying: z.enum(["yes", "no"], {
      errorMap: () => ({ message: t("studying_select") }),
    }),
    working: z.enum(["yes", "no"], {
      errorMap: () => ({ message: t("working_select") }),
    }),
    workingExperience: z
      .string()
      .min(3, { message: t("work_exp_min") })
      .max(50, { message: t("work_exp_max") }),
    educationLevel: z.enum(["highSchool", "diploma", "university", "masters"], {
      errorMap: () => ({ message: t("education_select") }),
    }),
    favoriteDrink: z.string().min(1, { message: t("drink_required") }),
    whyWorkWithUs: z.string().min(1, { message: t("join_reason_required") }),
    photo: z
      .instanceof(FileList)
      .refine((files) => files.length > 0, { message: t("photo_upload") }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [result, setResult] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSending(true);
    setResult(null);
    setIsSuccess(false);

    const formData = new FormData();
    formData.append("full name", data.name);
    formData.append("phone number", data.phoneNumber);
    formData.append("living Area", data.livingArea);
    formData.append("age", data.age.toString());
    formData.append("gender", data.gender);
    formData.append("how Did You Hear About Us", data.howDidYouHearAboutUs);
    formData.append("job Type", data.jobType);
    formData.append("are you studying", data.studying);
    formData.append("are you working", data.working);
    formData.append("working Experience", data.workingExperience);
    formData.append("favorite Drink", data.favoriteDrink);
    formData.append("why Working With Us", data.whyWorkWithUs);
    // formData.append("photo of you", data.photo[0]);
    formData.append("access_key", "214a594d-9ad5-44eb-9604-5d9124f665ee");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.success) {
        setResult("Form Submitted Successfully!");
        setIsSuccess(true);
        reset();
      } else {
        setResult(responseData.message);
        setIsSuccess(false);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again later.");
      setIsSuccess(false);
    } finally {
      setIsSending(false);
      setTimeout(() => {
        setResult(null);
      }, 5000); // Remove the message after 5 seconds
    }
  };

  return (
    <div className="bg-white">
      <img src={logo} className="mx-auto w-40 mb-5 pt-35" alt="blk logo" />
      <h2 className="text-2xl font-medium mb-6 text-center text-text">
        Job Application - طلب توظيف
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

        {/*  How did you find about the work opportunity  */}
        <div className="mb-10">
          <p className="block mb-2 text-lg font-medium text-gray-900">
            How did you find about the work opportunity? - كيف عرفتوا عن فرصة
            العمل؟ *
          </p>
          <div className="flex items-center mb-4">
            <input
              {...register("howDidYouHearAboutUs")}
              id="radio-name"
              type="radio"
              value="online"
              name="howDidYouHearAboutUs"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-name"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Online - أونلاين
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              {...register("howDidYouHearAboutUs")}
              id="radio-blkEmployee"
              type="radio"
              value="blkEmployee"
              name="howDidYouHearAboutUs"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-blkEmployee"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              An Employee at BLK - موظف في بلاك
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              {...register("howDidYouHearAboutUs")}
              id="radio-jordanUni"
              type="radio"
              value="jordanUni"
              name="howDidYouHearAboutUs"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-jordanUni"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Jordan University Job Fair - سوق كرم الجامعة الاردنية
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              {...register("howDidYouHearAboutUs")}
              id="radio-ahliUni"
              type="radio"
              value="ahliUni"
              name="howDidYouHearAboutUs"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-ahliUni"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Ahli University - جامعة عمان الأهلية
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              {...register("howDidYouHearAboutUs")}
              id="radio-linkedIn"
              type="radio"
              value="linkedIn"
              name="howDidYouHearAboutUs"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-linkedIn"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              LinkedIn - لينكدان
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              {...register("howDidYouHearAboutUs")}
              id="radio-other"
              type="radio"
              value="other"
              name="howDidYouHearAboutUs"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-other"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Other - أخرى
            </label>
          </div>

          {errors.howDidYouHearAboutUs && (
            <p className="text-red-500 text-sm mt-1">
              {errors.howDidYouHearAboutUs.message}
            </p>
          )}
        </div>

        {/* Living Area */}
        <div className="mb-10">
          <label
            htmlFor="livingArea"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Living Area - منطقة السكن *
          </label>
          <input
            type="text"
            id="livingArea"
            {...register("livingArea")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your living area"
          />
          {errors.livingArea && (
            <p className="text-red-500 text-sm mt-1">
              {errors.livingArea.message}
            </p>
          )}
        </div>

        {/* Gender Options */}
        <div className="mb-10">
          <p className="block mb-2 text-lg font-medium text-gray-900">
            Gender - الجنس *
          </p>
          <div className="flex items-center mb-4">
            <input
              id="radio-male"
              type="radio"
              value="male"
              {...register("gender")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-male"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Male - ذكر
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="radio-female"
              type="radio"
              value="female"
              {...register("gender")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-female"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Female - أنثى
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
          )}
        </div>

        {/* Age */}
        <div className="mb-10">
          <label
            htmlFor="age"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Age - العمر *
          </label>
          <input
            type="number"
            id="age"
            {...register("age")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your Age"
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
          )}
        </div>

        {/* Work Time Options */}
        <div className="mb-10">
          <p className="block mb-2 text-lg font-medium text-gray-900">
            Looking for Full/Part time? - بدور على دوام كامل/ جزئي؟ *
          </p>
          <div className="flex items-center mb-4">
            <input
              id="radio-fullTime"
              type="radio"
              value="fullTime"
              {...register("jobType")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-fullTime"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Full Time - دوام كامل
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="radio-partTime"
              type="radio"
              value="partTime"
              {...register("jobType")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-partTime"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Part Time - دوام جزئي
            </label>
          </div>
          {errors.jobType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.jobType.message}
            </p>
          )}
        </div>

        {/* Study Options */}
        <div className="mb-10">
          <p className="block mb-2 text-lg font-medium text-gray-900">
            Are you currently studying? - هل انت حاليا تدرس؟ *
          </p>
          <div className="flex items-center mb-4">
            <input
              id="radio-yes"
              type="radio"
              value="yes"
              {...register("studying")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-yes"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Yes - نعم
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="radio-no"
              type="radio"
              value="no"
              {...register("studying")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-no"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              No - لا
            </label>
          </div>
          {errors.studying && (
            <p className="text-red-500 text-sm mt-1">
              {errors.studying.message}
            </p>
          )}
        </div>

        <div className="mb-10">
          <p className="block mb-2 text-lg font-medium text-gray-900">
            Are you currently working? - هل انت حاليا عم تشتغل؟ *
          </p>

          <div className="flex items-center mb-4">
            <input
              {...register("working")}
              id="radio-workingYes"
              type="radio"
              value="yes"
              name="working"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-workingYes"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Yes - نعم
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              {...register("working")}
              id="radio-workingNo"
              type="radio"
              value="no"
              name="working"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-workingNo"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              No - لا
            </label>
          </div>
          {errors.working && (
            <p className="text-red-500 text-sm mt-1">
              {errors.working.message}
            </p>
          )}
        </div>

        <div className="mb-10">
          <label
            htmlFor="workingExperience"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Previous work experience? - وين اشتغلت من قبل؟ *
          </label>
          <input
            type="text"
            placeholder="Previous work experience"
            {...register("workingExperience")}
            id="workingExperience"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5"
          />
          {errors.workingExperience && (
            <p className="text-red-500 text-sm mt-1">
              {errors.workingExperience.message}
            </p>
          )}
        </div>

        <div className="mb-10">
          <p className="block mb-2 text-lg font-medium text-gray-900">
            Education Level - المؤهل العلمي *
          </p>

          <div className="flex items-center mb-4">
            <input
              id="radio-highSchool"
              type="radio"
              value="highSchool"
              {...register("educationLevel")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-highSchool"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              HighSchool - توجيهي
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="radio-diploma"
              type="radio"
              value="diploma"
              {...register("educationLevel")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-diploma"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Diploma - دبلوم
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="radio-university"
              type="radio"
              value="university"
              {...register("educationLevel")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-university"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              University - جامعة
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="radio-masters"
              type="radio"
              value="masters"
              {...register("educationLevel")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-masters"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Masters - ماجستير
            </label>
          </div>

          {errors.educationLevel && (
            <p className="text-red-500 text-sm mt-1">
              {errors.educationLevel.message}
            </p>
          )}
        </div>

        {/* Favorite Drink Field */}
        <div className="mb-10">
          <label
            htmlFor="favoriteDrink"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Favorite drink at QahwaBLK - شرابك المفضل من عندنا *
          </label>
          <input
            type="text"
            id="favoriteDrink"
            {...register("favoriteDrink")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your favorite drink"
          />
          {errors.favoriteDrink && (
            <p className="text-red-500 text-sm mt-1">
              {errors.favoriteDrink.message}
            </p>
          )}
        </div>

        {/* Why Work With Us Field */}
        <div className="mb-10">
          <label
            htmlFor="whyWorkWithUs"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Why do you want to join? - ليش حاب تشتغل معنا؟ *
          </label>
          <input
            type="text"
            id="whyWorkWithUs"
            {...register("whyWorkWithUs")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5"
            placeholder="Explain why you want to join"
          />
          {errors.whyWorkWithUs && (
            <p className="text-red-500 text-sm mt-1">
              {errors.whyWorkWithUs.message}
            </p>
          )}
        </div>

        {/* Photo Field */}
        {/* <div className="mb-10">
          <label
            htmlFor="photo"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Photo of yourself - صورة الك *
          </label>
          <input
            type="file"
            id="photo"
            {...register("photo")}
            accept="image/*"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5"
          />
          {errors.photo && (
            <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
          )}
        </div> */}

        {/* Submit Button */}
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

        {result && (
          <p
            className={`text-center text-sm mt-4 ${
              isSuccess ? "text-green-500" : "text-red-500"
            }`}
          >
            {result}
          </p>
        )}
      </form>
    </div>
  );
};

export default CareersPage;
