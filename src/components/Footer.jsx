import my_logo from "../assets/my_logo-removebg-preview.png";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-6 py-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
        
        {/* Logo */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={my_logo}
            alt="MimiHair Logo"
            className="w-[120px]"
          />
        </div>

        {/* Links */}
        <nav>
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-center">
            <li>
              <Link to="/" className="text-pink-500 font-medium hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-pink-500 font-medium hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacypolicy" className="text-pink-500 font-medium hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-pink-500 font-medium hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social */}
        <div className="flex flex-col items-center lg:items-start gap-3">
          <h3 className="text-sm font-semibold">Follow Us</h3>
          <div className="flex gap-5 text-pink-500">
            <a
              href="https://www.facebook.com/share/17n9sZmhLS/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition-transform hover:scale-110"
            >
              <FaFacebook />
            </a>

            <a
              href="https://instagram.com/mimihairofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition-transform hover:scale-110"
            >
              <BsInstagram />
            </a>

            <a
              href="https://www.tiktok.com/@mimihair036"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition-transform hover:scale-110"
            >
              <FaTiktok />
            </a>

            <a
              href="https://wa.me/+2348038901148"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition-transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} MimiHair. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

