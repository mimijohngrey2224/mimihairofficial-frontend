
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import EcomContext from "../../context/EcomContext";
// import AuthContext from "../../context/AuthContext";
// import useLocalStorage from "../../../hooks/useLocalStorage";



function Login() {
  const navigate = useNavigate();

  // const { setUser } = useContext(EcomContext);
  // const [, dispatch] = useContext(AuthContext);

  // const { setItem } = useLocalStorage("auth-token");

  const { loginUser } = useContext(EcomContext);
  const [showPassword, setShowPassword] = useState(false);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    //  anonymousId: getCookie("anonymousId")
     anonymousId: localStorage.getItem("anonymousId")
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    // ✅ normalize email
    const payload = {
      ...formData,
      email: formData.email.toLowerCase(), 
    };

    const res = await fetch("https://mimihairofficial-api.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Invalid Email or Password");
      return;
    }

    // ✅ call your EcomContext login
    await loginUser(data.token);

    navigate("/profile");
  } catch (err) {
    setError("Something went wrong. Please try again.");
  }
};

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-gray-900" />
      <div className="absolute inset-0 bg-black/50" />

      {/* Form */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-center text-pink-600 mb-6">
          Welcome Back
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
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

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-pink-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
