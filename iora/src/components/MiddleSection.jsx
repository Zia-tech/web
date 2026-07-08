import NotificationPopup from "../components/NotificationPopup";
import CartPopup from "../components/CartPopup";
import WishlistPopup from "../components/WishlistPopup";
export default function MiddleSection() {
  return (
    <div className="bg-rose-100 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        
        {/* Logo */}
        <h1 className="text-3xl font-serif text-teal-800">IORA ♡</h1>
        
        {/* Search bar */}
        <div className="flex flex-1 mx-6 px-6 ml-10">
          <input
            type="text"
            placeholder="Search Products Here..."
            className="flex-1 px-4 py-2 border rounded-[4px] border-pink-500 focus:outline-none"
          />
          <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-400 transition">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="flex space-x-6 text-teal-600 text-xl ml-6">
            <WishlistPopup />
        
            <NotificationPopup />
            <CartPopup />
          
        </div>
      </div>
    </div>
  );
}
