import { Link } from "react-router-dom";
import SurpriseCouponPopup from "./SurpriseCouponPopup";
export default function Navbar() {
  return (
    <nav className="bg-purple-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Left: Logo */}
      
        
        {/* Center: Menu links */}
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-green-800 transition">
              Home
            </Link>
          </li>
         
          <li>
            <Link to="/KidsProducts" className="hover:text-green-800 transition">
              Kids Products
            </Link>
          </li>
           <li>
            <Link to="/Faq" className="hover:text-green-800 transition">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-800 transition">
              Customer Care
            </Link>
          </li>
        </ul>

        {/* Right: CTA button */}
        <SurpriseCouponPopup />
      </div>
    </nav>
  );
}
