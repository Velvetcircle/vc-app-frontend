import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-4 left-4 z-50">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full bg-purple-700 text-white shadow hover:bg-purple-900 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {isOpen && (
          <div className="absolute top-12 left-0 bg-purple-900 rounded-lg shadow p-4 space-y-2 w-56">
            <Link
              to="/"
              className="block text-white hover:text-purple-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-purple-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-white hover:text-purple-200"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/careers"
              className="block text-white hover:text-purple-200"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/booking"
              className="block text-white hover:text-purple-200"
              onClick={() => setIsOpen(false)}
            >
              Booking
            </Link>
            <Link
              to="/rewardpolicy"
              className="block text-white hover:text-purple-200"
              onClick={() => setIsOpen(false)}
            >
              Reward Policy
            </Link>
            <Link
              to="/paymentpolicy"
              className="block text-white hover:text-purple-200"
              onClick={() => setIsOpen(false)}
            >
              Payment Policy
            </Link>
            <Link
              to="/terms"
              className="block text-white hover:text-purple-200"
              onClick={() => setIsOpen(false)}
            >
              Terms & Conditions
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
