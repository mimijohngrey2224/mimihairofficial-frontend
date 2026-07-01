// import Card from "../shared/Card";
// import EcomContext from "../../context/EcomContext";
// import { useContext } from "react";
// import { Link } from "react-router-dom";

// function ShopAll() {
//   const { shopAll, addToCart } = useContext(EcomContext);

//   return (
//     <section className="relative my-10 mx-6 rounded-xl overflow-hidden">
//       {/* 🌿 ThemeForest Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-gray-900" />
//       <div className="absolute inset-0 bg-black/40" />

//       {/* CONTENT */}
//       <div className="relative z-10 px-6 py-10">
//         <h1 className="text-center mb-4 text-pink-400 font-extrabold text-3xl">
//           Beauty Essentials & Accessories
//         </h1>

//         <p className="text-center max-w-3xl mx-auto mb-10 text-gray-200 text-lg">
//           Elevate your beauty experience with premium hair accessories and
//           essentials designed to complement your look effortlessly.
//         </p>

//         <div className="mb-16 flex justify-center">
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full max-w-5xl h-[280px] md:h-[340px] rounded-2xl shadow-2xl object-cover"
//           >
//             <source src="/mimivideo.mp4" type="video/mp4" />
//           </video>
//         </div>

//         <h2 className="text-center mb-8 text-white font-bold text-2xl">
//           Shop Our Beauty Essentials
//         </h2>

//         <div className="flex gap-6 flex-wrap justify-center">
//           {shopAll?.map((item) => {
//             console.log("FULL ITEM:", item);
//             console.log("ITEM ID:", item._id);

//             console.log("SHOP ITEM:", item);
//              console.log("SHOP ITEM _ID:", item._id);

//             // console.log(item);
//             console.log(item.img);
//             // ❌ Skip videos
//             if (item.img?.endsWith(".mp4")) return null;




//             {shopAll?.map((item) => {
//   console.log("ITEM:", item);

//   if (item.img?.endsWith(".mp4")) return null;

//   return (
//     <Card
//       key={item._id}
//       className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center p-4"
//     >
//       <Link to={`/detail/${item._id}`}>
//         <img
//           src={item.img}
//           alt={item.name}
//           className="w-full max-w-[260px] h-[260px] object-cover rounded-md"
//         />
//       </Link>

//       <p className="mt-3 font-bold text-pink-600 text-center">
//         {item.name}
//       </p>

//       <p className="text-pink-600 font-semibold">
//         ₦{item.price}
//       </p>

//       <button
//         onClick={() => addToCart({ ...item, quantity: 1 })}
//         className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full transition"
//       >
//         Add to Cart
//       </button>
//     </Card>
//   );
// })}

// //  {shopAll?.map((item) => {

// //   console.log("SHOP ITEM:", item);
// //   console.log("SHOP ITEM _ID:", item._id);

// //   return (
// //     <Card key={item._id}>
// //       ...
// //     </Card>
// //   )
// // })}

//             // ✅ Normalize Windows paths
//             // const normalizedImg = item.img
//             //   ?.replace(/\\/g, "/")
//             //   ?.replace(/^uploads\//, "");

//             // const imageUrl = `http://localhost:3000/uploads/${normalizedImg}`;

//             // <img
//             //   src={item.img}
//             //   alt={item.name}
//             //   className="w-full max-w-[260px] h-[260px] object-cover rounded-md"
//             // />

//             return (
//               <Card
//                 key={item._id}
//                 className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center p-4"
//               >
//                 <Link to={`/detail/${item._id}`}>
//                   <img
//                     src={item.img}
//                     //  src={imageUrl}
//                     alt={item.name}
//                     className="w-full max-w-[260px] h-[260px] object-cover rounded-md"
//                   />
//                 </Link>
//                 <p className="mt-3 font-bold text-pink-600 text-center">
//                   {item.name}
//                 </p>

//                 <p className="text-pink-600 font-semibold">
//                   ₦{item.price}
//                 </p>

//                 <button
//                   onClick={() => addToCart({ ...item, quantity: 1 })}
//                   className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full transition"
//                 >
//                   Add to Cart
//                 </button>
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ShopAll;





// new 20 june 2026
import Card from "../shared/Card";
import EcomContext from "../../context/EcomContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function ShopAll() {
  const { shopAll, addToCart } = useContext(EcomContext);

  //  const IMAGE_BASE_URL = "http://localhost:3000"

  return (
    <section className="relative my-10 mx-6 rounded-xl overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-gray-900" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 px-6 py-10">
        <h1 className="text-center mb-4 text-pink-400 font-extrabold text-3xl">
          Beauty Essentials & Accessories
        </h1>

        <p className="text-center max-w-3xl mx-auto mb-10 text-gray-200 text-lg">
          Elevate your beauty experience with premium hair accessories and essentials.
        </p>

        <div className="mb-16 flex justify-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-5xl h-[280px] md:h-[340px] rounded-2xl shadow-2xl object-cover"
          >
            <source src="/mimivideo.mp4" type="video/mp4" />
          </video>
        </div>

        <h2 className="text-center mb-8 text-white font-bold text-2xl">
          Shop Our Beauty Essentials
        </h2>

        {/* PRODUCTS */}
        <div className="flex gap-6 flex-wrap justify-center">
          {shopAll?.map((item) => {
            // skip invalid items
            if (!item) return null;
            if (item.img?.endsWith(".mp4")) return null;

            return (
              <Card
                key={item._id}
                className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center p-4"
              >
                <Link to={`/detail/${item._id}`}>
                
                  <img
                    // src={item.img}
                    // alt={item.name}
                      // src={`${IMAGE_BASE_URL}/${item.img}`}
                      
                    src={item.img}
                    alt={item.name}
                    className="w-full max-w-[260px] h-[260px] object-cover rounded-md"
                  />
                </Link>

                <p className="mt-3 font-bold text-pink-600 text-center">
                  {item.name}
                </p>

                <p className="text-pink-600 font-semibold">
                  ₦{item.price}
                </p>

                <button
                  onClick={() => addToCart({ ...item, quantity: 1 })}
                  className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full transition"
                >
                  Add to Cart
                </button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ShopAll;



