
//new 20 june 2026
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import EcomContext from "../../context/EcomContext";

function Detail() {
  const { id } = useParams();
  const { addToCart } = useContext(EcomContext);

  const [hairitem, setHairItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://mimihairofficial-api.onrender.com/api/products/${id}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await res.json();

        setHairItem(data);
      } catch (err) {
        console.error(err);
        setError("Product not found or server error");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // ✅ LOADING STATE (prevents crash)
  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-600">
        Loading product...
      </div>
    );
  }

  // ❌ ERROR STATE
  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        {error}
      </div>
    );
  }

  // ❌ SAFETY CHECK (VERY IMPORTANT)
  if (!hairitem) {
    return (
      <div className="text-center mt-10">
        No product found
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row m-[5%] gap-10 bg-gray-50 p-8 rounded-lg shadow-lg">

      {/* IMAGE */}
      <div className="flex justify-center items-center w-full lg:w-[50%]">
        <img
          src={`https://mimihairofficial-api.onrender.com/${hairitem.img}`}
          alt={hairitem.name || "product image"}
          className="h-[400px] w-[400px] object-cover rounded-lg shadow-md"
        />
      </div>

      {/* DETAILS */}
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

        <button
          onClick={() => addToCart(hairitem)}
          className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Detail;

