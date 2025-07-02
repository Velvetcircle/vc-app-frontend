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
import Faq from "./pages/Faq";
import Vision from "./pages/Vision";
import Login from "./pages/Login";         // if you add Login
import Signup from "./pages/Signup";       // if you add Signup
import Account from "./pages/Account";

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
          <Route path="/paymentpolicy" element={<PaymentPolicy />} />
          <Route path="/rewardpolicy" element={<RewardPolicy />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/volunteer" element={<VolunteerApplication />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/login" element={<Login />} />         {/* optional */}
          <Route path="/signup" element={<Signup />} />       {/* optional */}
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
