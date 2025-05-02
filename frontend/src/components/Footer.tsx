import {
  FaFacebookF,
  FaInstagram,
  FaSoundcloud,
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/qahwablk/",
    hoverColor: "hover:text-blue-600",
  },

  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/qahwablk/",
    hoverColor: "hover:text-pink-500",
  },
  {
    name: "SoundCloud",
    icon: FaSoundcloud,
    link: "https://soundcloud.com/qahwablk",
    hoverColor: "hover:text-orange-600",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    link: "https://www.tiktok.com/@qahwablk",
    hoverColor: "hover:text-black",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    link: "https://www.youtube.com/channel/UCZpYpbxYE309LJgTI2hB6hA",
    hoverColor: "hover:text-red-600",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/company/qahwablk/?originalSubdomain=jo",
    hoverColor: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://www.twitter.com",
    hoverColor: "hover:text-blue-400",
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-white border-t pt-6 pb-6">
      <div className="w-full mx-auto max-w-screen-xl px-4 flex flex-col items-center md:flex-row md:items-center md:justify-between">
        <span className="text-sm text-gray-400 sm:text-center">
          © 2025 <span className="font-semibold text-white">qahwaBlk™</span>.{" "}
          {t("allRights")}
        </span>

        <ul className="flex gap-6 mt-4 md:mt-0 justify-center">
          {socialLinks.map(({ name, icon: Icon, link, hoverColor }) => (
            <li key={name}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${hoverColor} transition-colors duration-300`}
              >
                <Icon size={22} />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-center text-sm text-gray-400 mt-4">
          {t("developedBy")}&nbsp;
          <a
            href="https://ashrafportfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            {t("ashraf")}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
