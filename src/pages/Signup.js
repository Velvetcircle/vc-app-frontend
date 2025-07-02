import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";   // <-- added

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);  // <-- added
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please verify captcha before signing up.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });

      emailjs.send(
        "service_jpjmuag",
        "template_hqehyif",
        {
          email: email,
        },
        "PUHC6khm1oc6Wz6vK"
      );

      alert("Signup successful!");
      navigate("/account");
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
          className="w-full p-2 border rounded text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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

        {/* captcha component */}
        <ReCAPTCHA
          sitekey="6LeM_nQrAAAAAMSRV0YbM19ri-6Ucn8NXDZh1jS9" // replace with your actual site key
          onChange={(value) => setCaptchaValue(value)}
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
