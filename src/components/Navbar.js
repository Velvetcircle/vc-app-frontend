import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow">
      {/* Velvet style header using background.jpg */}
      <div
        className="relative flex items-center justify-between px-4 py-3"
        style={{
          backgroundImage: "url('/assets/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
        }}
      >
        <h1 className="text-white text-2xl md:text-3xl font-bold drop-shadow">
          Velvet Circle
        </h1>
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full bg-[#800020] text-white shadow hover:bg-[#a52a2a] transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar menu */}
      {isOpen && (
        <div className="absolute top-[200px] left-0 bg-[#800020] rounded-r-lg shadow p-4 space-y-3 w-60">
          <Link
            to="/"
            className="block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/careers"
            className="block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Careers
          </Link>
          <Link
            to="/booking"
            className="block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Booking
          </Link>
          <Link
            to="/rewardpolicy"
            className="block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Reward Policy
          </Link>
          <Link
            to="/paymentpolicy"
            className="block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Payment Policy
          </Link>
          <Link
            to="/terms"
            className="block text-white hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Terms & Conditions
          </Link>
        </div>
      )}
    </nav>
  );
}
