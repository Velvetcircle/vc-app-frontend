import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Fixed top header with border */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-3 bg-black/70 text-white border-b border-rose-500 z-50">
        {/* Hamburger on left */}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full hover:bg-rose-800 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Right side links */}
        <div className="flex space-x-4 text-sm font-semibold">
          <Link to="/faq" className="hover:text-rose-300">
            FAQ
          </Link>
          <Link to="/vision" className="hover:text-rose-300">
            Vision
          </Link>
          <Link to="/login" className="hover:text-rose-300">
            Login
          </Link>
        </div>
      </header>

      {/* Hero background image */}
      <div
        className="relative w-full h-[250px] flex items-center justify-center mt-14"
        style={{
          backgroundImage: "url('/assets/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow">
            Velvet Circle
          </h1>
          <p className="text-white text-sm mt-2 drop-shadow">
            Time-Based Companionship, Rooted in Respect.
          </p>
        </div>
      </div>

      {/* Side menu */}
      {isOpen && (
        <div className="fixed top-14 left-0 bg-black/80 backdrop-blur rounded-r-xl shadow p-4 space-y-3 w-60 z-50">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-rose-200">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-rose-200">
            About
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block hover:text-rose-200">
            Services
          </Link>
          <Link to="/careers" onClick={() => setIsOpen(false)} className="block hover:text-rose-200">
            Careers
          </Link>
          <Link to="/booking" onClick={() => setIsOpen(false)} className="block hover:text-rose-200">
            Booking
          </Link>
          <Link to="/rewardpolicy" onClick={() => setIsOpen(false)} className="block hover:text-rose-200">
            Reward Policy
          </Link>
          <Link to="/paymentpolicy" onClick={() => setIsOpen(false)} className="block hover:text-rose-200">
            Payment Policy
          </Link>
          <Link to="/terms" onClick={() => setIsOpen(false)} className="block hover:text-rose-200">
            Terms & Conditions
          </Link>
        </div>
      )}
    </>
  );
}
