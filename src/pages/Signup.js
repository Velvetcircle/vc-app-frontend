import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState(""); // new field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // create the user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // update profile with display name
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      alert("Signup successful!");
      navigate("/account"); // redirect to account page
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Create Account</h1>
      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-700 text-white p-2 rounded hover:bg-purple-900"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
