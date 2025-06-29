import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:velvetcircleindia@gmail.com?subject=Suggestion&body=${encodeURIComponent(
      suggestion
    )}`;
    setSuggestion("");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-950 to-purple-800 text-white flex flex-col items-center justify-center p-4 space-y-6">
      <Navbar />

      <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl border-4 border-purple-600 mt-12">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/2tJP5NimruQ?autoplay=1&mute=0&controls=0&rel=0&showinfo=0&loop=1&playlist=2tJP5NimruQ"
          title="Velvet Circle Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <h2 className="text-xl md:text-2xl text-center italic mt-4">
        Where companionship meets empathy — beyond words, beyond judgment.
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-purple-700 p-4 rounded-xl shadow space-y-4 mt-6"
      >
        <label htmlFor="suggestion" className="font-semibold text-white">
          💡 Share your suggestion with us:
        </label>
        <textarea
          id="suggestion"
          className="w-full p-2 rounded text-black"
          rows="4"
          placeholder="Type your thoughts here..."
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-purple-900 hover:bg-purple-950 transition px-6 py-2 rounded shadow text-white"
        >
          Send Suggestion
        </button>
      </form>
    </div>
  );
}
