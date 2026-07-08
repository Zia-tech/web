import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignInForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    gender: "",
    dob: "",
    address: "",
    location: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!formData.lastName.trim())
      newErrors.lastName = "Second name is required";

    if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact must be exactly 10 digits";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Correct email is required";
    }

    if (!formData.gender) newErrors.gender = "Please select a gender";

    if (!formData.dob) newErrors.dob = "Date of birth is required";

    if (!formData.address.trim()) newErrors.address = "Address is required";

    if (!formData.location.trim()) newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      toast.success("Signed in successfully!");
      if (onSuccess) onSuccess(); // ✅ notify WishlistPopup
    }
  };

  return (
    <section className="bg-pink-50 rounded-2xl px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 space-y-5"
      >
        <h2 className="text-2xl sm:text-3xl font-cursive text-pink-500 text-center mb-4">
          Sign In ♡
        </h2>

        {/* First Name */}
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-400"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <input
            type="text"
            placeholder="Second Name"
            className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-400"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
          )}
        </div>

        {/* Contact */}
        <div>
          <input
            type="tel"
            placeholder="Contact (10 digits)"
            className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-400"
            value={formData.contact}
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
          />
          {errors.contact && (
            <p className="mt-1 text-xs text-red-500">{errors.contact}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Gmail"
            className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-400"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <p className="text-gray-600 mb-2">Gender:</p>
          <div className="flex gap-4">
            {["Male", "Female", "Other"].map((g) => (
              <label key={g} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={formData.gender === g}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                />
                {g}
              </label>
            ))}
          </div>
          {errors.gender && (
            <p className="mt-1 text-xs text-red-500">{errors.gender}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <input
            type="date"
            className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-400"
            value={formData.dob}
            onChange={(e) =>
              setFormData({ ...formData, dob: e.target.value })
            }
          />
          {errors.dob && (
            <p className="mt-1 text-xs text-red-500">{errors.dob}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <textarea
            rows={4}
            placeholder="Address"
            className="w-full px-4 py-2.5 border rounded-lg resize-none focus:ring-2 focus:ring-pink-400"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
          {errors.address && (
            <p className="mt-1 text-xs text-red-500">{errors.address}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <input
            type="text"
            placeholder="Location (City, State)"
            className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-400"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
          {errors.location && (
            <p className="mt-1 text-xs text-red-500">{errors.location}</p>
          )}
        </div>

        {/* Submit */}
        <div className="pt-6">
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-full hover:bg-pink-400 transition duration-300"
          >
            Submit ♡
          </button>
        </div>
        <ToastContainer position="top-center" autoClose={3000} />
      </form>
    </section>
  );
}
