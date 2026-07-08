import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../components/CartContext"; 
import { useWishlist } from "../Context/WishlistContext"; // ✅ import wishlist

export default function KidsProducts() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    const fetchKidsProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        const kidsItems = data.filter(
          (item) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing"
        );
        setProducts(kidsItems);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchKidsProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const originalPrice = (product.price * 100) / 55;
          const isWishlisted = wishlist.some((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              className="border rounded-lg shadow hover:shadow-lg transition flex flex-col h-[420px] relative"
            >
              {/* ✅ Wishlist Icon */}
              <button
                onClick={() =>
                  isWishlisted
                    ? removeFromWishlist(product.id)
                    : addToWishlist(product)
                }
                className="absolute top-3 right-3 text-2xl"
              >
                {isWishlisted ? (
                  <span className="text-pink-500">❤️</span>
                ) : (
                  <span className="text-gray-400 hover:text-pink-500">♡</span>
                )}
              </button>

              {/* Product Image */}
              <Link to={`/kids/${product.id}`}>
                <div className="flex items-center justify-center h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain h-full transform hover:scale-105 transition duration-300"
                  />
                </div>
              </Link>

              {/* Product details */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-sm font-semibold mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-pink-600 font-bold">₹{product.price}</p>
                <p className="text-gray-500 line-through">
                  ₹{originalPrice.toFixed(2)}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 p-4 mt-auto">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-pink-500 text-white py-2 rounded-lg shadow hover:bg-pink-400 transition"
                >
                  Add to Cart
                </button>
                <Link
                  to={`/kids/${product.id}`}
                  className="flex-1 bg-teal-500 text-white py-2 rounded-lg shadow hover:bg-teal-400 transition text-center"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
