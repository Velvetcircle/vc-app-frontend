export default function VolunteerApplication() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-white space-y-6">
      <h1 className="text-3xl font-bold mb-4">🤝 Ready to Join Us?</h1>
      <p>
        We’re thrilled that you want to become a Velvet Circle Family Member. Please fill out
        the application form below. Your information will remain confidential and only be used to
        verify your eligibility.
      </p>
      <div className="mt-6">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScInAwFdfL5pGhmd81CPaCeX_z55nGqIoYL7lwiu4V8_0EpXg/viewform?embedded=true"
          width="100%"
          height="1200"
          frameBorder="0"
          className="rounded-xl shadow-lg"
          title="Velvet Circle Volunteer Application"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
