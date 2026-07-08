import { useState } from "react";
import SignIn from "./SignIn";

export default function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-pink-300 text-gray-700 text-sm py-2 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="flex space-x-6">
          <span>📞 +91 98765 43210</span>
          <span>✉️ support@iora.com</span>
        </div>
        <div className="hidden md:block text-teal-600 font-medium">
          FREE shipping on orders over ₹999 ♡
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-1 bg-teal-600 text-white rounded-md hover:bg-teal-400 transition"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Popup Modal */}
    {open && (
  <div
    className="fixed inset-0 z-[999] bg-black/30 backdrop-blur-md overflow-y-auto"
    onClick={() => setOpen(false)}
  >
    <div className="min-h-screen flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white shadow-lg text-gray-600 hover:text-red-500"
        >
          ✕
        </button>

        <SignIn />
      </div>
    </div>
  </div>
)}
    </div>
  );
}
