import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t pt-6 pb-6">
      <div className="w-full mx-auto max-w-screen-xl px-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline font-semibold"
          >
            qahwaBlk™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebookF size={22} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram size={22} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
