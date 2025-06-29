import { useState } from "react";

export default function Home() {
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:velvetcircleindia@gmail.com?subject=Website Suggestion&body=${encodeURIComponent(suggestion)}`;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center text-white bg-gradient-to-br from-[#3b0a28] to-[#1a0110] px-4">
      <iframe
        className="w-full max-w-md aspect-video mb-4 rounded-xl shadow"
        src="https://www.youtube.com/embed/2tJP5NimruQ?autoplay=1&mute=0"
        title="Velvet Circle Intro"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>  
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-2 animate-slide-up">
        Because everyone deserves someone.
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl mt-8 w-full max-w-md animate-slide-up"
      >
        <label className="block text-purple-200 font-semibold mb-2">
          Share your suggestion
        </label>
        <textarea
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          className="w-full p-2 rounded text-black"
          placeholder="Type your idea here..."
          rows={3}
          required
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-purple-700 rounded hover:bg-purple-900 transition"
        >
          Send Suggestion
        </button>
      </form>
    </div>
  );
}
