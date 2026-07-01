
// import { useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import EcomContext from '../context/EcomContext';
// import Card from './shared/Card';

// function Featured() {
//   const { featured } = useContext(EcomContext);
//   const navigate = useNavigate(); // Navigation hook

//   // Function to handle the "Order Now" button click
//   const handleOrderNowClick = () => {
//     navigate('/wigs'); // Redirects to the Wigs page
//   };

//   return (
//     <div className='my-[20px] mx-[30px]'>
//       <h1 className='mb-[10px] text-pink-600 font-bold text-2xl'>Featured Products</h1>
//       <div className='flex gap-2 flex-wrap'>
//         {featured.map((item) => (
//           <Card key={item.id} className="flex flex-col items-center">
//             <button className='bg-pink-600 font-bold text-white mb-2 border-2 border-pink-500 rounded w-full p-[10px]'>
//               100% Virgin Hair
//             </button>
            
//             <video src={item?.video} autoPlay={true} width="350px" height="200px">
//               Your browser does not support the video tag.
//             </video>
            
//             <p className='font-bold'>{item.name}</p>
//             <p>{item.price}</p>
            
//             {/* Order Now button */}
//             <button
//               className='bg-pink-600 text-white p-[10px] rounded mt-[10px]'
//               onClick={handleOrderNowClick} // Call navigate when clicked
//             >
//               Order Now
//             </button>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Featured;



import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import EcomContext from "../context/EcomContext";
import Card from "./shared/Card";

function Featured() {
  const { featured } = useContext(EcomContext);
  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    navigate("/wigs");
  };

  return (
    <section className="relative my-10 mx-6 rounded-xl overflow-hidden">
      
      {/* 🌿 Forest Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-gray-900" />

      {/* 🌑 Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 px-6 py-10">
        {/* <h1 className="text-center mb-8 text-pink-400 font-bold text-3xl">
          Featured Virgin Hair Collection
        </h1> */}
        <h1 className="text-center mb-8 text-pink-400 font-extrabold text-3xl">
          Signature Virgin Hair Collection
        </h1>


        <div className="flex gap-6 flex-wrap justify-center">
          {featured.map((item) => (
            <Card
              key={item._id}
              className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center p-4"
            >
              {/* Badge */}
              <span className="mb-3 px-4 py-1 text-sm font-bold text-emerald-900 bg-emerald-200 rounded-full">
                100% Virgin Hair
              </span>

              {/* Video */}
              {/* <video
                src={"http://localhost:3000/" + item?.video}
                src={item.video}
                autoPlay
                loop
                muted
                // className="w-[350px] h-[200px] object-cover rounded-md"
                className="w-full max-w-[350px] h-auto object-contain rounded-md"

              /> */}

              <video
                src={item.video}
                autoPlay
                 loop
                muted
                className="w-full max-w-[350px] h-auto object-contain rounded-md"
              />

              {/* Info */}
              <p className="mt-3 font-bold text-pink-600">{item.name}</p>
              <p className="text-pink-600">{item.price}</p>

              {/* Button */}
              <button
                onClick={handleOrderNowClick}
                className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Order Now
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
