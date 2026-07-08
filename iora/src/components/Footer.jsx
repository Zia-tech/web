import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-rose-100 text-gray-700 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-teal-400">iora ♡</h3>
          <p className="mt-2 text-sm">
            Cute baby dresses & cozy outfits for every little star ✨
          </p>
        </div>

        {/* Information */}
        <div>
          <h4 className="font-bold text-teal-600 mb-2">Information</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="font-bold text-teal-600 mb-2">Customer Service</h4>
          <ul className="space-y-1 text-sm">
            <li>Shipping Policy</li>
            <li>Returns & Exchanges</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-teal-600 mb-2">Get In Touch</h4>
          <p className="text-sm">✉️ hello@iora.com</p>
          <p className="text-sm">📞 +91 98765 43210</p>
        </div>
      </div>

      {/* Bottom line */}
      <p className="text-center text-xs mt-8 text-gray-600">
        © 2026 iora. All Rights Reserved.
      </p>
    </footer>
  );
}
