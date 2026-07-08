import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Avinash Kaur",
    text: "Just received the products. The bags are too good & pens are amazing quality. Great experience shopping here!",
    emoji: "♥♥",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Sushmita",
    text: "Amazing experience 😍 Got the parcel, products are all good. Looking forward to shopping again!",
    emoji: "★★★★★",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Bhoomi Panchal",
    text: "I received the parcel. Nice quality, thank you 😊",
    emoji: "★★★★★",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Rahul Mehta",
    text: "Loved the baby dresses, super soft fabric. My daughter looks adorable!",
    emoji: "😊😊",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Priya Sharma",
    text: "Quick delivery and cute packaging. Will definitely order again!",
    emoji: "😍😍",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Kiran Patel",
    text: "Affordable and stylish outfits. My kids loved them!",
    emoji: "♥♥",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Sneha Verma",
    text: "Customer service was very helpful. Smooth shopping experience.",
    emoji: "★★★★★",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Arjun Singh",
    text: "Great quality essentials, worth the price. Highly recommend!",
    emoji: "😊😊",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Meera Joshi", // ✅ New client
    text: "The outfits are adorable and comfy. My son loves them, thank you IORA ♡",
    emoji: "★★★★★",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 10000);
    return () => clearInterval(interval);
  }, [index]);

  const prevReview = () => {
    setIndex((prev) =>
      prev === 0 ? reviews.length - 3 : prev - 3
    );
  };

  const nextReview = () => {
    setIndex((prev) =>
      prev + 3 >= reviews.length ? 0 : prev + 3
    );
  };

  // Show 3 reviews at a time
  const visibleReviews = reviews.slice(index, index + 3);

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 text-center relative">
      <h2 className="text-3xl font-cursive text-pink-500 mb-8">
        What Our Client Says ♡
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ease-in-out">
        {visibleReviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-xl shadow-lg p-6 opacity-100 transform transition duration-700 hover:scale-105"
          >
            <img
              src={review.img}
              alt={review.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-pink-300"
            />
            <h3 className="text-lg font-semibold text-teal-600 mb-2">
              {review.name}
            </h3>
            <p className="text-pink-500 mb-2">{review.emoji}</p>
            <p className="text-gray-700 text-sm">{review.text}</p>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
  onClick={prevReview}
  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white px-3 py-2 rounded-full hover:bg-pink-400 transition"
>
  🡸
</button>
<button
  onClick={nextReview}
  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white px-3 py-2 rounded-full hover:bg-pink-400 transition"
>
  🡺
</button>

    </section>
  );
}
