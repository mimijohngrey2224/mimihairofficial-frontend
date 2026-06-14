// import { useContext } from "react";
// import EcomContext from "../context/EcomContext";

// // const GlobalAlert = () => {
// //   const { alert } = useContext(EcomContext);

// //    console.log("GLOBAL ALERT RENDER:", alert);

// //   if (!alert) return null;

// //   return (
// //     <div
// //       className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg text-white z-50
// //         ${alert.type === "success" ? "bg-green-500" : "bg-red-500"}`}
// //     >
// //       {alert.message}
// //     </div>
// //   );
// // };

// const GlobalAlert = () => {
//   const { alert } = useContext(EcomContext);

//   console.log("GLOBAL ALERT RENDER:", alert);

//   if (!alert) return null;

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: "20px",
//         right: "20px",
//         zIndex: 999999, // 🔥 VERY HIGH
//         backgroundColor: alert.type === "success" ? "green" : "red",
//         color: "white",
//         padding: "12px 20px",
//         borderRadius: "6px",
//         boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
//       }}
//     >
//       {alert.message}
//     </div>
//   );
// };

// export default GlobalAlert;

import { useContext } from "react";
import EcomContext from "../context/EcomContext";

const GlobalAlert = () => {
  const { alert } = useContext(EcomContext);

  if (!alert) return null;

  return (
    <div
      className={`fixed top-5 right-5 z-[9999] px-4 py-2 rounded shadow-lg text-white
        ${alert.type === "success" ? "bg-green-500" : "bg-red-500"}`}
    >
      {alert.message}
    </div>
  );
};

export default GlobalAlert;


