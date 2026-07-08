import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext"; 
import { useWishlist } from "../Context/WishlistContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [showPayment, setShowPayment] = useState(false); // ✅ payment popup state
  const { addToCart } = useCart();
   const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  const originalPrice = (product.price * 100) / 55;
  const couponDiscount = 0.2; // 20% off with "CUTE20"
  const discountedPrice = (product.price * (1 - couponDiscount)).toFixed(2);
  const isWishlisted = wishlist.some((item) => item.id === product.id); // ✅ check wishlist
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-pink-600 hover:text-pink-400 font-semibold"
      >
        <span className="text-2xl mr-2">&lt;</span> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <div className="w-80 h-80 flex items-center justify-center bg-gray-100 border rounded-lg shadow">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain max-h-full"
            />
            {/* ✅ Wishlist Icon */}
            <button
              onClick={() =>
                isWishlisted
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              }
              className="absolute top-3 right-3 text-3xl"
            >
              {isWishlisted ? (
                <span className="text-pink-500">❤️</span>
              ) : (
                <span className="text-gray-400 hover:text-pink-500">♡</span>
              )}
            </button>
      
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-2xl font-bold text-teal-700 mb-4">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Offer Price */}
          <div className="mb-4">
            <p className="text-pink-600 text-xl font-bold">
              ₹{product.price} <span className="text-sm">(inclusive of all taxes)</span>
            </p>
            <p className="text-gray-500 line-through">₹{originalPrice.toFixed(2)}</p>
          </div>

          {/* Sizes */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Select Size:</h3>
            <div className="flex gap-3">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize === size
                      ? "bg-pink-500 text-white"
                      : "bg-white text-gray-700"
                  } hover:bg-pink-400 hover:text-white transition`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => addToCart({ ...product, size: selectedSize })}
              className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-400 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => setShowPayment(true)} // ✅ open popup
              className="bg-teal-500 text-white px-6 py-2 rounded-lg shadow hover:bg-teal-400 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Extra Info */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center">
          <span className="text-3xl text-pink-500">🔄</span>
          <p className="mt-2 text-gray-700 font-medium">7-Day Return Policy</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl text-green-500">💵</span>
          <p className="mt-2 text-gray-700 font-medium">Cash on Delivery</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl text-blue-500">📞</span>
          <p className="mt-2 text-gray-700 font-medium">24/7 Support</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl text-orange-500">🚚</span>
          <p className="mt-2 text-gray-700 font-medium">Delivery in 3–7 Days</p>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
        <div className="space-y-4">
          <div className="border p-3 rounded-lg">
            <p className="font-semibold">⭐️⭐️⭐️⭐️⭐️ – Aisha</p>
            <p>Great quality and fast delivery. Totally worth it!</p>
          </div>
          <div className="border p-3 rounded-lg">
            <p className="font-semibold">⭐️⭐️⭐️⭐️ – Rahul</p>
            <p>Comfortable fit and nice fabric. Will buy again.</p>
          </div>
          <div className="border p-3 rounded-lg">
            <p className="font-semibold">⭐️⭐️⭐️⭐️⭐️ – Meera</p>
            <p>Absolutely loved it! The design is stylish and cute.</p>
          </div>
        </div>
      </div>

      {/* ✅ Payment Popup with Coupon */}
      {showPayment && (
        <div className="fixed inset-0 flex items-center justify-center bg-pink-100 bg-opacity-40 z-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setShowPayment(false)}
              className="absolute top-2 right-2 text-pink-500 hover:text-pink-400 text-xl"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold text-teal-700 mb-4 text-center">
              Payment Options
            </h2>

            {/* Coupon Code Applied */}
            <div className="mb-4 p-3 bg-pink-50 border border-pink-300 rounded-lg text-center">
              🎉 Coupon Applied: <span className="font-bold text-pink-600">CUTE20</span>  
              <p className="mt-2 text-gray-700">
                You saved 20%! New Price: <span className="text-teal-600 font-bold">₹{discountedPrice}</span>
              </p>
            </div>

            <ul className="space-y-3">
              <li className="border p-3 rounded-lg hover:bg-pink-50 cursor-pointer">
                💵 Cash on Delivery
              </li>
              <li className="border p-3 rounded-lg hover:bg-pink-50 cursor-pointer">
                🏦 Bank Transfer (Account No: 1234567890, IFSC: ABCD0123456)
              </li>
              <li className="border p-3 rounded-lg hover:bg-pink-50 cursor-pointer">
                📱 UPI Payment (example@upi)
              </li>
              <li className="border p-3 rounded-lg hover:bg-pink-50 cursor-pointer">
                💳 Credit/Debit Card
              </li>
            </ul>

            <button
              onClick={() => alert("Proceeding to checkout...")}
              className="mt-6 w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-400 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
