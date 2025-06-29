export default function Booking() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-white space-y-6">
      <h1 className="text-3xl font-bold text-purple-300 mb-4">
        🗓️ Make a Booking – Begin Your Velvet Experience
      </h1>
      <p>
        At Velvet Circle, booking a companion is not about transactions — it's about meaningful human moments. Whether you need someone to talk to, walk with, dine with, or simply share silence, we’re here to help you feel seen, heard, and never judged.
      </p>

      <h2 className="text-xl font-semibold mt-4">🧾 How It Works</h2>
      <ol className="list-decimal ml-6 space-y-2">
        <li>
          <span className="font-semibold">Fill the Booking Form:</span> Provide basic details:
          <ul className="list-disc ml-6">
            <li>Preferred Date & Time</li>
            <li>Duration of Companionship</li>
            <li>City/Location</li>
            <li>Preferred Volunteer Type (optional: Male, Female, LGBTQ+ or No Preference)</li>
            <li>Add-ons (Gift voucher, translator, extended hours, etc.)</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Pay the Access Fee:</span> A ₹99 + GST (non-refundable) platform fee is required to process your booking request. (This covers verification, internal coordination & safety measures.)
        </li>
        <li>
          <span className="font-semibold">Receive a Private Estimate:</span> Based on your preferences, a customized quote will be shared on your registered email or WhatsApp. All pricing is inclusive of GST. No hidden charges.
        </li>
        <li>
          <span className="font-semibold">Confirm & Proceed:</span> After reviewing the quote, you’ll be asked to confirm and complete payment.
        </li>
        <li>
          <span className="font-semibold">Get Connected:</span> Upon payment, you’ll receive the alias and contact method of your companion, and venue coordination (if applicable) will begin.
        </li>
      </ol>

      <h2 className="text-xl font-semibold mt-4">🛑 Important Guidelines</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Velvet Circle does NOT provide or promote sexual services</li>
        <li>All sessions are emotionally-driven companionships, not physical</li>
        <li>Volunteers are independent individuals who choose to accept or decline based on comfort and availability</li>
        <li>Bookings are subject to availability and mutual consent</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">💬 What You Can Do With a Companion</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Have a coffee, lunch, or dinner</li>
        <li>Walk, read, attend a public event</li>
        <li>Share your thoughts, vent, or simply sit in silence</li>
        <li>Celebrate a birthday or occasion with someone present</li>
        <li>Request a quiet, respectful emotional presence</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 text-red-300">❌ What You Cannot Do</h2>
      <ul className="list-disc ml-6 space-y-1 text-red-300">
        <li>Demand, request, or imply any sexual/physical favors</li>
        <li>Offer cash tips, negotiations, or personal gifts outside platform</li>
        <li>Violate agreed timings, location terms, or boundaries</li>
        <li>Record, track, or disclose your companion’s identity</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">⚖️ Cancellations & Refunds</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>50% deduction if canceled within 24 hours of the session</li>
        <li>5% deduction for instant cancellations (within 10 minutes)</li>
        <li>No refund for no-shows or post-session disputes</li>
        <li>Access fee (₹99 + GST) is non-refundable in all cases</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">🛡️ Your Privacy is Safe</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Your real name is never shared — you’re assigned a secure alias</li>
        <li>Your chats and conversations remain confidential</li>
        <li>We do not track personal meeting locations</li>
        <li>All interactions follow our Consent, Confidentiality, and No-Judgment Policy</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">🎁 Add-ons (Optional)</h2>
      <table className="w-full border border-purple-500 text-center mt-2">
        <thead>
          <tr className="bg-purple-800 text-white">
            <th className="border border-purple-500 p-2">Add-On</th>
            <th className="border border-purple-500 p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-purple-500 p-2">Experience Voucher</td>
            <td className="border border-purple-500 p-2">Amazon/OYO/Uber/Swiggy – Gift for companion</td>
          </tr>
          <tr>
            <td className="border border-purple-500 p-2">Extended Duration</td>
            <td className="border border-purple-500 p-2">Extra time blocks, based on availability</td>
          </tr>
          <tr>
            <td className="border border-purple-500 p-2">Translator</td>
            <td className="border border-purple-500 p-2">For language support, if requested</td>
          </tr>
          <tr>
            <td className="border border-purple-500 p-2">Special Occasion Setup</td>
            <td className="border border-purple-500 p-2">Celebration coordination support</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-8 flex justify-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScjdAPEW1QMlhGlFIY5FaLZght5OXu1e0Be_7qvjMiHMZZUvQ/viewform?usp=sharing&ouid=105710170711084264256"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-700 hover:bg-purple-900 text-white px-6 py-3 rounded-full text-lg font-semibold shadow"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
