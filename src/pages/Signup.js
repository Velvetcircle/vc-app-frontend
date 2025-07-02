import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Signup() {
  const [name, setName] = useState(""); // name field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // create firebase user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // update display name
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      // send welcome email
      emailjs.send(
        "service_jpjmuag",         // your service ID
        "template_hqehyif",        // your template ID
        {
          user_name: name,         // assuming template uses user_name
          user_email: email,       // assuming template uses user_email
        },
        "PUHC6khm1oc6Wz6vK"        // your public key
      );

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
