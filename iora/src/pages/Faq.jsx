
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const faqs = [
  {
    question: "What is IORA?",
    answer:
      "IORA is a creative lifestyle brand that blends fashion, comfort, and charm. We focus on delivering high‑quality products with a touch of cuteness and elegance to make everyday living more joyful."
  },
  {
    question: "How can I contact IORA’s support team?",
    answer:
      "You can reach our customer care team through the Contact Us page or by email. We’re available during business hours to assist with orders, returns, and general inquiries."
  },
  {
  question: "What payment methods does IORA accept?",
  answer:
    "We accept all major payment options including credit/debit cards, UPI, and net banking. For added convenience, we also support wallet payments. Every transaction is processed securely to protect your details."
},
  {
    question: "What is IORA’s return and refund policy?",
    answer:
      "We accept returns within 7 days of delivery for unused items in original packaging. Refunds are processed to your source account once the returned product passes quality checks."
  },
  {
    question: "Is shopping on IORA secure?",
    answer:
      "Absolutely. We use encrypted payment gateways and secure servers to protect your personal and financial information throughout your shopping experience."
  },
  {
    question: "Does IORA charge any registration or membership fees?",
    answer:
      "No, there are no hidden charges or membership fees. You can browse, shop, and enjoy our collections freely without any additional costs."
  },
  {
    question: "Can I track my order after purchase?",
    answer:
      "Yes, once your order is shipped, you’ll receive a tracking link via email or SMS. You can monitor your package’s journey until it reaches your doorstep."
  },
  {
    question: "Does IORA provide discounts or seasonal offers?",
    answer:
      "We love rewarding our customers! Keep an eye on our homepage and social media for seasonal sales, bundle offers, and exclusive discount codes."
  },
  {
    question: "Where is IORA located?",
    answer:
      "IORA is proudly based in Kerala, India, with operations that serve customers across the country. Our team works remotely and collaboratively to bring you the best experience."
  },
  {
    question: "Why choose IORA over other brands?",
    answer:
      "We combine quality craftsmanship with a unique aesthetic that celebrates individuality. Every product is designed with care, creativity, and a sprinkle of cuteness to make you smile."
  }
];

export default function CuteFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
    <Navbar />
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 my-10">
      <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
        Transparency & FAQs
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex justify-between items-center text-left font-semibold text-gray-700 bg-pink-100 px-4 py-2 rounded-md"
          >
            {faq.question}
            <span className="text-pink-500">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <p className="mt-2 px-4 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
    <Footer />
    </>
  );
}
