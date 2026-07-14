
import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import EcomContext from "../../context/EcomContext";
import avatar from "../../assets/avatar.png";

console.log("Signup.jsx loaded");

function Signup() {
  console.log("Signup function running");

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ⚠️ Defensive useContext
  const context = useContext(EcomContext);
  if (!context) {
    console.error("EcomContext is missing!");
    return (
      <div style={{ color: "red", padding: "20px" }}>
        Error: EcomContext not found!
      </div>
    );
  }

  const { loginUser } = context;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const [error, setError] = useState("");

  console.log("Initial formData:", formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(`Changed ${e.target.name} ->`, e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData({ ...formData, profileImage: url });
      console.log("Selected profile image:", url);
    }
  };


  const handleSubmit = async (e) => {
    alert("Submit triggered"); //just added
    e.preventDefault();
    console.log("Form submitted", formData);

    if (formData.password !== formData.confirmPassword) {
      console.warn("Passwords do not match");
      setError("Passwords do not match");
      return;
    }

    try {
  const res = await fetch("https://mimihairofficial-api.onrender.com/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  console.log("Signup response:", data);

  if (!res.ok) {
    setError(data.message || "Registration failed");
    return;
  }

  localStorage.setItem("auth-token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));

  // setUser(data.user);
  loginUser(data.user, data.token);

  navigate("/profile");

} catch (err) {
  console.error("Error during registration:", err);
  setError("Something went wrong");
}

  };

  console.log("Rendering Signup component");

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-gray-900" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-center text-pink-600 mb-6">
          Create Account
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />


          <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Password"
    value={formData.password}
    onChange={handleChange}
    required
    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
  />

  <span
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
  >
    {showPassword ? "🙈" : "👁️"}
  </span>
</div>

<div className="relative">
  <input
    type={showConfirmPassword ? "text" : "password"}
    name="confirmPassword"
    placeholder="Confirm Password"
    value={formData.confirmPassword}
    onChange={handleChange}
    required
    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
  />

  <span
    onClick={() =>
      setShowConfirmPassword(!showConfirmPassword)
    }
    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
  >
    {showConfirmPassword ? "🙈" : "👁️"}
  </span>
</div>

          <div className="flex flex-col items-center">
            <label className="text-gray-700 mb-2">
              Upload Profile Image (Optional)
            </label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {formData.profileImage && (
              <img
                src={formData.profileImage}
                alt="Preview"
                className="mt-2 w-20 h-20 rounded-full object-cover border-2 border-pink-500"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;

