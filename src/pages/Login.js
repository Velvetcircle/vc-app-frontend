import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Firebase login
      await signInWithEmailAndPassword(auth, email, password);

      // Send login confirmation email via EmailJS
      emailjs
        .send(
          "service_jpjmuag",     // your EmailJS service ID
          "template_we3rnra",     // your EmailJS template ID
          {
            email: email,         // optional
          },
          "PUHC6khm1oc6Wz6vK"      // your EmailJS public key
        )
        .then(
          (response) => {
            console.log("✅ Login email sent successfully", response);
            alert("Login successful! Confirmation email sent.");
            navigate("/"); // redirect after login
          },
          (error) => {
            console.error("❌ Email failed to send", error);
            alert("Login successful, but email not sent: " + error.text);
            navigate("/"); // still redirect even if email fails
          }
        );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Log In</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-700 text-white p-2 rounded hover:bg-purple-900"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
