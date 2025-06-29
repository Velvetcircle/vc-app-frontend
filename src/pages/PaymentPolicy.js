export default function PaymentPolicy() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-white space-y-6">
      <h1 className="text-3xl font-bold text-purple-300 mb-4">💳 Velvet Circle – Payment & Refund Policy</h1>
      <p className="italic">Effective Date: [Insert Date]<br/>Last Updated: [Insert Date]</p>

      <section className="space-y-2">
        <p>
          Velvet Circle is a lifestyle companionship platform that values your time, privacy, and clarity. This Payment & Refund Policy outlines our fee structure, payment terms, cancellation rules, and refund eligibility.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">💠 1. Registration & Platform Fee</h2>
        <p>
          A non-refundable platform access fee of ₹99 + GST (total ₹116.82) is applicable at the time of onboarding or initiating a service request.
        </p>
        <p>
          This fee is mandatory for both Clients and Volunteers to access the basic platform features.
        </p>
        <p>
          This fee does not guarantee any bookings or rewards — it covers verification, platform maintenance, and internal processing.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">💼 2. Service Charges & Booking Process</h2>
        <p>
          After the onboarding and request submission, our team will calculate and share the total session charges via email or secure message based on the chosen preferences, city, timing, and other factors.
        </p>
        <p>The total price shared includes:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Companionship time (basic service)</li>
          <li>GST (18%)</li>
          <li>Platform coordination</li>
        </ul>
        <p>
          There are no hidden charges for basic services.
        </p>
        <p className="font-semibold">Note:</p>
        <p>
          Additional services like gifting, experience packages, custom events, or travel assistance may be charged separately and are optional.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">🛒 3. Add-Ons & Optional Features</h2>
        <table className="w-full text-left border border-white border-opacity-20 rounded-lg overflow-hidden">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="p-2">Add-On Type</th>
              <th className="p-2">Chargeable?</th>
              <th className="p-2">Notes</th>
            </tr>
          </thead>
          <tbody className="bg-purple-900 bg-opacity-40">
            <tr>
              <td className="p-2">Special Gifting Packs</td>
              <td className="p-2">✅ Yes</td>
              <td className="p-2">Optional — via voucher or wellness partner</td>
            </tr>
            <tr>
              <td className="p-2">Hotel/Venue Coupons</td>
              <td className="p-2">✅ Yes</td>
              <td className="p-2">If chosen through our partner program</td>
            </tr>
            <tr>
              <td className="p-2">Extended Time Blocks</td>
              <td className="p-2">✅ Yes</td>
              <td className="p-2">Calculated on a per-hour basis</td>
            </tr>
            <tr>
              <td className="p-2">Translator Support</td>
              <td className="p-2">✅ Yes</td>
              <td className="p-2">Region-specific charge may apply</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-xl font-semibold">🔁 4. Cancellation & Refund Policy</h2>
        <p>
          We understand that plans can change. However, to protect the time and effort of all involved, our cancellation terms are as follows:
        </p>
        <table className="w-full text-left border border-white border-opacity-20 rounded-lg overflow-hidden mt-4">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="p-2">Time of Cancellation</th>
              <th className="p-2">Refund Eligibility</th>
            </tr>
          </thead>
          <tbody className="bg-purple-900 bg-opacity-40">
            <tr>
              <td className="p-2">Within 24 hours of booked time</td>
              <td className="p-2">50% of the session amount will be deducted as cancellation charge</td>
            </tr>
            <tr>
              <td className="p-2">Instant cancellation (within 10 minutes of booking)</td>
              <td className="p-2">5% fee applicable as processing cost</td>
            </tr>
            <tr>
              <td className="p-2">After session starts or no-show</td>
              <td className="p-2">❌ No refund applicable</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-red-300">Platform fee of ₹99 + GST is non-refundable under all circumstances.</p>
        <p>Refunds (if eligible) are processed within 7–10 working days to the original payment method.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">📜 5. Tax & Invoicing</h2>
        <p>
          All amounts displayed or shared include GST (currently 18%). Velvet Circle is a legally compliant entity. Proper GST invoices are issued on request for any paid session or add-on service.
        </p>
        <p>
          No client is expected to pay additional cash or unbilled charges beyond what is shared via email/official invoice.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">❌ 6. No Cash or Offline Transactions</h2>
        <p>
          All payments must be made via secure digital methods provided on the platform.
        </p>
        <p>
          Velvet Circle does not authorize any cash payments, direct transactions, or informal exchanges.
        </p>
        <p>
          If any volunteer or client suggests such arrangements, report them immediately to:
        </p>
        <p className="font-bold">📧 report@velvetcircle.in</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">📌 7. Payment Disputes</h2>
        <p>
          Any dispute regarding overcharges or unauthorized deductions must be raised within 72 hours of the session.
        </p>
        <p>
          Velvet Circle reserves the right to review and resolve disputes based on platform data, session logs, and internal verification.
        </p>
        <p>
          Misuse of payment systems or false claims may result in permanent account suspension.
        </p>
      </section>

      <footer className="bg-purple-800 p-4 rounded-xl shadow mt-6 text-center">
        <p className="font-semibold">🛡️ Final Note</p>
        <p>
          By making a payment to Velvet Circle, you agree that you understand the nature of services (companionship only), you have read and accepted this Payment & Refund Policy, and you accept our non-refundability clause for registration and cancellation terms.
        </p>
      </footer>
    </div>
  );
}

