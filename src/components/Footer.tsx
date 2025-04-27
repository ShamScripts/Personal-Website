import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-12 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Shambhavi Jha
              </span>
            </h2>
            <p className="text-gray-400 mt-2">
              Computer Science Student | Developer | Researcher
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/ShamScripts"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/shamscript009/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://www.instagram.com/love_shambhavi?igsh=MW43Mmpwd2kweGh2bA=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Instagram className="h-5 w-5 text-white" />
            </a>
            <a
              href="mailto:f20230009@dubai.bits-pilani.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Mail className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Shambhavi Jha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
