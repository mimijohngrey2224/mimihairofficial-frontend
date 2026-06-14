
// import Card from '../shared/Card';
// import EcomContext from '../../context/EcomContext';
// import { useContext } from 'react';
// import { Link } from 'react-router-dom';

// function Wigs() {
//   const { wig, addToCart, cartItems } = useContext(EcomContext);

//   console.log(cartItems);

//   return (
//     <div>
//       <div className='my-[20px] mx-[30px]'>
//         {/* Centering the header text and styling it */}
//         <h1 className='mb-[20px] text-pink-600 font-extrabold text-3xl text-center'>
//           Super Double Drawn Bundles
//         </h1>
//         <div className='flex gap-4 flex-wrap'>
//           {wig.map((item, index) => (
//             <Card key={`${item.id}-${index}`} className="flex flex-col items-center">
//               {/* <Card key={`${item.id}-${index}`} className="flex flex-col items-center"></Card> */}
//               {/* New unique "100% Virgin Hair" header */}
//               {/* <h1 className='text-pink-500 font-bold text-xl mb-2'>
//                 100% Virgin Hair
//               </h1> */}

//               {/* Full width button with "100% Virgin Hair" text */}
//             <button className='bg-pink-600 font-bold text-white mb-2 border-2 border-pink-500 rounded w-full p-[10px]'>
//               100% Virgin Hair
//             </button>
              
//               {/* Image with aspect ratio preserved */}
//               <Link to={`/detail/${item.id}`}><img
//                 src={item.img}
//                 alt={item.name}
//                 className='w-full h-auto max-w-[345px] max-h-[355px] object-cover'
//               /></Link>
//               <p className='font-bold'>{item.name}</p>
//               <p>₦{item.price}</p>
//               <button onClick={()=> addToCart({...item, quantity: 1 })} className='bg-pink-600 text-white p-[10px] rounded mt-[10px]'>
//                 Add to cart
//               </button>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Wigs;


// import Card from '../shared/Card';
// import EcomContext from '../../context/EcomContext';
// import { useContext } from 'react';
// import { Link } from 'react-router-dom';

// function Wigs() {
//   const { wigs, addToCart, cartItems } = useContext(EcomContext);

//    console.log(cartItems);

//   return (
//     <section className="relative my-10 mx-6 rounded-xl overflow-hidden">

//       {/* 🌿 Forest Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-gray-900" />
//       <div className="absolute inset-0 bg-black/40" />

//       {/* CONTENT */}
//       <div className="relative z-10 px-6 py-10">
//         <h1 className="text-center mb-8 text-pink-400 font-extrabold text-3xl">
//           Super Double Drawn Bundles
//         </h1>

//         <div className="flex gap-6 flex-wrap justify-center">

          

//           {wigs?.map((item, index) => (
            
//             <Card
//               key={`${item._id}-${index}`}
//               className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center p-4"
//             >
//               {/* Badge */}
//               <span className="mb-3 px-4 py-1 text-sm font-bold text-emerald-900 bg-emerald-200 rounded-full">
//                 100% Virgin Hair
//               </span>

//               {/* Product Image */}
//               <Link to={`/detail/${item._id}`}>
//                 <img
//                   // src={"http://localhost:3000/uploads" + item.img}

//                    src={`http://localhost:3000/uploads/${item.img}`} 

//                   alt={item.name}
//                   className="w-full max-w-[300px] h-[300px] object-cover rounded-md"
//                 />
//               </Link>

//               {/* Product Info */}
//               <p className="mt-3 font-bold text-pink-600 text-center">{item.name}</p>
//               <p className="text-pink-600 font-semibold">₦{item.price}</p>

//               {/* Add to Cart Button */}
//               <button
//                 onClick={() => addToCart({ ...item, quantity: 1 })}
//                 className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full transition"
//               >
//                 Add to Cart
//               </button>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Wigs;



// broken images
// import Card from "../shared/Card";
// import EcomContext from "../../context/EcomContext";
// import { useContext } from "react";
// import { Link } from "react-router-dom";

// function Wigs() {
//   const { wigs, addToCart, cartItems } = useContext(EcomContext);

//   console.log("CART ITEMS:", cartItems);
//   console.log("WIGS ARRAY:", wigs);

//   return (
//     <section className="relative my-10 mx-6 rounded-xl overflow-hidden">
//       {/* 🌿 Forest Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-gray-900" />
//       <div className="absolute inset-0 bg-black/40" />

//       {/* CONTENT */}
//       <div className="relative z-10 px-6 py-10">
//         <h1 className="text-center mb-8 text-pink-400 font-extrabold text-3xl">
//           Super Double Drawn Bundles
//         </h1>

//         <div className="flex gap-6 flex-wrap justify-center">
//           {wigs?.map((item, index) => {
//             console.log("WIG IMAGE VALUE:", item.img);

//             return (
//               <Card
//                 key={`${item._id}-${index}`}
//                 className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center p-4"
//               >
//                 {/* Badge */}
//                 <span className="mb-3 px-4 py-1 text-sm font-bold text-emerald-900 bg-emerald-200 rounded-full">
//                   100% Virgin Hair
//                 </span>

//                 {/* Product Image */}
//                 <Link to={`/detail/${item._id}`}>
//                   <img
//                     src={
//                       item.img?.startsWith("uploads/")
//                         ? `http://localhost:3000/${item.img}`
//                         : `http://localhost:3000/uploads/${item.img}`
//                     }
//                     alt={item.name}
//                     className="w-full max-w-[300px] h-[300px] object-cover rounded-md"
//                   />
//                 </Link>

//                 {/* Product Info */}
//                 <p className="mt-3 font-bold text-pink-600 text-center">
//                   {item.name}
//                 </p>
//                 <p className="text-pink-600 font-semibold">
//                   ₦{item.price}
//                 </p>

//                 {/* Add to Cart Button */}
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

// export default Wigs;



import Card from "../shared/Card";
import EcomContext from "../../context/EcomContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Wigs() {
  const { wigs, addToCart, cartItems } = useContext(EcomContext);

  console.log("CART ITEMS:", cartItems);
  console.log("WIGS ARRAY:", wigs);

  return (
    <section className="relative my-10 mx-6 rounded-xl overflow-hidden">
      {/* 🌿 Forest Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-gray-900" />
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 px-6 py-10">
        <h1 className="text-center mb-8 text-pink-400 font-extrabold text-3xl">
          Super Double Drawn Bundles
        </h1>

        <div className="flex gap-6 flex-wrap justify-center">
          {wigs?.map((item, index) => {
            // ❌ Skip videos in image grid
            if (item.img?.endsWith(".mp4")) return null;

            // ✅ Normalize Windows paths
            const normalizedImg = item.img
              ?.replace(/\\/g, "/")
              ?.replace(/^uploads\//, "");

            const imageUrl = `http://localhost:3000/uploads/${normalizedImg}`;

            return (
              <Card
                key={`${item._id}-${index}`}
                className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center p-4"
              >
                <span className="mb-3 px-4 py-1 text-sm font-bold text-emerald-900 bg-emerald-200 rounded-full">
                  100% Virgin Hair
                </span>

                <Link to={`/detail/${item._id}`}>
                  <img
                    src={imageUrl}
                    alt={item.name}
                    className="w-full max-w-[300px] h-[300px] object-cover rounded-md"
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

export default Wigs;



