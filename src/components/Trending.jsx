
import Card from "./shared/Card";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import EcomContext from "../context/EcomContext";

function Trending() {
  const { trending } = useContext(EcomContext);
  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    navigate('/wigs');
  };

  return (
    <section className="relative my-10 mx-6 rounded-xl overflow-hidden">
      
      {/* 🌿 Forest Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-gray-900" />
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 px-6 py-10">
        <h1 className='mb-8 text-center text-pink-400 font-extrabold text-3xl'>
          Trending Now
        </h1>

        <div className='flex gap-6 flex-wrap justify-center'>
          {trending.map((item) => (
            <Card key={item._id} className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center p-4">
              
              {/* Badge */}
              <span className="mb-3 px-4 py-1 text-sm font-bold text-emerald-900 bg-emerald-200 rounded-full">
                100% Virgin Hair
              </span>

              {/* Video */}
              <video
                // src={"http://localhost:3000/" + item.video}
                src={item.video}
                controls
                autoPlay
                loop
                muted
                className="w-full max-w-[350px] h-auto object-contain rounded-md"
              >
                Your browser does not support the video tag.
              </video>

              {/* Info */}
              <p className='font-bold mt-2 text-pink-600 text-center'>{item.name}</p>
              <p className='text-pink-600 font-semibold'>{item.price}</p>

              {/* Order Now */}
              <button
                className='mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full transition'
                onClick={handleOrderNowClick}
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

export default Trending;
