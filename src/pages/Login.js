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
      await signInWithEmailAndPassword(auth, email, password);

      // after firebase login
      emailjs
        .send(
          "service_jpjmuag",     // your service ID
          "template_we3rnra",     // your login template ID
          {
            user_email: email,
          },
          "PUHC6khm1oc6Wz6vK"     // your public key
        )
        .then(
          (response) => {
            console.log("✅ Login email sent successfully", response);
            alert("Login successful! Email sent.");
            navigate("/");  // redirect
          },
          (error) => {
            console.error("❌ Email failed to send", error);
            alert("Login successful, but email not sent: " + error.text);
            navigate("/");  // still redirect even if email fails
          }
        );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Log In</h1>
      <form onSubmit={handleLogin} className="space-y-4">
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
          className="w-full bg-purple-700 text-white p-2 rounded"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
