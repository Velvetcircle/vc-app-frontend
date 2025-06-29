import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Terms from "./pages/Terms";
import PaymentPolicy from "./pages/PaymentPolicy";
import RewardPolicy from "./pages/RewardPolicy";
import Careers from "./pages/Careers";
import Booking from "./pages/Booking";
import VolunteerApplication from "./pages/VolunteerApplication";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/payment-policy" element={<PaymentPolicy />} />
          <Route path="/reward-policy" element={<RewardPolicy />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/volunteer" element={<VolunteerApplication />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

