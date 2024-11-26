import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { socialLinks } from "@/functions/data";

const Footer = () => {
  const icons = {
    FaLinkedin: <FaLinkedin size={24} />,
    FaGithub: <FaGithub size={24} />,
    FaInstagram: <FaInstagram size={24} />,
  };

  return (
    <footer className="bg-white">
      <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-lg bg-blue p-6 shadow-lg sm:flex-row sm:justify-between">
          <strong className="text-xl text-white sm:text-xl">
            CryptoTracker
          </strong>

          <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  className={`transition-colors duration-300 ${link.color} transition ${link.hoverColor}`}
                >
                  <span className="sr-only">{link.name}</span>
                  {icons[link.icon]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
