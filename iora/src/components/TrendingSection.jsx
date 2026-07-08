import { useState } from "react";
import KidsProducts from "../pages/KidsProducts";

export default function TrendingSection() {
  const [showKids, setShowKids] = useState(false);

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 text-center">
      <h2 className="text-3xl font-cursive text-teal-600 mb-6">
        Trending Items ♡
      </h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button className="px-4 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-300 transition">
          Baby Girl
        </button>
        <button className="px-4 py-2 bg-teal-300 text-white rounded-full hover:bg-teal-200 transition">
          Baby Boy
        </button>
        <button
          onClick={() => setShowKids(true)}
          className="px-4 py-2 bg-rose-200 text-gray-700 rounded-full hover:bg-rose-100 transition"
        >
          Kids upto 10 years
        </button>
        <button className="px-4 py-2 bg-teal-400 text-white rounded-full hover:bg-teal-200 transition">
          Accessories
        </button>
        <button className="px-4 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-300 transition">
          Essentials
        </button>
        <button className="px-4 py-2 bg-teal-300 text-white rounded-full hover:bg-teal-200 transition">
          Offers
        </button>
      </div>

      {/* Show Kids Products */}
      {showKids && <KidsProducts />}
    </section>
  );
}
