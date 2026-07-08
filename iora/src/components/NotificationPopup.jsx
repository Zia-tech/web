import { useState } from "react";

export default function NotificationPopup() {
  const [open, setOpen] = useState(false);

  // ✅ Example notifications (including coupons)
  const notifications = [
    { id: 1, text: "🎉 Flat 20% OFF with coupon CUTE20!", time: "Just now" },
    { id: 2, text: "🚚 Your order #1234 has been shipped.", time: "2h ago" },
    { id: 3, text: "💳 Payment successful for order #5678.", time: "1d ago" },
    { id: 4, text: "⭐ New arrivals in Women's Fashion!", time: "2d ago" },
    { id: 5, text: "🎁 Special Offer: Buy 2 Get 1 Free!", time: "3d ago" },
  ];

  return (
    <div className="relative inline-block">
      {/* Notification Bell Button */}
      <button
        onClick={() => setOpen(true)}
        className="relative text-2xl text-pink-500 hover:text-pink-400 transition"
      >
        🔔
        {/* ✅ Badge Counter */}
        {notifications.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 rounded-full">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 bg-purple-100 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-pink-500 hover:text-pink-400 text-xl"
            >
              ✖
            </button>

            {/* Heading */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Notifications
            </h2>
            <hr className="border-t border-gray-300 mb-4" />

            {/* ✅ Notification List */}
            {notifications.length === 0 ? (
              <p className="text-gray-600 text-center">No Notifications</p>
            ) : (
              <ul className="space-y-3 max-h-[300px] overflow-y-auto">
                {notifications.map((note) => (
                  <li
                    key={note.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <span className="text-sm text-gray-700">{note.text}</span>
                    <span className="text-xs text-gray-500">{note.time}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
