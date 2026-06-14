// import { useContext } from "react";
// import EcomContext from "../../context/EcomContext";

// function Checkout() {
//   const { cartItems, totalAmount } = useContext(EcomContext);

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
//         {/* Order Summary Section */}
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Order Summary</h1>
          
//           <table className="w-full text-gray-700 mb-6">
//             <thead>
//               <tr className="border-b text-lg font-semibold text-gray-500">
//                 <th className="py-3 px-4 text-left">Item</th>
//                 <th className="py-3 px-4 text-center">Image</th>
//                 <th className="py-3 px-4 text-center">Price</th>
//                 <th className="py-3 px-4 text-center">Quantity</th>
//                 <th className="py-3 px-4 text-center">Amount</th>
//               </tr>
//             </thead>

//             <tbody>
//               {cartItems.map((item) => (
//                 <tr className="border-b hover:bg-gray-50 transition duration-300" key={item.id}>
//                   <td className="py-3 px-4">{item.name}</td>
//                   <td className="py-3 px-4 text-center">
//                     <img
//                       src={item.img}
//                       alt={item.name}
//                       className="w-12 h-12 object-cover rounded-full mx-auto"
//                     />
//                   </td>
//                   <td className="py-3 px-4 text-center">₦{item.price}</td>
//                   <td className="py-3 px-4 text-center">{item.quantity}</td>
//                   <td className="py-3 px-4 text-center">₦{item.amount}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Total Amount */}
//           <div className="flex justify-end text-lg font-semibold text-gray-800 mt-6">
//             <span className="text-2xl text-pink-500">Total: ₦{totalAmount()}</span>
//           </div>
//         </div>

//         {/* Delivery Information Form */}
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Delivery Information</h1>

//           <form>
//             <div className="flex flex-col gap-4">
//               <div className="flex flex-col">
//                 <label htmlFor="firstName" className="text-lg font-medium">First Name</label>
//                 <input
//                   id="firstName"
//                   className="outline-none border-2 border-gray-300 p-2 rounded-md"
//                   type="text"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="lastName" className="text-lg font-medium">Last Name</label>
//                 <input
//                   id="lastName"
//                   className="outline-none border-2 border-gray-300 p-2 rounded-md"
//                   type="text"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="phone" className="text-lg font-medium">Phone Number</label>
//                 <input
//                   id="phone"
//                   className="outline-none border-2 border-gray-300 p-2 rounded-md"
//                   type="text"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="address" className="text-lg font-medium">Address</label>
//                 <textarea
//                   id="address"
//                   className="outline-none border-2 border-gray-300 p-2 rounded-md"
//                   rows="4"
//                 ></textarea>
//               </div>

//               <div className="flex justify-center mt-6">
//                 <button
//                   type="submit"
//                   className="bg-pink-500 text-white py-2 px-8 rounded-lg hover:bg-pink-600 transition duration-300"
//                 >
//                   Pay Now
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;


//old working 22 march to try flutterwave
// import { useContext, useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import EcomContext from "../../context/EcomContext";

// function Checkout() {
//   const {
//     cartItems,
//     totalAmount,
//     user,
//     setCartItems,
//     handleCheckout,
//   } = useContext(EcomContext);

//   const navigate = useNavigate();

//   // 🔐 Protect route
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   if (cartItems.length === 0) {
//     return <Navigate to="/cart" replace />;
//   }

//   // 📦 Delivery info (prefilled from user)
//   const [delivery, setDelivery] = useState({
//     firstName: user.firstName || "",
//     lastName: user.lastName || "",
//     phone: user.phone || "",
//     address: "",
//   });

//   // 💳 Simulated payment handler
//   const handlePayment = (e) => {
//     e.preventDefault();

//     const order = {
//       id: Date.now(),
//       user: user.email,
//       items: cartItems,
//       total: totalAmount(),
//       delivery,
//       date: new Date().toLocaleString(),
//     };

//     console.log("ORDER PLACED:", order);

//     // Clear cart after payment
//     setCartItems([]);

//     // Redirect to Thank You page
//     navigate("/thankyou");
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//         {/* ================= ORDER SUMMARY ================= */}
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
//             Order Summary
//           </h1>

//           <table className="w-full text-gray-700 mb-6">
//             <thead>
//               <tr className="border-b text-lg font-semibold text-gray-500">
//                 <th className="py-3 px-4 text-left">Item</th>
//                 <th className="py-3 px-4 text-center">Image</th>
//                 <th className="py-3 px-4 text-center">Price</th>
//                 <th className="py-3 px-4 text-center">Qty</th>
//                 <th className="py-3 px-4 text-center">Amount</th>
//               </tr>
//             </thead>

//             <tbody>
//               {cartItems.map((item) => (
//                 <tr
//                   key={item._id}
//                   className="border-b hover:bg-gray-50 transition"
//                 >
//                   <td className="py-3 px-4">{item.name}</td>
//                   <td className="py-3 px-4 text-center">
//                     {/* <img
//                       src={item.img}
//                       alt={item.name}
//                       className="w-12 h-12 object-cover rounded-full mx-auto"
//                     /> */}
//                     <img
//                       src={`http://localhost:3000/${item.img}`}
//                       alt={item.name}
//                       className="w-12 h-12 object-cover rounded-full mx-auto"
//                     />
//                   </td>
//                   <td className="py-3 px-4 text-center">₦{item.price}</td>
//                   <td className="py-3 px-4 text-center">{item.quantity}</td>
//                   {/* <td className="py-3 px-4 text-center">₦{item.amount}</td> */}
//                   <td className="py-3 px-4 text-center">
//                       ₦{item.price * item.quantity}
//                     </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="flex justify-end text-lg font-semibold text-gray-800">
//             <span className="text-2xl text-pink-500">
//               Total: ₦{totalAmount()}
//             </span>
//           </div>
//         </div>

//         {/* ================= DELIVERY INFO ================= */}
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
//             Delivery Information
//           </h1>

//           <form onSubmit={handlePayment}>
//             <div className="flex flex-col gap-4">

//               <div>
//                 <label className="text-lg font-medium">First Name</label>
//                 <input
//                   className="w-full border-2 border-gray-300 p-2 rounded-md"
//                   value={delivery.firstName}
//                   onChange={(e) =>
//                     setDelivery({ ...delivery, firstName: e.target.value })
//                   }
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="text-lg font-medium">Last Name</label>
//                 <input
//                   className="w-full border-2 border-gray-300 p-2 rounded-md"
//                   value={delivery.lastName}
//                   onChange={(e) =>
//                     setDelivery({ ...delivery, lastName: e.target.value })
//                   }
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="text-lg font-medium">Phone Number</label>
//                 <input
//                   className="w-full border-2 border-gray-300 p-2 rounded-md"
//                   value={delivery.phone}
//                   onChange={(e) =>
//                     setDelivery({ ...delivery, phone: e.target.value })
//                   }
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="text-lg font-medium">Delivery Address</label>
//                 <textarea
//                   className="w-full border-2 border-gray-300 p-2 rounded-md"
//                   rows="4"
//                   value={delivery.address}
//                   onChange={(e) =>
//                     setDelivery({ ...delivery, address: e.target.value })
//                   }
//                   required
//                 />
//               </div>

//               <div className="flex justify-center mt-6">
//                 <button
//                   type="submit"
//                   className="bg-pink-500 text-white py-2 px-8 rounded-lg hover:bg-pink-600 transition"
//                 >
//                   Pay Now
//                 </button>
//               </div>

//             </div>
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Checkout;



//new 22 march to test flutterwave
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import EcomContext from "../../context/EcomContext";

function Checkout() {
  const {
    cartItems,
    totalAmount,
    user,
    handleCheckout, // ✅ use this
  } = useContext(EcomContext);

  // 🔐 Protect route
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (cartItems.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  // 📦 Delivery info
  const [delivery, setDelivery] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    phone: user.phone || "",
    address: "",
  });

  // ✅ REAL PAYMENT HANDLER (Flutterwave)
  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      // 👇 Call backend via context
      await handleCheckout(totalAmount(), "NGN");

      // ❌ REMOVE:
      // console.log("ORDER PLACED");
      // setCartItems([]);
      // navigate("/thankyou");

    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ================= ORDER SUMMARY ================= */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Order Summary
          </h1>

          <table className="w-full text-gray-700 mb-6">
            <thead>
              <tr className="border-b text-lg font-semibold text-gray-500">
                <th className="py-3 px-4 text-left">Item</th>
                <th className="py-3 px-4 text-center">Image</th>
                <th className="py-3 px-4 text-center">Price</th>
                <th className="py-3 px-4 text-center">Qty</th>
                <th className="py-3 px-4 text-center">Amount</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4 text-center">
                    <img
                      src={`http://localhost:3000/${item.img}`}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-full mx-auto"
                    />
                  </td>
                  <td className="py-3 px-4 text-center">₦{item.price}</td>
                  <td className="py-3 px-4 text-center">{item.quantity}</td>
                  <td className="py-3 px-4 text-center">
                    ₦{item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end text-lg font-semibold text-gray-800">
            <span className="text-2xl text-pink-500">
              Total: ₦{totalAmount()}
            </span>
          </div>
        </div>

        {/* ================= DELIVERY INFO ================= */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Delivery Information
          </h1>

          <form onSubmit={handlePayment}>
            <div className="flex flex-col gap-4">

              <div>
                <label className="text-lg font-medium">First Name</label>
                <input
                  className="w-full border-2 border-gray-300 p-2 rounded-md"
                  value={delivery.firstName}
                  onChange={(e) =>
                    setDelivery({ ...delivery, firstName: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="text-lg font-medium">Last Name</label>
                <input
                  className="w-full border-2 border-gray-300 p-2 rounded-md"
                  value={delivery.lastName}
                  onChange={(e) =>
                    setDelivery({ ...delivery, lastName: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="text-lg font-medium">Phone Number</label>
                <input
                  className="w-full border-2 border-gray-300 p-2 rounded-md"
                  value={delivery.phone}
                  onChange={(e) =>
                    setDelivery({ ...delivery, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="text-lg font-medium">Delivery Address</label>
                <textarea
                  className="w-full border-2 border-gray-300 p-2 rounded-md"
                  rows="4"
                  value={delivery.address}
                  onChange={(e) =>
                    setDelivery({ ...delivery, address: e.target.value })
                  }
                  required
                />
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-pink-500 text-white py-2 px-8 rounded-lg hover:bg-pink-600 transition"
                >
                  Pay Now
                </button>
              </div>

            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Checkout;


// import { useContext } from "react";
// import EcomContext from "../../context/EcomContext";

// function Checkout() {
//   const { cartItems, totalAmount } = useContext(EcomContext);

//   return (
//     <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-16">
//       <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         {/* Checkout Header */}
//         <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
//           <span className="text-pink-500">Your</span> Shopping Cart
//         </h1>

//         {/* Cart Table */}
//         <table className="w-full table-auto text-gray-700">
//           <thead>
//             <tr className="border-b text-lg font-semibold text-gray-500">
//               <th className="py-3 px-4">Item</th>
//               <th className="py-3 px-4">Image</th>
//               <th className="py-3 px-4">Price</th>
//               <th className="py-3 px-4">Quantity</th>
//               <th className="py-3 px-4">Amount</th>
//             </tr>
//           </thead>

//           <tbody>
//             {cartItems.map((item) => (
//               <tr
//                 className="border-b hover:bg-gray-50 transition duration-300"
//                 key={item.id}
//               >
//                 <td className="py-3 px-4 flex justify-center text-lg">{item.name}</td>
//                 <td className="py-3 px-4">
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="w-16 h-16 object-cover rounded-full mx-auto"
//                   />
//                 </td>
//                 <td className="py-3 px-4 text-center">{item.price}</td>
//                 <td className="py-3 px-4 text-center">
//                   <div className="flex justify-center">
//                     <input
//                       type="number"
//                       value={item.quantity}
//                       min="1"
//                       className="w-16 text-center border border-gray-300 rounded-lg p-1"
//                     />
//                   </div>
//                 </td>
//                 <td className="py-3 px-4 text-center text-lg font-semibold">
//                   ₦{item.amount}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Cart Summary */}
//         <div className="mt-6 flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-md">
//           <div className="text-lg font-semibold text-gray-800">
//             <span>Total:</span>
//             <span className="text-2xl text-pink-500"> ₦{totalAmount()}</span>
//           </div>

//           <button
//             className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition duration-300"
//             onClick={() => alert('Proceeding to Checkout')}
//           >
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;

