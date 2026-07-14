
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

              // Skip products that don't have an image
              if (!item.img) return null;

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
                    // src={imageUrl}
                     src={item.img}
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

