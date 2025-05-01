import { useEffect, useState } from "react";

const ToastNotification = ({
  message,
  type,
}: {
  message: string;
  type: string;
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed w-full bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg text-white ${
        type === "success" ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {message}
    </div>
  );
};

export default ToastNotification;
