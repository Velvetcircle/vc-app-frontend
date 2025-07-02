import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const navigate = useNavigate();

  const handleCaptcha = (value) => {
    setCaptchaValue(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // send email with EmailJS
      emailjs.send(
        "service_jpjmuag",
        "template_we3rnra",
        { 
        email: email,
        },
        "PUHC6khm1oc6Wz6vK"
      );

      alert("Login successful!");
      navigate("/");

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
        <ReCAPTCHA
          sitekey="6LeM_nQrAAAAAMSRV0YbM19ri-6Ucn8NXDZh1jS9"
          onChange={handleCaptcha}
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
