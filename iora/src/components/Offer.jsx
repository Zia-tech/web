import { useState } from "react";

export default function OfferSection() {
  const [stopped, setStopped] = useState(false);

  const offers = [
    {
      id: 1,
      title: "Baby Girl Dresses",
      description: "Summer Collection Up To 50% Off",
      image: "/girl.webp",
      bg: "bg-orange-50",
    },
    {
      id: 2,
      title: "Baby Boy Outfits",
      description: "Exclusive Travel Collection",
      image: "/boy.jpg",
      bg: "bg-green-50",
    },
    {
      id: 3,
      title: "Baby Accessories",
      description: "Flash Sale Up To 40% Off",
      image: "/toys.jpg",
      bg: "bg-pink-50",
    },
    {
      id: 4,
      title: "Newborn Essentials",
      description: "Cute & Cozy Styles",
      image: "/girl.webp",
      bg: "bg-blue-50",
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Special Offers
        </h2>

        {/* Animate scroll unless stopped */}
        <div className={`flex gap-6 animate-scroll ${stopped ? "stop-scroll" : ""}`}>
          {[...offers, ...offers].map((offer, index) => (
            <div
              key={index}
              className={`min-w-[350px] md:min-w-[500px] ${offer.bg}
              rounded-3xl shadow-lg hover:shadow-2xl
              transition-all duration-300 hover:-translate-y-2
              flex items-center overflow-hidden`}
            >
              {/* Image */}
              <div className="w-1/2 h-60">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-1/2 p-6">
                <span className="text-pink-500 font-semibold">
                  Limited Offer
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {offer.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {offer.description}
                </p>
                
                <button
                  onClick={() => setStopped(true)} // <-- stops animation
                  className="mt-5 px-5 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
                >
                  Shop Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
