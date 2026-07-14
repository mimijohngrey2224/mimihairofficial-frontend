
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

export default App;

