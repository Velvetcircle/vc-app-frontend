import { useEffect, useState } from "react";
import { auth } from "../firebase"; // you must have initialized firebase in a firebase.js
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
      <div className="text-center p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">My Account</h2>
        <p>Please log in to see your account details.</p>
      </div>
    );
  }

  return (
    <div className="text-center p-8 text-white">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.email}</h2>

      <div className="bg-purple-800 bg-opacity-30 rounded-xl p-4 mb-4">
        <h3 className="text-xl font-semibold mb-2">My Bookings</h3>
        <p>Currently you have no bookings. (you will need to connect to Firestore later to show bookings here)</p>
      </div>

      <div className="bg-purple-800 bg-opacity-30 rounded-xl p-4 mb-4">
        <h3 className="text-xl font-semibold mb-2">My Profile</h3>
        <p>Account: {user.email}</p>
        <p>More details you can store later in Firestore if needed.</p>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-red-600 rounded hover:bg-red-800"
        onClick={handleSignOut}
      >
        Log Out
      </button>
    </div>
  );
}
