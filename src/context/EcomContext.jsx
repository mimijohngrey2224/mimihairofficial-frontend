import { createContext, useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const EcomContext = createContext();

export const EcomProvider = ({ children }) => {
  const [featured, setFeatured] = useState([]);
  const [trending, setTrending] = useState([]);
  const [wigs, setWigs] = useState([]);
  const [shopAll, setShopAll] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  const [alert, setAlert] = useState(null);

// const showAndHide = (type, message) => {
//   setAlert({ type, message });

//   setTimeout(() => {
//     setAlert(null);
//   }, 3000);
// };

// const showAndHide = (type, message) => {
//   setAlert({ type, message, visible: true });

//   setTimeout(() => {
//     // fade out first
//     setAlert(prev => ({ ...prev, visible: false }));

//     // remove after fade out animation
//     setTimeout(() => setAlert(null), 500);
//   }, 3000); // 3 seconds visible
// };

const showAndHide = (type, message) => {
  setAlert({ type, message }); // no visible flag

  setTimeout(() => {
    setAlert(null);
  }, 3000); // alert disappears after 3 seconds
};

const fetchUser = async () => {
  const token = localStorage.getItem("auth-token");

  if (!token) return;

  try {
    const res = await fetch(`${API_URL}/api/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      setUser(null);
      return;
    }

    const data = await res.json();
    setUser(data);
  } catch (err) {
    console.log("Fetch user error:", err);
  }
};

  useEffect(() => {
  const token = localStorage.getItem("auth-token");
  if (token) {
    fetchUser();
  }
}, []);


useEffect(() => {
  let anonId = localStorage.getItem("anonymousId");

  if (!anonId) {
    anonId = crypto.randomUUID();
    localStorage.setItem("anonymousId", anonId);
  }
}, []);

const loginUser = async (token) => {
  localStorage.setItem("auth-token", token);

  await fetchUser();   // ✅ get user from backend
  await fetchCart();   // ✅ get cart after login
};


  const logoutUser = () => {
    localStorage.removeItem("auth-token");
    setUser(null);
  };

  /* =========================
     PRODUCT FETCHING (UNCHANGED)
  ========================== */

  useEffect(() => {
    fetchFeatured();
    fetchTrending();
    fetchWigs();
    fetchShopAll();
  }, []);

  const fetchFeatured = async () => {
    try {
      // const res = await fetch("http://localhost:3000/api/products/featured")
      const res = await fetch(`${API_URL}/api/products/featured`);
      const data = await res.json();
      setFeatured(data);
    } catch (err) {
      console.error("Failed to fetch featured products", err);
    }
  };

  const fetchTrending = async () => {
    try {
      // const res = await fetch("http://localhost:3000/api/products/trending");
      const res = await fetch(`${API_URL}/api/products/trending`)
      const data = await res.json();
      setTrending(data);
    } catch (err) {
      console.error("Failed to fetch trending products", err);
    }
  };

  const fetchWigs = async () => {
    try {
      const res = await fetch(`${API_URL}/api/products/category/69724ceedbc24cf84962c736`
   // "http://localhost:3000/api/products/category/69724ceedbc24cf84962c736"

      );
      const data = await res.json();
      setWigs(data);
    } catch (err) {
      console.error("Failed to fetch wigs", err);
    }
  };

  const fetchShopAll = async () => {
    try {
      // const res = await fetch("http://localhost:3000/api/products/shopall");
      const res = await fetch(`${API_URL}/api/products/shopall`);
      const data = await res.json();
      setShopAll(data);
    } catch (err) {
      console.error("Failed to fetch shopAll", err);
    }
  };

//new 19 march
const fetchCart = async () => {
  try {
    const token = localStorage.getItem("auth-token");

    const response = await fetch(`${API_URL}/api/cart`, {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      credentials: "include",
    });

    const data = await response.json();

    setCartItems(
      data.products.map((item) => ({
        _id: item.product._id,
        name: item.product.name,
        price: item.product.price,
        img: item.product.img,
        quantity: item.quantity,
      }))
    );

  } catch (error) {
    console.log("Fetch cart error:", error);
  }
};

const addToCart = async (item) => {
  try {
    const token = localStorage.getItem("auth-token");

    const response = await fetch(`${API_URL}/api/cart/addToCart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      credentials: "include", // 🔥 REQUIRED
      body: JSON.stringify({
        productId: item._id,
        quantity: 1,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error || "Add to cart failed");
      return;
    }

  setCartItems(
  data.products.map((item) => ({
    _id: item.product._id,
    name: item.product.name,
    price: item.product.price,
    img: item.product.img,
    quantity: item.quantity,
  }))
);

  } catch (error) {
    console.log("Add to cart error:", error);
  }
};

const updateQuantity = async (productId, newQuantity) => {
  try {
    const token = localStorage.getItem("auth-token");

    if (newQuantity <= 0) {
      return removeItem(productId);
    }

    const response = await fetch(`${API_URL}/api/cart/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      credentials: "include", // 🔥 REQUIRED
      body: JSON.stringify({
        productId,
        quantity: newQuantity,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error || "Update quantity failed");
      return;
    }

    setCartItems(
  data.products.map((item) => ({
    _id: item.product._id,
    name: item.product.name,
    price: item.product.price,
    img: item.product.img,
    quantity: item.quantity,
  }))
);

  } catch (error) {
    console.log("Update quantity error:", error);
  }
};

//working without alert
// const removeItem = async (itemId) => {
//   try {
//     const token = localStorage.getItem("auth-token");

//     const response = await fetch(
//       `http://localhost:3000/api/cart/remove/${itemId}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           ...(token && { Authorization: `Bearer ${token}` }),
//         },
//         credentials: "include",
//       }
//     );

//     const data = await response.json();

//     if (!response.ok) {
//       console.log(data.error);
//       return;
//     }

//     // ✅ FIXED FORMAT
//     setCartItems(
//       data.products.map((item) => ({
//         _id: item.product._id,
//         name: item.product.name,
//         price: item.product.price,
//         img: item.product.img,
//         quantity: item.quantity,
//       }))
//     );

//   } catch (error) {
//     console.log("Remove item error:", error);
//   }
// };


//working with alert
const removeItem = async (itemId) => {
  try {
    const token = localStorage.getItem("auth-token");

    const response = await fetch(`${API_URL}/api/cart/remove/${itemId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        credentials: "include",
      }
    );

    const data = await response.json();

    // ❌ ERROR CASE
    if (!response.ok) {
      console.log(data.error);

      // ✅ ADD ALERT HERE
      showAndHide("error", data.error || "Failed to remove item");

      return;
    }

    // ✅ SUCCESS CASE → ADD ALERT HERE
    showAndHide("success", "Item removed from cart");
    console.log("ALERT TRIGGERED");

    // ✅ UPDATE CART
    setCartItems(
      data.products.map((item) => ({
        _id: item.product._id,
        name: item.product.name,
        price: item.product.price,
        // price: Number(item.product.price),
        img: item.product.img,
        quantity: item.quantity,
      }))
    );

  } catch (error) {
    console.log("Remove item error:", error);

    // ✅ ALSO HANDLE NETWORK ERROR
    showAndHide("error", "Something went wrong");
  }
};
  
  // const totalAmount = () =>
  // cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const totalAmount = () =>
  cartItems.reduce((sum, item) => {
    return sum + Number(item.price) * Number(item.quantity);
  }, 0);

  
// 15 april 2026
  // const totalAmount = () =>
  //    console.log(cartItems);
  // cartItems.reduce((sum, item) => {
  //   const price = Number(item.price);
  //   const quantity = Number(item.quantity);
  //   return sum + price * quantity;
  // }, 0);

 

  // const handleCheckout = async(amount, currency)=>{
  //   const data = await response.json();
  //   console.log("FLW RESPONSE:", data);
  //   try {
  //     const response = await fetch("http://localhost:3000/api/payment/initiate", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // "auth-token": `${localStorage.getItem("auth-token")}`,
  //          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
  //       },
  //       body: JSON.stringify({amount, currency})
  //     })

  //     const data = await response.json()
  //     if (response.ok) {
  //       // window.location.href = <data value="" className="link"></data>
  //       window.location.href = data.link;
  //     }else{
  //       console.error(data.msg || "Failed to Initiate Payment");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  

  const handleCheckout = async (amount, currency) => {
  try {
    const response = await fetch(`${API_URL}/api/payment/initiate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
      body: JSON.stringify({ amount, currency }),
    });

    const data = await response.json();

    console.log("FLW RESPONSE:", data); // ✅ now it's valid

    if (response.ok) {
      if (data.link) {
        window.location.href = data.link; // ✅ redirect to Flutterwave
      } else {
        console.error("No payment link returned", data);
      }
    } else {
      console.error(data.msg || "Failed to Initiate Payment");
    }
  } catch (error) {
    console.error("Checkout error:", error);
  }
};

  return (
    <EcomContext.Provider
      value={{
        featured,
        trending,
        wigs,
        shopAll,
        cartItems,
        setCartItems,
        alert,
        showAndHide,
        addToCart,
        updateQuantity,
        removeItem,
        totalAmount,
        handleCheckout,

        /* AUTH */

        user,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};

export default EcomContext;

