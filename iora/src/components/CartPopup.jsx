import { useState } from "react";
import { useCart } from "../components/CartContext";

export default function CartPopup() {
  const [open, setOpen] = useState(false);
  const { cart, removeFromCart } = useCart();

  return (
    <div className="relative inline-block">
      {/* Cart Icon Button */}
      <button
        onClick={() => setOpen(true)}
        className="text-2xl text-teal-500 hover:text-teal-400 transition relative"
      >
        🛒
        {/* ✅ Counter Badge */}
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 rounded-full">
            {cart.length}
          </span>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-teal-100 bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-teal-500 hover:text-teal-700 text-xl"
            >
              ✖
            </button>

            <h2 className="text-xl font-bold text-pink-500 mb-4 text-center">
              My Cart
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-600 text-center">Your Shopping Cart is Empty!</p>
            ) : (
              <div className="max-h-[400px] overflow-y-auto pr-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center relative"
                    >
                      {/* Product Image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-32 h-32 object-contain mb-3"
                      />

                      {/* Product Title */}
                      <h3 className="text-sm font-semibold text-gray-700 text-center line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Product Price */}
                      <p className="text-pink-600 font-bold mt-2">₹{item.price}</p>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-400 text-sm"
                      >
                        ✖
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
