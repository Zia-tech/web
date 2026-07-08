import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SignIn from "./components/SignIn";
import KidsProducts from "./pages/KidsProducts"
import ProductDetail from "./pages/ProductDetail";
import NotificationPopup from "./components/NotificationPopup";
import Faq from "./pages/Faq";
import { WishlistProvider } from "./Context/WishlistContext"; 
import Hero from "./components/Hero";
 // import WishlistContext
export default function App() {
  return (
      <WishlistProvider>
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* Sign In Page */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/KidsProducts" element={<KidsProducts />} />
        <Route path="/Kids/:id" element={<ProductDetail />} />
        <Route path="/NotificationPopup" element={<NotificationPopup />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Hero" element={<Hero />} />
      </Routes>
    </Router>
     </WishlistProvider>
  );
}
