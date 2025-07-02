import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can later connect to your backend or Firebase here
    console.log("Login submitted:", email, password);
    alert("Login feature coming soon!"); // placeholder
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center text-white bg-gradient-to-br from-[#3b0a28] to-[#1a0110] px-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow w-full max-w-sm">
        <h1 className="text-3xl font-bold text-purple-300 mb-4">🔒 Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded text-black"
              placeholder="you@example.com"
            />
          </div>
          <div className="text-left">
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded text-black"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-700 rounded hover:bg-purple-900 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
