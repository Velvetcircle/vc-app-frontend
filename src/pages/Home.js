import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6 max-w-5xl mx-auto text-white space-y-8">
      <h1 className="text-4xl font-bold mb-4 text-purple-300">🟣 Velvet Circle</h1>
      <h2 className="text-2xl font-semibold mb-4">Time-Based Companionship. Built on Consent. Rooted in Respect.</h2>

      <section className="space-y-4">
        <h3 className="text-xl font-bold">🕊️ Redefining Connection</h3>
        <p>
          At Velvet Circle, we believe not all connections are physical — some are emotional, intellectual, or simply comforting.
          We connect you with real people for real moments — where time is valued, boundaries are respected, and privacy is absolute.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold">👁️ Confidential. Consensual. Classy.</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Anonymous Profiles for both clients & companions</li>
          <li>ID-verified Members Only (18+)</li>
          <li>Strict No-Solicitation Policy</li>
          <li>Zero Tolerance for Sexual or Unethical Activity</li>
          <li>Appreciation Through Gifting, Never Transactions</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold">💠 What We Offer</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Lifestyle Companionship for conversation, support, or events</li>
          <li>Verified Volunteers empowered to choose whom, when, and how they meet</li>
          <li>Gift-Based Recognition System — no service payments</li>
          <li>Discreet Meetups, on your terms</li>
          <li>Emotional Boundaries. Physical Safety. No Pressure.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold">💼 For Professionals & Volunteers</h3>
        <p>
          Whether you’re looking for meaningful companionship or want to contribute as a lifestyle volunteer, we provide a safe,
          respectful, and fully legal platform for everyone.
        </p>
        <p>
          We don’t sell services. We create space for human experiences.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold">🛡️ Safety Is Our Priority</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Full KYC & ID verification</li>
          <li>Mutual consent digital contracts</li>
          <li>Hidden identities & aliases</li>
          <li>No chat tracking or call logs</li>
          <li>24/7 support & immediate reporting system</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold">🌈 For All Genders & Backgrounds</h3>
        <p>
          We proudly support companions and clients across all genders, identities, and regions. Velvet Circle is a no-judgement
          space, where inclusivity is more than a checkbox — it’s the culture.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold">📬 Ready to Join the Circle?</h3>
        <p>
          Whether you seek mindful company or want to be someone’s calm in chaos —
          Velvet Circle is where meaningful moments begin.
        </p>
        <div className="space-y-2">
          <Link
            to="/volunteer"
            className="block bg-white text-purple-700 rounded px-4 py-2 font-semibold hover:bg-gray-200"
          >
            👉 Apply as a Volunteer
          </Link>
          <Link
            to="/book"
            className="block bg-white text-purple-700 rounded px-4 py-2 font-semibold hover:bg-gray-200"
          >
            👉 Book a Companion Experience
          </Link>
          <Link
            to="/gifting"
            className="block bg-white text-purple-700 rounded px-4 py-2 font-semibold hover:bg-gray-200"
          >
            👉 Explore Gifting & Partnerships
          </Link>
        </div>
      </section>

      <footer className="mt-12 text-center text-purple-300">
        🕊️ Because sometimes, you don’t need a crowd. You need connection.
      </footer>
    </div>
  );
}
