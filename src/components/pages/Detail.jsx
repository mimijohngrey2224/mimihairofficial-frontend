// import pixiewig from '/pixie culy.jpg'


// function Detail() {
//   return (
//     <div className='flex m-[5%] gap-5'>
//         <div className='w-[50%]'>
//             <img src={pixiewig} alt="" className='h-[400px] w-[400px]' />
//         </div>
//         <div>
//             <h1 className='text-xl font-bold border-b-2 mb-5'>Item Title</h1>
//             <p>100% vigin hair and best quality hair, with years warrant</p>
//             <p className='text-xl font-bold mb-5 mt-5'>Item Price</p>
//             <button className='bg-pink-600 p-[10px] rounded-md'>Add to Cart</button>
//         </div>
//     </div>
//   )
// }

// export default Detail



// import { useParams } from 'react-router-dom';
// import { useContext } from 'react';
// import EcomContext from '../../context/EcomContext';


// function Detail() {

//     const params = useParams()
//     const hairid = params.id
//     const {wig} = useContext(EcomContext)
//     const hairitem = wig.find((item) => parseInt(item._id) === parseInt(hairid))

//   return (
//     <div className="flex flex-col lg:flex-row m-[5%] gap-10 bg-gray-50 p-8 rounded-lg shadow-lg">
//       {/* Left Column: Image */}
//       <div className="flex justify-center items-center w-full lg:w-[50%] mb-6 lg:mb-0">
//         <img src={"http://localhost:3000/" + hairitem?.img} alt="Pixie Curly Wig" className="h-[400px] w-[400px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
//       </div>

//       {/* Right Column: Item Details */}
//       <div className="flex flex-col justify-start w-full lg:w-[50%]">
//         <h1 className="text-3xl font-semibold text-gray-800 border-b-2 border-pink-600 pb-2 mb-4">{hairitem?.name}</h1>
//         <p className="text-gray-600 text-lg mb-4">100% virgin hair with the best quality, featuring years of durability and a natural look.</p>
        
//         <div className="flex justify-between items-center mb-6">
//           <p className="text-2xl font-bold text-gray-900">{hairitem?.price}</p>
//           <button className="bg-pink-600 text-white py-2 px-6 rounded-md text-lg font-semibold shadow-md hover:bg-pink-700 transition-colors duration-300">
//             Add to Cart
//           </button>
//         </div>

//         {/* Additional Details (optional) */}
//         <div className="flex gap-5 text-gray-700 text-lg">
//           <div className="flex flex-col items-center">
//             <span className="font-bold text-lg">Hair Type</span>
//             <span>Virgin Curly</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="font-bold text-lg">Warranty</span>
//             <span>5 Year</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Detail;

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import EcomContext from "../../context/EcomContext";


function Detail() {
  const { id } = useParams();
  const [hairitem, setHairItem] = useState(null);
  const { addToCart } = useContext(EcomContext);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setHairItem(data));
  }, [id]);

  if (!hairitem) return <p className="text-center mt-10">Loading...</p>;

//   const handleAddToCart = () => {
//   const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

//   const itemExists = existingCart.find(item => item._id === hairitem._id);

//   if (itemExists) {
//     alert("Item already in cart");
//     return;
//   }

//   const updatedCart = [...existingCart, hairitem];
//   localStorage.setItem("cart", JSON.stringify(updatedCart));

//   alert("Item added to cart!");
// };

  return (
    <div className="flex flex-col lg:flex-row m-[5%] gap-10 bg-gray-50 p-8 rounded-lg shadow-lg">
      {/* Image */}
      <div className="flex justify-center items-center w-full lg:w-[50%]">
        <img
          src={`http://localhost:3000/${hairitem.img}`}
          alt={hairitem.name}
          className="h-[400px] w-[400px] object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col w-full lg:w-[50%]">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          {hairitem.name}
        </h1>

        <p className="text-gray-600 mb-4">
          100% virgin hair with the best quality.
        </p>

        <p className="text-2xl font-bold mb-6">
          ₦{hairitem.price}
        </p>

        {/* <button className="bg-pink-600 text-white py-2 px-6 rounded-md">
          Add to Cart
        </button> */}

        {/* <button
        onClick={handleAddToCart}
        className="bg-pink-600 text-white py-2 px-6 rounded-md"
        >
        Add to Cart
      </button> */}

      <button
        onClick={() => addToCart(hairitem)}
        className="bg-pink-600 text-white py-2 px-6 rounded-md"
      >
        Add to Cart
      </button>
      </div>
    </div>
  );
}

export default Detail;

