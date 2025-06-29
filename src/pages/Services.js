import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-white space-y-6">
      <h1 className="text-3xl font-bold text-purple-300 mb-4">
        🌸 Our Services – For When You Just Need Someone
      </h1>
      <p>
        At Velvet Circle, we understand that life isn’t always easy. Sometimes, you don’t need therapy, advice, or a crowd —
        <br />
        You just need someone.
      </p>
      <p>
        Someone who listens.<br />
        Someone who stays.<br />
        Someone who doesn’t judge.
      </p>
      <p>
        Velvet Circle offers time-based, non-intimate companionship — designed for moments when emotions weigh heavier than words.
      </p>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">🕊️ We’re Here When You...</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>💔 Had a breakup and can't face the silence alone</li>
          <li>🧠 Are mentally drained after work and just need someone to talk to</li>
          <li>😔 Feel alone in a crowd, and wish someone really understood you</li>
          <li>💬 Just want to vent without being fixed</li>
          <li>🌧️ Are going through heartbreak, anxiety, grief, or sadness</li>
          <li>🧘 Need a peaceful presence — a coffee date, a book buddy, or a silent walk</li>
          <li>🪞 Want to feel seen, heard, and valued — without expectations</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">💠 What We Offer</h2>
        <table className="w-full text-left border border-white border-opacity-20 rounded-lg overflow-hidden">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="p-2">Service Type</th>
              <th className="p-2">Description</th>
            </tr>
          </thead>
          <tbody className="bg-purple-900 bg-opacity-40">
            <tr>
              <td className="p-2">Companion Sessions</td>
              <td className="p-2">
                Book a verified volunteer for a pre-scheduled, private one-on-one time — just talk, relax, share space, or unwind
              </td>
            </tr>
            <tr>
              <td className="p-2">Emotional Support Time</td>
              <td className="p-2">
                Request a listener during tough moments — a virtual or in-person presence when you don’t want to be alone
              </td>
            </tr>
            <tr>
              <td className="p-2">Mindful Outings</td>
              <td className="p-2">
                Attend public spaces like cafés, art galleries, nature spots, or events with someone respectful beside you
              </td>
            </tr>
            <tr>
              <td className="p-2">Celebration Presence</td>
              <td className="p-2">
                Alone on your birthday? Want to celebrate a small win with someone? We’re here
              </td>
            </tr>
            <tr>
              <td className="p-2">Silent Sessions</td>
              <td className="p-2">
                Sometimes you don’t want to talk — just sit beside someone and be. We honour that, too
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-xl font-semibold">⚠️ What We Do Not Offer</h2>
        <ul className="list-disc ml-6 space-y-1 text-red-300">
          <li>❌ No sexual or physical favors</li>
          <li>❌ No escorting or adult services</li>
          <li>❌ No judgment or emotional manipulation</li>
          <li>❌ No pressure to talk or perform</li>
        </ul>
      </section>

      <section className="bg-purple-800 p-4 rounded-xl shadow space-y-2 mt-6">
        <h2 className="text-xl font-semibold">🔐 100% Confidential & Consensual</h2>
        <p>
          All services are fully voluntary, ID-verified for safety, protected by mutual consent & privacy policies, and guided by each individual’s personal boundaries.
        </p>
      </section>

      <footer className="text-center mt-6">
        <p className="mb-2">🛡️ Because everyone deserves someone — even if just for a while.</p>
        {/* Replace the # below with your actual Google Form link later */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScjdAPEW1QMlhGlFIY5FaLZght5OXu1e0Be_7qvjMiHMZZUvQ/viewform?usp=sharing&ouid=105710170711084264256"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-700 hover:bg-purple-900 text-white px-6 py-3 rounded-xl shadow transition"
        >
          Book Now
        </a>
      </footer>
    </div>
  );
}
