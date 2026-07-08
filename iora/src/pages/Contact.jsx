
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto py-12 px-6">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-4">Home / Contact</p>

        {/* Heading */}
        <h2 className="text-3xl font-cursive text-pink-500 mb-6">
          Drop your details, we’ll get back to you! Let’s Connect ♡
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-4 bg-white shadow-lg rounded-xl p-6 border border-pink-200">
            <div>
              <label className="block text-gray-700 mb-1">Name *</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Phone number *</label>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Comment *</label>
              <textarea
                placeholder="Comment"
                rows="4"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-400 transition"
            >
              Send ♡
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 bg-white shadow-lg rounded-xl p-6 border border-pink-200">
            <div>
              <h3 className="text-lg font-semibold text-teal-600 mb-2">
                Phone
              </h3>
              <p className="text-gray-700">📞 +91 9746104643</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-teal-600 mb-2">
                Registered Address
              </h3>
              <p className="text-gray-700">
                iora ♡ <br />
                Kozhikode <br />
                Lulu Mall 2nd Floor <br />
                Kerala, India 673016
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-teal-600 mb-2">
                Email
              </h3>
              <p className="text-gray-700">✉️ hello@iora.com</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-teal-600 mb-2">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-500 hover:text-pink-700"
                >
                  Instagram
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-500 hover:text-pink-700"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
