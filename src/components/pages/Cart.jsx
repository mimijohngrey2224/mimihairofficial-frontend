import { useState } from "react";
import { MdDeleteForever, MdRemove, MdAdd } from "react-icons/md";
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from "react";
import EcomContext from "../../context/EcomContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, updateQuantity, removeItem, totalAmount } = useContext(EcomContext);

  // Update the total dynamically based on cartItems
  // const calculateTotal = () => {
  //   return cartItems.reduce((total, item) => total + item.amount, 0);
  // };

  // Function to handle quantity change from input field
  const handleQuantityChange = (id, value) => {
    // Ensure the quantity is at least 1
    const quantity = Math.max(1, value);
    updateQuantity(id, quantity);
  };

  // Function to handle quantity update for the plus and minus buttons
  const handleQuantityUpdate = (id, change) => {
    const currentItem = cartItems.find(item => item._id === id);
    const newQuantity = Math.max(1, currentItem.quantity + change); // Ensure quantity is at least 1
    updateQuantity(id, newQuantity);
  };

  const cartTable = (
    <table className="w-full table-auto text-gray-700">
      <thead>
        <tr className="border-b text-lg font-semibold text-gray-500">
          <th className="py-3 px-4">Action</th>
          <th className="py-3 px-4">Item</th>
          <th className="py-3 px-4">Image</th>
          <th className="py-3 px-4">Price</th>
          <th className="py-3 px-4">Quantity</th>
          <th className="py-3 px-4">Amount</th>
        </tr>
      </thead>

      <tbody>
        {cartItems.map((item) => (
          <tr className="border-b hover:bg-gray-50 transition duration-300" key={item._id}>
            <td className="py-3 px-4 text-center">
              {/* Action Buttons */}
              <div className="flex justify-center space-x-4">
                <button
                  className="text-gray-500 hover:text-pink-500"
                  onClick={() => handleQuantityUpdate(item._id, -1)} // Decrease quantity
                >
                  <MdRemove size={24} />
                </button>
                <button
                  className="text-gray-500 hover:text-pink-500"
                  onClick={() => handleQuantityUpdate(item._id, 1)} // Increase quantity
                >
                  <MdAdd size={24} />
                </button>
                <button className="text-red-500 hover:text-red-700" 
                  onClick={() => {
                  console.log("Deleting cart item:", item);
                  removeItem(item._id);
                }}>
                
                 {/* onClick={() => removeItem(item._id)} */}
                <MdDeleteForever size={24} />
                </button>
              </div>
            </td>
            <td className="py-3 px-4 text-center">{item.name}</td>
            <td className="py-3 px-4">
              <img
                src={`http://localhost:3000/${item.img}`} // Replace with actual image URL
                alt="Wig"
                className="w-12 h-12 object-cover rounded-full mx-auto"
              />
              {/* <img
  src={`http://localhost:3000/${item.img}`}
  alt={item.name}
/> */}
            </td>
            <td className="py-3 px-4 text-center">{item.price}</td>
            <td className="py-3 px-4">
              <div className="flex justify-center">
                <input
                  type="number"
                  value={item.quantity} // The value is now controlled by React state
                  min="1"
                  className="w-16 text-center border border-gray-300 rounded-lg p-1"
                  onChange={(event) => handleQuantityChange(item._id, event.target.value)} // onChange handler updates the state
                />
              </div>
            </td>
            {/* <td className="py-3 px-4 text-center">₦{item.amount}</td> Amount is dynamically calculated */}
            <td className="py-3 px-4 text-center">₦{item.price * item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Cart Header */}
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          <FaShoppingCart className="inline-block mr-2 text-pink-500" /> Your Shopping Cart
        </h1>
        {cartItems.length > 0 ? cartTable : <h1 className="text-center font-bold">No items in cart</h1>}

        {/* Cart Summary */}
        <div className="mt-6 flex justify-between items-center">
          <div className="text-lg font-semibold text-gray-800 mr-6">
            <span className="text-2xl text-pink-500">Total = ₦{totalAmount()}</span>
            {/* <span className="text-2xl text-pink-500">${calculateTotal()}</span> Total dynamically updated */}
          </div>
          <Link to="/checkout">
          <button className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition duration-300">
            Checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;



