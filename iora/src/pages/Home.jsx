import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Topbar from "../components/Topbar";
import MiddleSection from "../components/MiddleSection";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Offer from "../components/Offer";
import TrendingSection from "../components/TrendingSection";
import Footer from "../components/Footer";
import ClientReviews from "../components/ClientReviews";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Header */}
      <ToastContainer />
      <Topbar />
      <MiddleSection />
      <Navbar />

      {/* Hero Banner */}
      <Hero />

      {/* Offers */}
      <Offer />

      {/* Trending Items */}
      <TrendingSection />
      <ClientReviews />

      {/* Footer */}
      <Footer />
    </div>
  );
}
