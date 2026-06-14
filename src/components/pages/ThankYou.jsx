// import React from 'react'

// function ThankYou() {
//   return (
//     <div>ThankYou</div>
//   )
// }

// export default ThankYou



// import { Link } from "react-router-dom";
// import { CheckCircleIcon } from "@heroicons/react/24/solid";

// function ThankYou() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center px-6">
      
//       {/* 🌿 Forest Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-gray-900" />
//       <div className="absolute inset-0 bg-black/50" />

//       {/* CONTENT */}
//       <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center">

//         {/* Icon */}
//         <div className="flex justify-center mb-6">
//           <CheckCircleIcon className="w-20 h-20 text-pink-600" />
//         </div>

//         {/* Title */}
//         <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
//           Thank You, Beautiful! 💖
//         </h1>

//         {/* Message */}
//         <p className="text-gray-600 mb-6 leading-relaxed">
//           Your order has been received successfully.  
//           We’re excited to help you look and feel stunning with our
//           <span className="font-semibold text-pink-600"> premium hair collections</span>.
//         </p>

//         {/* Divider */}
//         <div className="w-20 h-1 bg-pink-500 mx-auto mb-6 rounded-full" />

//         {/* Extra Info */}
//         <p className="text-gray-700 mb-8">
//           Our beauticians are already preparing your hair with love & care 🌸  
//           You’ll be notified once your order is on the way.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Link
//             to="/wigs"
//             className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full transition"
//           >
//             Continue Shopping
//           </Link>

//           <Link
//             to="/profile"
//             className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-semibold px-6 py-3 rounded-full transition"
//           >
//             View Profile
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


// export default ThankYou;


// import { useEffect, useState, useContext } from "react";
// import { useSearchParams, Link } from "react-router-dom";
// import { CheckCircleIcon } from "@heroicons/react/24/solid";
// import EcomContext from "../../context/EcomContext";

// function ThankYou() {
//   const { setCartItems } = useContext(EcomContext);
//   const [searchParams] = useSearchParams();
//   const [status, setStatus] = useState("Verifying payment...");
//   const [order, setOrder] = useState(null);

//   useEffect(() => {
//     const transaction_id = searchParams.get("transaction_id");
//     const orderId = searchParams.get("orderId"); // optional if you stored it

//     if (!transaction_id) {
//       setStatus("No transaction found.");
//       return;
//     }

//     const verifyPayment = async () => {
//       try {
//         const token = localStorage.getItem("auth-token");
//         const res = await fetch("http://localhost:3000/api/payment/verify", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ transaction_id, orderId }),
//         });

//         const data = await res.json();

//         if (res.ok && data.order) {
//           setStatus("Payment Successful! 🎉");
//           setOrder(data.order);

//           // Clear cart on successful payment
//           setCartItems([]);
//         } else {
//           setStatus(data.msg || "Payment verification failed.");
//         }
//       } catch (err) {
//         console.error(err);
//         setStatus("Something went wrong during verification.");
//       }
//     };

//     verifyPayment();
//   }, [searchParams, setCartItems]);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center px-6">
//       <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-gray-900" />
//       <div className="absolute inset-0 bg-black/50" />

//       <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center">
//         <div className="flex justify-center mb-6">
//           <CheckCircleIcon
//             className={`w-20 h-20 ${
//               status.includes("Successful") ? "text-pink-600" : "text-gray-400"
//             }`}
//           />
//         </div>

//         <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
//           {status.includes("Successful") ? "Thank You, Beautiful! 💖" : "Oops!"}
//         </h1>

//         <p className="text-gray-600 mb-6 leading-relaxed">
//           {status.includes("Successful")
//             ? "Your order has been received successfully. We’re excited to help you look and feel stunning with our "
//             : ""}
//           <span
//             className={`font-semibold ${
//               status.includes("Successful") ? "text-pink-600" : "text-gray-800"
//             }`}
//           >
//             {status.includes("Successful") ? "premium hair collections" : ""}
//           </span>
//           .
//         </p>

//         {order && status.includes("Successful") && (
//           <div className="bg-gray-100 p-4 rounded-lg mb-6 text-left">
//             <h2 className="font-semibold mb-2">Order Summary:</h2>
//             <ul className="list-disc ml-5">
//               {order.products.map((item) => (
//                 <li key={item.product._id}>
//                   {item.product.name} x {item.quantity} - ₦{item.product.price * item.quantity}
//                 </li>
//               ))}
//             </ul>
//             <p className="mt-2 font-semibold">Total: ₦{order.amount}</p>
//           </div>
//         )}

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Link
//             to="/wigs"
//             className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full transition"
//           >
//             Continue Shopping
//           </Link>

//           <Link
//             to="/profile"
//             className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-semibold px-6 py-3 rounded-full transition"
//           >
//             View Profile
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ThankYou;



import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function ThankYou() {
  const location = useLocation();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const query = new URLSearchParams(location.search);
  //   // const tx_ref = query.get("tx_ref"); // get transaction/order reference
  //   const transaction_id = query.get("transaction_id");

  //   if (!tx_ref) {
  //     setLoading(false);
  //     return;
  //   }

  //   // Fetch order from backend verify endpoint
  //   const verifyOrder = async () => {
  //     try {
  //       const res = await fetch("http://localhost:3000/api/payment/verify", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
  //         },
  //         body: JSON.stringify({ transaction_id: tx_ref }),
  //       });
  //       const data = await res.json();

  //       if (res.ok && data.order) {
  //         setOrder(data.order);
  //       }
  //     } catch (err) {
  //       console.error("Payment verification failed:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   verifyOrder();
  // }, [location.search]);

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
      const res = await fetch("http://localhost:3000/api/payment/verify", {
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