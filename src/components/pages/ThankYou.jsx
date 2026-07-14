
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function ThankYou() {
  const location = useLocation();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const query = new URLSearchParams(location.search);

  const transaction_id = query.get("transaction_id"); // ✅ FIXED

  console.log("Transaction ID:", transaction_id); // ✅ debug

  if (!transaction_id) {
    setLoading(false);
    return;
  }

  const verifyOrder = async () => {
    try {
      const res = await fetch("https://mimihairofficial-api.onrender.com/api/payment/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        },
        body: JSON.stringify({ transaction_id }), // ✅ FIXED
      });

      const data = await res.json();
      console.log("VERIFY RESPONSE:", data); // ✅ debug

      if (res.ok && data.order) {
        setOrder(data.order);
      }
    } catch (err) {
      console.error("Payment verification failed:", err);
    } finally {
      setLoading(false);
    }
  };

  verifyOrder();
}, [location.search]);

  if (loading) return <p className="text-center mt-20">Verifying payment...</p>;
  if (!order) return <p className="text-center mt-20 text-red-600">Oops! Payment not verified.</p>;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-gray-900" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <CheckCircleIcon className="w-20 h-20 text-pink-600" />
        </div>

        <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
          Thank You, {order.firstName || "Beautiful"}! 💖
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Your order has been received successfully.
          <span className="font-semibold text-pink-600"> Order ID: {order.transactionId}</span>
        </p>

        <div className="w-20 h-1 bg-pink-500 mx-auto mb-6 rounded-full" />

        <p className="text-gray-700 mb-4">Amount Paid: ₦{order.amount}</p>

        <p className="text-gray-700 mb-2">
          Date:{" "}
          {new Date(order.date || order.createdAt).toLocaleString()}
        </p>

        <p className="text-gray-700 mb-8">
          We’re preparing your hair with love & care 🌸
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/wigs"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/profile"
            className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-semibold px-6 py-3 rounded-full transition"
          >
            View Profile
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ThankYou;