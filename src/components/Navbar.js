import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/VC.jpg"; // put the logo file here in src/assets/VC.jpg

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-4 left-4 z-50">
      {/* logo and hamburger button side by side */}
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Velvet Circle"
          className="w-10 h-10 rounded-full border-2 border-white shadow"
        />
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full bg-[#8B0000] text-white shadow hover:bg-[#a10000] transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-14 left-0 bg-[#8B0000] rounded-lg shadow p-4 space-y-2 w-56 text-white">
          <Link
            to="/"
            className="block hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/careers"
            className="block hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Careers
          </Link>
          <Link
            to="/booking"
            className="block hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Booking
          </Link>
          <Link
            to="/rewardpolicy"
            className="block hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Reward Policy
          </Link>
          <Link
            to="/paymentpolicy"
            className="block hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Payment Policy
          </Link>
          <Link
            to="/terms"
            className="block hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Terms & Conditions
          </Link>
        </div>
      )}
    </nav>
  );
}
