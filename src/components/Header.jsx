// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import { RiMenu4Fill } from "react-icons/ri";
// import { MdOutlineCancel } from "react-icons/md";

// import avatar from "../assets/avatar.png";
// import my_logo from "../assets/my_logo-removebg-preview.png";
// import EcomContext from "../context/EcomContext";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { cartItems } = useContext(EcomContext);

//   const cartCount = cartItems.reduce((t, i) => t + i.quantity, 0);

//   return (
//     <div className="sticky top-0 z-50 bg-gray-800 px-5 py-4 flex items-center justify-between">
//       {/* Logo */}
//       <Link to="/" className="flex items-center">
//         <img src={my_logo} alt="logo" className="w-[120px]" />
//       </Link>

//       {/* Desktop Nav */}
//       <nav className="hidden lg:flex">
//         <ul className="flex items-center gap-6 text-pink-500 font-medium">
//           <li>
//             <Link to="/" className="hover:text-white">Home</Link>
//           </li>

//           <li>
//             <Link to="/Wigs" className="hover:text-white">Wigs</Link>
//           </li>

//           <li className="relative">
//             <Link to="/cart" className="flex items-center hover:text-white">
//               <FaShoppingCart className="text-xl" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>
//           </li>

//           <li className="flex items-center gap-2 text-white">
//             <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
//             <span>Hi, Mimi</span>
//           </li>

//           <li>
//             <Link to="/signup" className="hover:text-white">Signup</Link>
//           </li>

//           <li>
//             <Link to="/login" className="hover:text-white">Login</Link>
//           </li>
//             <li>
//             <Link to="/logout" className="hover:text-white">Logout</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Hamburger */}
//       <button
//         onClick={() => setMenuOpen(true)}
//         className="lg:hidden text-3xl text-white"
//       >
//         <RiMenu4Fill />
//       </button>

//       {/* Overlay */}
//       {menuOpen && (
//         <div
//           onClick={() => setMenuOpen(false)}
//           className="fixed inset-0 bg-black/60 z-40"
//         />
//       )}

//       {/* Mobile Menu */}
//       <aside
//         className={`fixed top-0 right-0 h-screen w-[80%] max-w-[320px] bg-white z-50 p-6 transition-transform duration-300 ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <button
//           onClick={() => setMenuOpen(false)}
//           className="text-3xl text-pink-500"
//         >
//           <MdOutlineCancel />
//         </button>

//         <ul className="mt-10 flex flex-col gap-6 text-pink-500 text-lg font-medium">
//           <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
//           <li><Link to="/Wigs" onClick={() => setMenuOpen(false)}>Wigs</Link></li>
//           <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link></li>
//           <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>
//           <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link></li>
//           <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
//           <li><Link to="/logout" onClick={() => setMenuOpen(false)}>Logout</Link></li>
//         </ul>
//       </aside>
//     </div>
//   );
// }

// export default Header;


import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";

// import useAuth from "../../hooks/useAuth";




import avatar from "../assets/avatar.png";
import my_logo from "../assets/my_logo-removebg-preview.png";
import EcomContext from "../context/EcomContext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navigate = useNavigate();

  // const { cartItems, logoutUser, useAuth } = useContext(EcomContext);
  // const { cartItems, logoutUser } = useContext(EcomContext);
  const { user, cartItems, logoutUser } = useContext(EcomContext);

  // const user = useAuth();

  const cartCount = cartItems.reduce((t, i) => t + i.quantity, 0);

  const handleLogout = () => {
    logoutUser();
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <div className="sticky top-0 z-50 bg-gray-800 px-5 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={my_logo} alt="logo" className="w-[120px]" />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex">
        <ul className="flex items-center gap-6 text-pink-500 font-medium">
          <li>
            <Link to="/" className="hover:text-white">Home</Link>
          </li>

          <li>
            <Link to="/wigs" className="hover:text-white">Wigs</Link>
          </li>
           <li>
            <Link to="/shopall" className="hover:text-white">ShopAll</Link>
          </li>

          {/* Cart */}
          <li className="relative">
            <Link to="/cart" className="flex items-center hover:text-white">
              <FaShoppingCart className="text-xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>

          {/* User Section */}
          {/* {user ? (
            <>
              <li className="flex items-center gap-2 text-white">
                <img
                  src={user.profileImage || avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span>Hi, {user.firstName}</span>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-white"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup" className="hover:text-white">Signup</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-white">Login</Link>
              </li>
            </>
          )} */}

          {/* {user && (
          <>
            <li>
              <Link to="/dashboard" className="hover:text-white">
                Dashboard
              </Link>
            </li>
            <li className="flex items-center gap-2 text-white">
              <img
                src={user.profileImage || avatar}
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
              <span>Hi, {user.firstName}</span>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="hover:text-white"
              >
                Logout
              </button>
            </li>
          </>
        )} */}

        {user ? (
  <>
    <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
    <li><Link to="/profile" className="hover:text-white">Profile</Link></li>
    <li>
      <button onClick={handleLogout} className="hover:text-white">
        Logout
      </button>
    </li>
  </>
) : (
  <>
    <li><Link to="/signup" className="hover:text-white">Signup</Link></li>
    <li><Link to="/login" className="hover:text-white">Login</Link></li>
  </>
)}


        </ul>
      </nav>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(true)}
        className="lg:hidden text-3xl text-white"
      >
        <RiMenu4Fill />
      </button>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* Mobile Menu */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-[320px] bg-white z-50 p-6 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="text-3xl text-pink-500"
        >
          <MdOutlineCancel />
        </button>

        <ul className="mt-10 flex flex-col gap-6 text-pink-500 text-lg font-medium">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/wigs" onClick={() => setMenuOpen(false)}>Wigs</Link></li>
          <li><Link to="/shopall" onClick={() => setMenuOpen(false)}>ShopAll</Link></li>
          <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link></li>

          {/* {user ? (
            <>
              <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-left"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link></li>
              <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
            </>
          )} */}

          {user ? (
            <>
              <li>
                <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
              </li>
              <li>
                <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="text-left">Logout</button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link></li>
              <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
            </>
          )}

        </ul>
      </aside>
    </div>
  );
}

export default Header;


