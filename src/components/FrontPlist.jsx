// import { useState } from 'react';
// import { Filter, Star, X } from 'lucide-react';
// import { useProducts } from '../context/ProductsContext';
// import { Link } from 'react-router-dom';

// const FrontPlist = () => {
//   const { products } = useProducts();
//   console.log(products);
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [visibleCount, setVisibleCount] = useState(8);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Food'];

//   const filteredProducts =
//     activeCategory === 'All'
//       ? products
//       : products.filter((product) => product.category === activeCategory);

//   const visibleProducts = filteredProducts.slice(0, visibleCount);

//   return (
//     <section id="products" className="py-8">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//         <div>
//           <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
//           <p className="text-gray-600 mt-1">Discover our most popular items</p>
//         </div>

//         <div className="flex items-center mt-4 md:mt-0">
//           <Filter className="h-5 w-5 text-gray-500 mr-2" />
//           <div className="flex flex-wrap gap-2">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => {
//                   setActiveCategory(category);
//                   setVisibleCount(8);
//                 }}
//                 className={`px-3 py-1 text-sm rounded-full transition-colors ${
//                   activeCategory === category
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {visibleProducts.map((product) => (
//           <div
//             key={product.id}
//             onClick={() => setSelectedProduct(product)}
//             className="cursor-pointer bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300"
//           >
//             <div className="relative pb-[56.25%]">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="absolute h-full w-full object-cover"
//               />
//               {product.discount > 0 && (
//                 <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 m-2 rounded">
//                   {product.discount}% OFF
//                 </span>
//               )}
//             </div>

//             <div className="p-4">
//               <div className="flex justify-between items-start">
//                 <h3 className="text-lg font-medium text-gray-900 truncate">{product.name}</h3>
//                 <div className="flex items-center text-yellow-500">
//                   <Star className="h-4 w-4 fill-current" />
//                   <span className="ml-1 text-sm">{product.rating}</span>
//                 </div>
//               </div>

//               <p className="text-gray-500 text-sm mb-2 h-10 overflow-hidden">{product.description}</p>

//               <div className="flex justify-between items-center mt-4">
//                 <div>
//                   <span className="text-blue-600 font-bold">${product.price.toFixed(2)}</span>
//                   {product.discount > 0 && (
//                     <span className="text-gray-400 text-sm line-through ml-2">
//                       ${(product.price * (1 + product.discount / 100)).toFixed(2)}
//                     </span>
//                   )}
//                 </div>
//                 <span className="text-xs text-gray-500">{product.store}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {visibleCount < filteredProducts.length && (
//         <div className="mt-8 text-center">
//           <button
//             onClick={() => setVisibleCount((prev) => prev + 8)}
//             className="px-6 py-2 bg-white border border-blue-600 rounded-md text-blue-600 hover:bg-blue-50 transition-colors font-medium"
//           >
//             View More
//           </button>
//         </div>
//       )}

//       {/* Modal */}
//       {/* {selectedProduct && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
//             <button
//               onClick={() => setSelectedProduct(null)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//             >
//               <X className="h-5 w-5" />
//             </button>

//             <img
//               src={selectedProduct.image}
//               alt={selectedProduct.name}
//               className="w-full h-64 object-cover rounded-md mb-4"
//             />
//             <h2 className="text-xl font-semibold text-gray-900">{selectedProduct.name}</h2>
//             <p className="text-sm text-gray-500 mb-2">{selectedProduct.category}</p>
//             <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
//             <div className="flex justify-between items-center">
//               <span className="text-lg font-bold text-blue-600">${selectedProduct.price.toFixed(2)}</span>
//               <span className="text-sm text-gray-500">{selectedProduct.store}</span>
//             </div>
//           </div>
//         </div>
//       )} */}
//       {selectedProduct && (
//   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//     <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-3xl p-6 relative">
//       <button
//         onClick={() => setSelectedProduct(null)}
//         className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//       >
//         <X className="h-6 w-6" />
//       </button>

//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Image */}
//         <div className="md:w-1/2">
//           <img
//             src={selectedProduct.image}
//             alt={selectedProduct.name}
//             className="w-full h-64 object-cover rounded-md"
//           />
//         </div>

//         {/* Info */}
//         <div className="md:w-1/2 flex flex-col justify-between">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
//             <p className="text-sm text-gray-500 mb-2">{selectedProduct.category}</p>
//             <p className="text-gray-700 mb-4">{selectedProduct.description}</p>

//             <div className="flex items-center text-yellow-500 mb-2">
//               <Star className="h-5 w-5 fill-current" />
//               <span className="ml-1 text-sm">{selectedProduct.rating}</span>
//             </div>

//             <div className="text-lg font-semibold text-blue-600">
//               ${selectedProduct.price.toFixed(2)}
//               {selectedProduct.discount > 0 && (
//                 <span className="text-gray-400 text-sm line-through ml-2">
//                   ${(selectedProduct.price * (1 + selectedProduct.discount / 100)).toFixed(2)}
//                 </span>
//               )}
//             </div>
//           </div>

//           <div className="mt-6 flex gap-4 flex-wrap">
//             {selectedProduct.contact && (
//               <a
//                 href={`https://wa.me/${selectedProduct.contact}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
//               >
//                 Contact Seller
//               </a>
//             )}

//             {selectedProduct.website && (
//               <a
//                 href={selectedProduct.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//               >
//                 Visit Website
//               </a>
//             )}
//           </div>
//           <div className="mt-6 flex flex-wrap gap-4">
//   <button
//     onClick={() =>
//       selectedProduct.contact &&
//       window.open(`https://wa.me/${selectedProduct.contact}`, '_blank')
//     }
//     className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition "
//     disabled={!selectedProduct.contact}
//   >
//     📱 Contact Seller
//   </button>

//   <Link
//     to={`/store/${selectedProduct.store}`}
//     className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//     disabled={!selectedProduct.website}
//   >
//     🌐 Visit Store
//   </Link>
// </div>


//           <p className="text-sm text-gray-500 mt-4">Sold by: {selectedProduct.store}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// )}

//     </section>
//   );
// };

// export default FrontPlist;










import { useState } from 'react';
import { Filter, Star, X } from 'lucide-react';
import { useProducts } from '../context/ProductsContext';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const FrontPlist = () => {
  const { products } = useProducts();
  const { addToCart } = useCart(); // ✅ get addToCart
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Food'];

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section id="products" className="py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <p className="text-gray-600 mt-1">Discover our most popular items</p>
        </div>

        <div className="flex items-center mt-4 md:mt-0">
          <Filter className="h-5 w-5 text-gray-500 mr-2" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(8);
                }}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="cursor-pointer bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative pb-[56.25%]">
              <img
                src={product.image}
                alt={product.name}
                className="absolute h-full w-full object-cover"
              />
              {product.discount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 m-2 rounded">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-900 truncate">{product.name}</h3>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-sm">{product.rating}</span>
                </div>
              </div>

              <p className="text-gray-500 text-sm mb-2 h-10 overflow-hidden">{product.description}</p>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <span className="text-blue-600 font-bold">${product.price.toFixed(2)}</span>
                  {product.discount > 0 && (
                    <span className="text-gray-400 text-sm line-through ml-2">
                      ${(product.price * (1 + product.discount / 100)).toFixed(2)}
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-500">{product.store}</span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="px-6 py-2 bg-white border border-blue-600 rounded-md text-blue-600 hover:bg-blue-50 transition-colors font-medium"
          >
            View More
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-3xl p-6 relative">
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
              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                  <p className="text-sm text-gray-500 mb-2">{selectedProduct.category}</p>
                  <p className="text-gray-700 mb-4">{selectedProduct.description}</p>

                  <div className="flex items-center text-yellow-500 mb-2">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="ml-1 text-sm">{selectedProduct.rating}</span>
                  </div>

                  <div className="text-lg font-semibold text-blue-600">
                    ${selectedProduct.price.toFixed(2)}
                    {selectedProduct.discount > 0 && (
                      <span className="text-gray-400 text-sm line-through ml-2">
                        ${(selectedProduct.price * (1 + selectedProduct.discount / 100)).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex gap-4 flex-wrap">
                  {selectedProduct.contact && (
                    <a
                      href={`https://wa.me/${selectedProduct.contact}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                    >
                      Contact Seller
                    </a>
                  )}

                  {selectedProduct.website && (
                    <a
                      href={selectedProduct.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                      Visit Website
                    </a>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <button
                    onClick={() =>
                      selectedProduct.contact &&
                      window.open(`https://wa.me/${selectedProduct.contact}`, '_blank')
                    }
                    className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition "
                    disabled={!selectedProduct.contact}
                  >
                    📱 Contact Seller
                  </button>

                  <Link
                    to={`/store/${selectedProduct.store}`}
                    className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    🌐 Visit Store
                  </Link>
                </div>

                {/* ✅ Add to Cart in Modal */}
                <button
                  onClick={() => addToCart(selectedProduct)}
                  className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition self-start"
                >
                  🛒 Add to Cart
                </button>

                <p className="text-sm text-gray-500 mt-4">Sold by: {selectedProduct.store}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FrontPlist;
