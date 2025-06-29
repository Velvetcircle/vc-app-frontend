import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hero with velvet background */}
      <div
        className="relative w-full h-[250px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* fixed hamburger on left */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 left-4 p-2 rounded-full bg-black/70 text-white shadow hover:bg-black/90 transition z-50"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* glass effect headline */}
        <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow">
            Velvet Circle
          </h1>
          <p className="text-white text-sm mt-2 drop-shadow">
            Time-Based Companionship, Rooted in Respect.
          </p>
        </div>
      </div>

      {/* Side menu, same as before */}
      {isOpen && (
        <div className="fixed top-[250px] left-0 bg-black/80 backdrop-blur rounded-r-xl shadow p-4 space-y-3 w-60 z-50">
          <Link
            to="/"
            className="block text-white hover:text-rose-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-rose-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-white hover:text-rose-200"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/careers"
            className="block text-white hover:text-rose-200"
            onClick={() => setIsOpen(false)}
          >
            Careers
          </Link>
          <Link
            to="/booking"
            className="block text-white hover:text-rose-200"
            onClick={() => setIsOpen(false)}
          >
            Booking
          </Link>
          <Link
            to="/rewardpolicy"
            className="block text-white hover:text-rose-200"
            onClick={() => setIsOpen(false)}
          >
            Reward Policy
          </Link>
          <Link
            to="/paymentpolicy"
            className="block text-white hover:text-rose-200"
            onClick={() => setIsOpen(false)}
          >
            Payment Policy
          </Link>
          <Link
            to="/terms"
            className="block text-white hover:text-rose-200"
            onClick={() => setIsOpen(false)}
          >
            Terms & Conditions
          </Link>
        </div>
      )}
    </>
  );
}
