// import Header from "./components/Header";
// import Featured from "./components/Featured";
// import { EcomProvider } from "./context/EcomContext";
// import Trending from "./components/Trending";
// import Footer from "./components/Footer";
// import Detail from "./components/pages/Detail";
// import Cart from "./components/pages/Cart";
// import Checkout from "./components/pages/Checkout";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Wigs from "./components/pages/Wigs"
// import Contact from "./components/pages/Contact";
// import PrivacyPolicy from "./components/pages/PrivacyPolicy";
// import Terms from "./components/pages/Terms";
// import Profile from "./components/pages/Profile";
// import Signup from "./components/pages/Signup";
// import Login from "./components/pages/Login";
// import Dashboard from "./components/pages/Dashboard";
// import ThankYou from "./components/pages/ThankYou";
// import ShopAll from "./components/pages/ShopAll";
// // import Alert from "./components/Alert";
// import { AuthProvider } from "./context/AuthContext";






// function App() {



//   return (
// <AuthProvider>
//     <EcomProvider>
//       <Router>
//       <Header />
//       {/* <Alert/> */}
//       <Routes>
//       <Route path="/" element={
//         <>
//           <Featured />
//           <Trending />  
//         </>
//       }/>
//       <Route path="/wigs" element={<Wigs />} />
//       <Route path="/shopall" element={<ShopAll />} />
//       <Route path="/detail/:id" element={<Detail />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/checkout" element={<Checkout />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
//         <Route path="/terms" element={<Terms/>} />
//         <Route path="/profile" element={<Profile/>} />
//         <Route path="/signup" element={<Signup/>} />
//         <Route path="/login" element={<Login/>} />
//         <Route path="/dashboard" element={<Dashboard/>} />
//         <Route path="/thankyou" element={<ThankYou/>} />
//       </Routes>
//       <Footer />
//     </Router>
//   </EcomProvider>
// </AuthProvider>
//   )
// }

// export default App


//working without alert
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import PrivacyPolicy from "./components/pages/PrivacyPolicy";
// import Terms from "./components/pages/Terms";
// import Profile from "./components/pages/Profile";
// import Signup from "./components/pages/Signup";
// import Login from "./components/pages/Login";
// import Dashboard from "./components/pages/Dashboard";
// import ThankYou from "./components/pages/ThankYou";
// import ShopAll from "./components/pages/ShopAll";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Featured from "./components/Featured";
// import Trending from "./components/Trending";
// import Wigs from "./components/pages/Wigs";
// import Detail from "./components/pages/Detail";
// import Cart from "./components/pages/Cart";
// import Checkout from "./components/pages/Checkout";
// import Contact from "./components/pages/Contact";

// import { AuthProvider } from "./context/AuthContext";
// import { EcomProvider } from "./context/EcomContext";
// import useLocalStorage from "../hooks/useLocalStorage";

// function App() {
//   const {getItem} = useLocalStorage("auth-token")
//   const token = getItem()
//   let authInitialState = {accessToken: token ?? null}

//   return (
    
//     <AuthProvider defaultState={authInitialState}>
//       <EcomProvider>
//         <Router>
//           <Header />

//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Featured />
//                   <Trending />
//                 </>
//               }
//             />
//             <Route path="/wigs" element={<Wigs />} />
//             <Route path="/shopall" element={<ShopAll />} />
//             <Route path="/detail/:id" element={<Detail />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/checkout" element={<Checkout />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/privacypolicy" element={<PrivacyPolicy />} />
//             <Route path="/terms" element={<Terms />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/thankyou" element={<ThankYou />} />
//           </Routes>

//           <Footer />
//         </Router>
//       </EcomProvider>
//     </AuthProvider>
//   );
// }

// export default App;


//working with alert
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useContext } from "react"; // ✅ ADD THIS
// import EcomContext from "./context/EcomContext"; // ✅ ADD THIS

// import PrivacyPolicy from "./components/pages/PrivacyPolicy";
// import Terms from "./components/pages/Terms";
// import Profile from "./components/pages/Profile";
// import Signup from "./components/pages/Signup";
// import Login from "./components/pages/Login";
// import Dashboard from "./components/pages/Dashboard";
// import ThankYou from "./components/pages/ThankYou";
// import ShopAll from "./components/pages/ShopAll";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Featured from "./components/Featured";
// import Trending from "./components/Trending";
// import Wigs from "./components/pages/Wigs";
// import Detail from "./components/pages/Detail";
// import Cart from "./components/pages/Cart";
// import Checkout from "./components/pages/Checkout";
// import Contact from "./components/pages/Contact";

// import { AuthProvider } from "./context/AuthContext";
// import { EcomProvider } from "./context/EcomContext";
// import useLocalStorage from "../hooks/useLocalStorage";


// // ✅ THIS SMALL COMPONENT SHOWS ALERT
// function AlertUI() {
//   const { alert } = useContext(EcomContext);

//   if (!alert) return null;

//   return (
//     <div
//       className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg text-white z-50 
//       ${alert.type === "success" ? "bg-green-500" : "bg-red-500"}`}
//     >
//       {alert.message}
//     </div>
//   );
// }


// function App() {
//   const { getItem } = useLocalStorage("auth-token");
//   const token = getItem();
//   let authInitialState = { accessToken: token ?? null };

//   return (
//     <AuthProvider defaultState={authInitialState}>
//       <EcomProvider>
//         <Router>

//           {/* ✅ THIS LINE SHOWS ALERT */}
//           <AlertUI />

//           <Header />

//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Featured />
//                   <Trending />
//                 </>
//               }
//             />
//             <Route path="/wigs" element={<Wigs />} />
//             <Route path="/shopall" element={<ShopAll />} />
//             <Route path="/detail/:id" element={<Detail />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/checkout" element={<Checkout />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/privacypolicy" element={<PrivacyPolicy />} />
//             <Route path="/terms" element={<Terms />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/thankyou" element={<ThankYou />} />
//           </Routes>

//           <Footer />
//         </Router>
//       </EcomProvider>
//     </AuthProvider>
//   );
// }

// export default App;



//with alert method 2 20 march
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useContext } from "react";

// import PrivacyPolicy from "./components/pages/PrivacyPolicy";
// import Terms from "./components/pages/Terms";
// import Profile from "./components/pages/Profile";
// import Signup from "./components/pages/Signup";
// import Login from "./components/pages/Login";
// import Dashboard from "./components/pages/Dashboard";
// import ThankYou from "./components/pages/ThankYou";
// import ShopAll from "./components/pages/ShopAll";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Featured from "./components/Featured";
// import Trending from "./components/Trending";
// import Wigs from "./components/pages/Wigs";
// import Detail from "./components/pages/Detail";
// import Cart from "./components/pages/Cart";
// import Checkout from "./components/pages/Checkout";
// import Contact from "./components/pages/Contact";

// import { AuthProvider } from "./context/AuthContext";
// import { EcomProvider } from "./context/EcomContext";
// import EcomContext from "./context/EcomContext";
// import useLocalStorage from "../hooks/useLocalStorage";

// function App() {
//   const { getItem } = useLocalStorage("auth-token");
//   const token = getItem();
//   const authInitialState = { accessToken: token ?? null };

//   return (
//     <AuthProvider defaultState={authInitialState}>
//       <EcomProvider>
//         <Router>
//           {/* ✅ Alert UI */}
//           <GlobalAlert />

            
//     {/* ✅ ALERT COMPONENT */}
//     {alert && (
//       <div
//         className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg text-white z-50 transition-opacity duration-500
//           ${alert.type === "success" ? "bg-green-500" : "bg-red-500"}
//           ${alert.visible ? "opacity-100 animate-fade-in" : "opacity-0 animate-fade-out"}`}
//       >
//         {alert.message}
//       </div>
//     )}

//           <Header />

//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Featured />
//                   <Trending />
//                 </>
//               }
//             />
//             <Route path="/wigs" element={<Wigs />} />
//             <Route path="/shopall" element={<ShopAll />} />
//             <Route path="/detail/:id" element={<Detail />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/checkout" element={<Checkout />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/privacypolicy" element={<PrivacyPolicy />} />
//             <Route path="/terms" element={<Terms />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/thankyou" element={<ThankYou />} />
//           </Routes>

//           <Footer />
//         </Router>
//       </EcomProvider>
//     </AuthProvider>
//   );
// }

// // ✅ Separate component to render the global alert
// const GlobalAlert = () => {
//   const { alert } = useContext(EcomContext);

//   if (!alert) return null;

//   return (
//     <div
//       className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg text-white z-50 
//         ${alert.type === "success" ? "bg-green-500" : "bg-red-500"}`}
//     >
//       {alert.message}
//     </div>
//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Terms from "./components/pages/Terms";
import Profile from "./components/pages/Profile";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import ThankYou from "./components/pages/ThankYou";
import ShopAll from "./components/pages/ShopAll";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import Trending from "./components/Trending";
import Wigs from "./components/pages/Wigs";
import Detail from "./components/pages/Detail";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import Contact from "./components/pages/Contact";

import { AuthProvider } from "./context/AuthContext";
import { EcomProvider } from "./context/EcomContext";
import EcomContext from "./context/EcomContext";
import useLocalStorage from "../hooks/useLocalStorage";
import GlobalAlert from "./components/GlobalAlert";

function App() {
  const { getItem } = useLocalStorage("auth-token");
  const token = getItem();
  const authInitialState = { accessToken: token ?? null };

  return (
    <AuthProvider defaultState={authInitialState}>
      <EcomProvider>
        {/* ✅ ALERT MUST BE INSIDE PROVIDER */}
        <GlobalAlert />

        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<><Featured /><Trending /></>} />
            <Route path="/wigs" element={<Wigs />} />
            <Route path="/shopall" element={<ShopAll />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>

          <Footer />
        </Router>
      </EcomProvider>
    </AuthProvider>
  );
}

// ✅ Fixed GlobalAlert Component
// const GlobalAlert = () => {
//   const { alert } = useContext(EcomContext);

//   if (!alert) return null;

//   return (
//     <div
//       className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg text-white z-50 transition-opacity duration-500
//         ${alert.type === "success" ? "bg-green-500" : "bg-red-500"}
//         ${alert.visible ? "opacity-100 animate-fade-in" : "opacity-0 animate-fade-out"}`}
//     >
//       {alert.message}
//     </div>
//   );
// };

// const GlobalAlert = () => {
//   const { alert } = useContext(EcomContext);

//   if (!alert) return null;

//   return (
//     <div
//       className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg text-white z-50
//         ${alert.type === "success" ? "bg-green-500" : "bg-red-500"}`}
//     >
//       {alert.message}
//     </div>
//   );
// };

export default App;

