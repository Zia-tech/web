import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/1.jpg"
        alt="Iora Fashion"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <span className="mb-3 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
          ✨ New Fashion Collection
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          UP TO <span className="text-pink-600">50% OFF</span>
        </h1>

        <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
          Discover trendy styles, cute outfits, and cozy vibes for every season.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          {/* ✅ Shop Now navigates to KidsProducts */}
          <button
            onClick={() => navigate("/kidsProducts")}
            className="rounded-full bg-pink-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-pink-600 hover:scale-105"
          >
            Shop Now →
          </button>

          <button className="rounded-full border border-white/50 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
}
