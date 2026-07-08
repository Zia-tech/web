import { Link } from "react-router-dom";
import { useState } from "react";
import Confetti from "react-confetti";

export default function SurpriseCouponPopup() {
  const [open, setOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <div>
      {/* Cute Deals Button */}
      <button
        onClick={handleOpen}
        className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-400 transition"
      >
        Get Cute Deals
      </button>

      {/* Popup */}
      {open && (
        <div
          className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            {showConfetti && <Confetti numberOfPieces={250} recycle={false} />}

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-purple-500 hover:text-purple-700 text-xl"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-pink-600 mb-2">
              🎉 Congratulations!
            </h2>
            <p className="text-gray-700 mb-2">
              You got a special coupon just for you!
            </p>
            <p className="text-lg font-semibold text-orange-500 mb-6">
              Use Code: <span className="bg-orange-100 px-2 py-1 rounded">CUTE20</span>
            </p>

            {/* ✅ Shop Now navigates to KidsProducts */}
            <Link
              to="/kidsProducts"
              className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-400 transition block"
            >
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
