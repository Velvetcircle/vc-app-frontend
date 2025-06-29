import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-velvet p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Velvet Circle</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/booking">Book</Link>
        <Link to="/volunteer">Volunteer</Link>
      </div>
    </nav>
  );
}

