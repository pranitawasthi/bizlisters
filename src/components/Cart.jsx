// import { useCart } from '../context/CartContext';
// import { Trash2, Plus, Minus } from 'lucide-react';
// import Navbar from './Navbar';

// export const Cart = () => {
//   const { cart, removeFromCart, updateQuantity } = useCart();

//   const getTotal = () =>
//     cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

//   return (
//     <>
//       <Navbar />

//       <div className="max-w-5xl mx-auto px-4 py-8">
//         <h2 className="text-3xl font-bold mb-6 text-gray-800">🛒 Your Cart</h2>

//         {cart.length === 0 ? (
//           <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
//         ) : (
//           <div className="space-y-6">
//             {cart.map((item) => (
//               <div
//                 key={item.product._id}
//                 className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 p-4 border rounded-xl shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <div className="flex items-center gap-4 w-full sm:w-auto">
//                   <img
//                     src={item.product.image}
//                     alt={item.product.name}
//                     className="w-20 h-20 object-cover rounded-lg border"
//                   />
//                   <div>
//                     <h3 className="font-semibold text-lg text-gray-700">{item.product.name}</h3>
//                     <p className="text-sm text-gray-500">${item.product.price.toFixed(2)}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
//                     disabled={item.quantity === 1}
//                     className="p-1 rounded border bg-gray-100 disabled:opacity-50 hover:bg-gray-200 transition"
//                   >
//                     <Minus className="w-4 h-4" />
//                   </button>
//                   <span className="w-8 text-center font-medium">{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
//                     className="p-1 rounded border bg-gray-100 hover:bg-gray-200 transition"
//                   >
//                     <Plus className="w-4 h-4" />
//                   </button>

//                   <button
//                     onClick={() => removeFromCart(item.product._id)}
//                     className="ml-3 text-red-500 hover:text-red-700 transition"
//                   >
//                     <Trash2 className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {cart.length > 0 && (
//           <div className="mt-8 flex justify-between items-center border-t pt-6">
//             <h3 className="text-2xl font-semibold text-gray-800">Total:</h3>
//             <span className="text-2xl font-bold text-green-600">
//               ${getTotal().toFixed(2)}
//             </span>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Cart;


























import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, X, PhoneCall } from 'lucide-react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  console.log(cart);

  const getTotal = () =>
    cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.product._id}
                onClick={() => setSelectedProduct(item.product)}
                className="cursor-pointer flex flex-col sm:flex-row items-center sm:justify-between gap-4 p-4 border rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-700">{item.product.name}</h3>
                    <p className="text-sm text-gray-500">${item.product.price.toFixed(2)}</p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-3"
                  onClick={(e) => e.stopPropagation()} // Prevent modal open
                >
                  <button
                    onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="p-1 rounded border bg-gray-100 disabled:opacity-50 hover:bg-gray-200 transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                    className="p-1 rounded border bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => removeFromCart(item.product._id)}
                    className="ml-3 text-red-500 hover:text-red-700 transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-8 flex justify-between items-center border-t pt-6">
            <h3 className="text-2xl font-semibold text-gray-800">Total:</h3>
            <span className="text-2xl font-bold text-green-600">
              ${getTotal().toFixed(2)}
            </span>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-4xl p-6 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-md"
                />
              </div>

              {/* Info */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h3>
                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

                <div className="text-lg font-semibold text-blue-600 mb-2">
                  ${selectedProduct.price.toFixed(2)}
                  {selectedProduct.discount > 0 && (
                    <span className="ml-2 text-gray-400 text-base line-through">
                      ${(selectedProduct.price * (1 + selectedProduct.discount / 100)).toFixed(2)}
                    </span>
                  )}
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  Sold by: {selectedProduct.store}
                </div>

                <div className="flex flex-wrap gap-4">
                  {/* Contact Seller */}
                  <button
                    onClick={async () => {
                      try {
                        const res = await axios.get(
                          `http://localhost:3000/store/stores/name/${selectedProduct.store}`
                        );
                        const phone = res.data?.store?.phone;
                        if (phone) {
                          window.open(`tel:${phone}`, '_blank');
                        } else {
                          alert('Phone number not found for this seller.');
                        }
                      } catch (err) {
                        console.error('Error fetching store:', err);
                        alert('Failed to fetch contact info.');
                      }
                    }}
                    className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                  >
                    <PhoneCall className="h-4 w-4" />
                    Contact Seller
                  </button>

                  {/* Visit Store */}
                  <Link
                    to={`/store/${selectedProduct.store}`}
                    className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    🌐 Visit Store
                  </Link>

                  {/* Add to Cart Again */}
                  <button
                    onClick={() => addToCart({ ...selectedProduct, _id: selectedProduct._id })}
                    className="flex items-center gap-2 px-5 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
