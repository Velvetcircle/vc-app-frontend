import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Velvet banner header */}
      <div
        className="w-full relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
        }}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 left-4 p-2 rounded-full bg-[#800020] text-white shadow hover:bg-[#a52a2a] transition z-50"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-white text-3xl font-bold drop-shadow-md text-center">
          Velvet Circle
        </h1>
      </div>

      {/* Sidebar menu */}
      {isOpen && (
        <div className="fixed top-[200px] left-0 bg-[#800020] rounded-r-lg shadow p-4 space-y-3 w-60 z-50">
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
    </>
  );
}
