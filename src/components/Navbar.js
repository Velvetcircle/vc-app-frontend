import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // make sure you have this configured

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-[#3b0a28] to-[#1a0110] text-white shadow-md border-b border-purple-700">
      {/* Left side: Hamburger */}
      <button className="text-xl px-2">
        <span className="material-icons">menu</span>
      </button>

      {/* Center: Logo text */}
      <Link to="/" className="text-lg font-bold tracking-wide">
        Velvet Circle
      </Link>

      {/* Right side: Vision + Account */}
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
  );
}
