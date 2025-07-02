import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-gradient-to-r from-[#3b0a28] to-[#1a0110] text-white shadow-md border-b border-purple-700 z-50 fixed top-0 left-0 w-full">
        {/* Left: Hamburger */}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full hover:bg-rose-800 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center: Logo text */}
        <Link to="/" className="text-lg font-bold tracking-wide">
          Velvet Circle
        </Link>

        {/* Right: Vision + Account */}
        <div className="flex items-center space-x-4">
          <Link
            to="/vision"
            className="hover:text-rose-300 text-sm font-semibold"
          >
            Vision
          </Link>
          <Link
            to={user ? "/account" : "/login"}
            className="w-8 h-8 rounded-full overflow-hidden border border-white"
          >
            <img
              src={
                user && user.photoURL
                  ? user.photoURL
                  : "/assets/blank-user.png"
              }
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </header>

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
          <Link to="/faq" onClick={() => setIsOpen(false)} className="block hover:text-rose-200">
            FAQ
          </Link>
        </div>
      )}
    </>
  );
}
