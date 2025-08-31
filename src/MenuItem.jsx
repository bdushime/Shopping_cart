import { useState } from "react";

export default function MenuItem() {
  const kfcMenu = [
    { name: "Zinger Burger", price: 5.49 },
    { name: "Bucket of 8 Hot Wings", price: 7.99 },
    { name: "Original Recipe Chicken (2 Pieces)", price: 4.99 },
    { name: "Popcorn Chicken (Regular)", price: 3.49 },
    { name: "Chicken Sandwich Combo", price: 6.99 },
    { name: "Famous Bowl", price: 5.79 },
  ];

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  console.log(cart)

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  function toggleItem(item) {
    const index = cart.findIndex((cartItem) => (item.name === cartItem.name));

    if (index !== -1) {
      setCart((prev) => prev.filter((thing) => thing.name !== item.name));
    } else {
      setCart((prev) => [...prev, item]);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">KFC Menu</h1>

        <ul>
          {kfcMenu.map((item, index) => {
            return (
              <li
                key={index}
                className="flex items-center justify-between border-b py-2"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={cart.some((cartItem) => cartItem.name === item.name)}
                  onChange={() => toggleItem(item)}
                />

                <span> {item.name}</span>
                <span>{item.price}</span>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setShowCart(!showCart)}
          className="w-full mt-4 bg-red-500 hover:bg-blue-600 text-white py-2 rounded-lg"
        >
          place Order
        </button>
        {showCart && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Your Order</h2>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between py-1">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-between mt-4 border-t pt-2 text-lg font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
