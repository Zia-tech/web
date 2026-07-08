import { Link } from "react-router-dom";
import SurpriseCouponPopup from "./SurpriseCouponPopup";

export default function Navbar() {
  return (
    <nav className="bg-purple-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center h-auto sm:h-16 gap-4 sm:gap-0">
        
        {/* Left: Logo */}
        <h1 className="text-3xl font-serif text-teal-800">IORA ♡</h1>
        
        {/* Center: Menu links */}
        <ul className="flex flex-col sm:flex-row sm:space-x-8 text-gray-700 font-medium text-center sm:text-left">
          <li>
            <Link to="/" className="hover:text-green-800 transition block py-2 sm:py-0">
              Home
            </Link>
          </li>
          <li>
            <Link to="/KidsProducts" className="hover:text-green-800 transition block py-2 sm:py-0">
              Kids Products
            </Link>
          </li>
          <li>
            <Link to="/Faq" className="hover:text-green-800 transition block py-2 sm:py-0">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-800 transition block py-2 sm:py-0">
              Customer Care
            </Link>
          </li>
        </ul>

        {/* Right: CTA button */}
        <div className="mt-2 sm:mt-0">
          <SurpriseCouponPopup />
        </div>
      </div>
    </nav>
  );
}
