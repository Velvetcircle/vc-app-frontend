import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

export default function Account() {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) {
        setDisplayName(u.displayName || "");
        setPhoto(u.photoURL || "");
        // phone and gender would come from Firestore later
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth);
  };

  const handleSaveProfile = async () => {
    try {
      await updateProfile(user, {
        displayName,
        photoURL: photo,
      });
      alert("Profile updated!");
      // you can also store phone/gender to Firestore here later
    } catch (e) {
      alert(e.message);
    }
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
    <div className="p-8 mt-16 text-purple-100 bg-purple-900 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center">Welcome, {displayName || user.email}</h2>

      {/* Profile picture */}
      <div className="flex justify-center mb-4">
        <img
          src={photo || "/assets/blank-user.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border border-white"
        />
      </div>

      {/* Edit profile form */}
      <div className="bg-purple-700 bg-opacity-40 rounded-xl p-4 mb-6 max-w-md mx-auto space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full p-2 rounded border text-black"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 rounded border text-black"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 rounded border text-black"
          >
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Profile Picture URL</label>
          <input
            type="text"
            placeholder="Paste image link here"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full p-2 rounded border text-black"
          />
        </div>
        <button
          onClick={handleSaveProfile}
          className="bg-green-600 hover:bg-green-800 px-4 py-2 rounded text-white w-full"
        >
          Save Profile
        </button>
      </div>

      {/* Bookings preview */}
      <div className="bg-purple-700 bg-opacity-40 rounded-xl p-4 mb-6 max-w-md mx-auto">
        <h3 className="text-xl font-semibold mb-2">My Bookings</h3>
        <p className="text-sm">Currently no bookings. Firestore connection needed.</p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSignOut}
          className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
