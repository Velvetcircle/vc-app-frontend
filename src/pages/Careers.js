import { Link } from "react-router-dom";

export default function Careers() {
  return (
    <div className="p-6 max-w-5xl mx-auto text-white space-y-6">
      <h1 className="text-3xl font-bold mb-4">💼 Careers at Velvet Circle</h1>
      <p>
        Welcome to Velvet Circle, India’s most discreet and premium lifestyle companionship platform — built on the foundation of trust, privacy, ethics, and emotional connection.
      </p>
      <p>
        We’re not just building a platform. We’re building a movement that redefines human connection — ethically, responsibly, and with class.
      </p>
      <p>
        If you're passionate about challenging stigma, building safe communities, and working in an environment where confidentiality is as important as creativity, we'd love to hear from you.
      </p>

      <h2 className="text-2xl font-semibold mt-6">🔍 Open Roles</h2>
      <div className="space-y-4 ml-4">
        <div>
          <strong>🧑‍🤝‍🧑 Lifestyle Volunteers (Companions)</strong> <br />
          Type: Freelance / Independent Partner <br />
          Location: Pan India <br />
          Eligibility:
          <ul className="list-disc ml-6">
            <li>18+ with valid ID (mandatory KYC)</li>
            <li>Emotionally mature, respectful, and open-minded</li>
            <li>Able to hold conversations, set personal boundaries, and maintain confidentiality</li>
            <li>Absolutely no solicitation, physical favors, or unethical intent allowed</li>
          </ul>
          <strong>🟢 Perks:</strong>
          <ul className="list-disc ml-6">
            <li>Flexible time</li>
            <li>Gift voucher-based appreciation</li>
            <li>Full privacy protection</li>
            <li>Empowered to accept/reject any request</li>
          </ul>
        </div>

        <div>
          <strong>👨‍💻 Backend Developer (Full Stack Preferred)</strong> <br />
          Type: Full-time / Remote / Contract <br />
          Tech Stack: Node.js, MongoDB, Firebase, AWS, REST APIs <br />
          Responsibilities:
          <ul className="list-disc ml-6">
            <li>Develop secure APIs and backend logic for user matching, ID verification, gifting, and session handling</li>
            <li>Integrate OTP and encrypted document flows</li>
            <li>Handle scalability, user logs, and internal moderation tools</li>
          </ul>
        </div>

        <div>
          <strong>🎨 UI/UX Designer</strong> <br />
          Type: Full-time / Freelance <br />
          Tools: Figma, Adobe XD, Notion <br />
          Responsibilities:
          <ul className="list-disc ml-6">
            <li>Design mobile-first companion and client experiences</li>
            <li>Focus on minimalism, trust-building UI, and secure interactions</li>
            <li>Create onboarding and profile flows for hidden identities</li>
          </ul>
        </div>

        <div>
          <strong>📱 Social Media Manager</strong> <br />
          Type: Part-time / Full-time <br />
          Responsibilities:
          <ul className="list-disc ml-6">
            <li>Manage brand presence on Instagram, Threads, LinkedIn (no adult platforms)</li>
            <li>Create content that is bold but not explicit</li>
            <li>Run behind-the-scenes, mental health, emotional support, and lifestyle campaigns</li>
            <li>Handle content moderation policies</li>
          </ul>
        </div>

        <div>
          <strong>🏃‍♂️ Field Operators (City-wise)</strong> <br />
          Type: On-call / Contractual <br />
          Responsibilities:
          <ul className="list-disc ml-6">
            <li>Support in local ID verification if needed</li>
            <li>Liaison with hotels/lifestyle venues (without revealing intent)</li>
            <li>Deliver gift vouchers or packages discreetly</li>
          </ul>
        </div>

        <div>
          <strong>🛒 Procurement Manager (Gifting & Operations)</strong> <br />
          Type: Full-time <br />
          Responsibilities:
          <ul className="list-disc ml-6">
            <li>Build a gifting supply chain (Amazon Pay, Uber, OYO, Zomato, wellness kits)</li>
            <li>Ensure timely, anonymous delivery</li>
            <li>Handle gifting partnerships without platform branding</li>
          </ul>
        </div>

        <div>
          <strong>🧑‍💼 Area Managers</strong> <br />
          Type: Full-time <br />
          Responsibilities:
          <ul className="list-disc ml-6">
            <li>Oversee volunteers, client operations, and complaints in their region</li>
            <li>Maintain legal compliance and platform standards</li>
            <li>Report escalations to core legal/moderation team</li>
          </ul>
        </div>

        <div>
          <strong>🌐 Translators (Regional)</strong> <br />
          Languages: Hindi, Marathi, Tamil, Bengali, Urdu, Punjabi, etc. <br />
          Type: Freelance <br />
          Responsibilities:
          <ul className="list-disc ml-6">
            <li>Translate platform content, training material, and helpdesk scripts</li>
            <li>Ensure respectful, clear, and stigma-free tone</li>
          </ul>
        </div>

        <div>
          <strong>🎧 Customer Support Executive</strong> <br />
          Type: Remote / Hybrid <br />
          Responsibilities:
          <ul className="list-disc ml-6">
            <li>Handle inquiries via WhatsApp, Email & In-App chat</li>
            <li>Maintain full confidentiality of client and volunteer data</li>
            <li>Work under strict NDA</li>
            <li>Escalate legal or policy-related queries properly</li>
          </ul>
        </div>

        <div>
          <strong>📋 Other Strategic Roles You Can Include:</strong>
          <ul className="list-disc ml-6">
            <li>Legal Compliance Advisor</li>
            <li>Digital Marketing Lead</li>
            <li>Privacy & Risk Analyst</li>
            <li>Training and Ethics Coach</li>
            <li>Volunteer Relationship Manager</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8">🌈 What You’ll Get</h2>
      <ul className="list-disc ml-6">
        <li>A bold, disruptive company with a mission rooted in ethics</li>
        <li>Anonymity and privacy-first tech culture</li>
        <li>Team that values respect over revenue</li>
        <li>Opportunity to build a nationwide lifestyle movement</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">🔐 Confidentiality is Non-Negotiable</h2>
      <p>
        All team members and freelancers must sign an NDA, internal conduct agreement, and pass internal background checks. We protect our people and our users — always.
      </p>

      <h2 className="text-2xl font-semibold mt-8">📩 How to Apply</h2>
      <p>
        Send your resume and a short intro about why you’d like to work with Velvet Circle to:
        <br />
        📧 <a href="mailto:careers@velvetcircle.in" className="underline">careers@velvetcircle.in</a>
        <br />
        📄 Subject: [Role Name] – [Your Name]
        <br />
        🕵️ All shortlisted candidates will be contacted confidentially.
      </p>

      {/* CTA Box */}
      <div className="bg-purple-700 border border-white p-4 rounded-lg text-center mt-8">
        <h3 className="text-xl font-semibold mb-2">Interested in Volunteering?</h3>
        <p>Click below to apply as a volunteer companion with Velvet Circle.</p>
        <Link
          to="/volunteer"
          className="inline-block mt-4 px-6 py-2 bg-white text-purple-700 rounded hover:bg-gray-200 font-semibold"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}

