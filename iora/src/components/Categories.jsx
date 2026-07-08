export default function Sidebar() {
  return (
    <aside className="bg-pink-50 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-purple-600 mb-4">Categories</h3>
      <ul className="space-y-2 text-gray-700">
        <li className="hover:text-pink-500 cursor-pointer">New Arrivals</li>
        <li className="hover:text-pink-500 cursor-pointer">Best Selling</li>
        <li className="hover:text-pink-500 cursor-pointer">Accessories</li>
        <li className="hover:text-pink-500 cursor-pointer">Ladies</li>
        <li className="hover:text-pink-500 cursor-pointer">Men’s</li>
      </ul>
    </aside>
  );
}
