import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Account() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth);
  };

  if (!user) {
    return (
      <div className="text-center p-8 mt-16 text-purple-100 bg-purple-900 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">My Account</h2>
        <p className="text-sm">You are not logged in. Please log in to view your account details.</p>
      </div>
    );
  }

  return (
    <div className="text-center p-8 mt-16 text-purple-100 bg-purple-900 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.displayName || user.email}</h2>

      <div className="bg-purple-700 bg-opacity-40 rounded-xl p-4 mb-6">
        <h3 className="text-xl font-semibold mb-2">My Bookings</h3>
        <p className="text-sm">Currently you have no bookings. (Connect Firestore later to show bookings.)</p>
      </div>

      <div className="bg-purple-700 bg-opacity-40 rounded-xl p-4 mb-6">
        <h3 className="text-xl font-semibold mb-2">My Profile</h3>
        <p>Email: {user.email}</p>
        {/* you can later show more user info here from Firestore */}
      </div>

      <button
        onClick={handleSignOut}
        className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded transition"
      >
        Log Out
      </button>
    </div>
  );
}
