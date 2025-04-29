import { useEffect, useState } from "react";
import logo from "../assets/logo.webp";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navLinks = [
  { name: "home", href: "/" },
  { name: "menu", href: "/menu" },
  { name: "merchandise", href: "/merchandise" },
  { name: "locations", href: "/locations" },
  { name: "careers", href: "/careers" },
  { name: "contactUs", href: "/contactUs" },
];

const languages = [
  { code: "en", label: "EN" },
  { code: "ar", label: "عربي" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    if (i18n.language === "ar") {
      document.body.classList.add("arLang");
      document.body.setAttribute("dir", "rtl");
    } else {
      document.body.classList.remove("arLang");
      document.body.setAttribute("dir", "ltr");
    }

    console.log("Body classes after language change:", document.body.classList);
  }, [i18n.language]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-2 shadow-lg">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="w-12" />
          <span className="self-center text-2xl whitespace-nowrap text-text">
            {t("qahwablk")}
          </span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm
         rounded-lg md:hidden hover:bg-gray-100 transition-colors duration-300
        "
        >
          {menuOpen ? (
            <IoClose size={35} className="text-text" />
          ) : (
            <HiOutlineMenu size={35} className="text-text" />
          )}
        </button>

        <div
          className={`w-full overflow-hidden transition-all duration-300 ease-in-out
        ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        md:max-h-none md:opacity-100 md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
            className="font-medium flex flex-col mt-4 md:mt-0 border rounded-lg 
        bg-white md:flex-row"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="block py-2 px-3 text-text rounded-sm hover:bg-background  hover:text-white
                md:hover:bg-background md:border-0 md:px-4 md:py-2 md:hover:text-white transition-colors duration-300"
                >
                  {t(link.name)}
                </Link>
              </li>
            ))}

            <li className="flex items-center space-x-2 md:ml-4 mt-2 md:mt-0">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`px-2 py-1 rounded text-sm ${
                    i18n.language === lang.code
                      ? "bg-background text-white"
                      : "text-text hover:bg-background hover:text-white"
                  } transition-colors duration-300 ${
                    lang.code === "ar" ? "arLang" : ""
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
