// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import EcomContext from "../../context/EcomContext";

// function Dashboard() {
//   const { user, cartItems, totalAmount } = useContext(EcomContext);

//   // If user is not logged in, redirect to login
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return (
//     <div className="max-w-6xl mx-auto my-10 px-5">
//       <h1 className="text-3xl font-bold text-pink-600 mb-6">
//         Welcome, {user.firstName}!
//       </h1>

//       {/* Profile Section */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4">Profile Info</h2>
//         <p>
//           <strong>Name:</strong> {user.firstName} {user.lastName}
//         </p>
//         <p>
//           <strong>Email:</strong> {user.email}
//         </p>
//         <p>
//           <strong>Phone:</strong> {user.phone}
//         </p>
//       </div>

//       {/* Cart Summary Section */}
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <div className="space-y-2">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between border-b pb-2"
//               >
//                 <span>{item.name}</span>
//                 <span>
//                   {item.quantity} x ₦{item.price} = ₦{item.amount}
//                 </span>
//               </div>
//             ))}
//             <p className="font-bold text-right mt-2">
//               Total: ₦{totalAmount()}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;




import React, { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import EcomContext from "../../context/EcomContext";
import avatar from "../../assets/avatar.png";

function Dashboard() {
  const { user, cartItems, totalAmount } = useContext(EcomContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="max-w-6xl mx-auto my-10 px-5">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">
        Welcome, {user.firstName}!
      </h1>

      {/* Profile Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 flex items-center gap-6">
        <img
          src={user.profileImage || avatar}
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-pink-500 object-cover"
        />

        <div>
          <h2 className="text-xl font-semibold mb-2">Profile Info</h2>
          <p>
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
      </div>

      {/* Cart Summary */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>

        {cartItems.length === 0 ? (
          <div className="text-center space-y-4">
            <p>Your cart is empty.</p>
            <Link
              to="/wigs"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-2">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between border-b pb-2"
                >
                  <span>{item.name}</span>
                  <span>
                    {item.quantity} × ₦{item.price} = ₦{item.amount}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-bold text-right mt-4">
              Total: ₦{totalAmount()}
            </p>

            <div className="flex justify-end mt-6">
              <Link
                to="/checkout"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
