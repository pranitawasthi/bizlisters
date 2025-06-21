// import { useState } from 'react';
// import { Star, MapPin, ExternalLink } from 'lucide-react';
// import { useStores } from '../context/StoresContext';
// import { Link } from 'react-router-dom';

// const FrontSlist = () => {
//   const { stores } = useStores();
//   const [visibleCount, setVisibleCount] = useState(6); // Show first 6 stores initially

//   const visibleStores = stores.slice(0, visibleCount);

//   return (
//     <section id="stores" className="py-12 px-4 max-w-7xl mx-auto">
//       {/* Heading */}
//       <div className="mb-8 text-center">
//         <h2 className="text-3xl font-bold text-gray-900">Popular Stores</h2>
//         <p className="text-gray-500 mt-1 text-sm">Top-rated businesses in your area</p>
//       </div>

//       {/* Store Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {visibleStores.map((store) => (
//           <div
//             key={store._id}
//             className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col"
//           >
//             {/* Store Image */}
//             <div className="relative h-44 overflow-hidden">
//               <img
//                 src={store.image}
//                 alt={store.name}
//                 className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
//                 <div className="p-4 text-white">
//                   <h3 className="text-lg font-bold">{store.name}</h3> {store._id}
//                   <div className="flex items-center mt-1 text-sm">
//                     <div className="flex">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className={`h-4 w-4 ${
//                             i < Math.floor(store.rating)
//                               ? 'fill-yellow-400 text-yellow-400'
//                               : 'text-gray-300'
//                           }`}
//                         />
//                       ))}
//                     </div>
//                     <span className="ml-2">
//                       {store.rating.toFixed(1)} ({store.reviewCount})
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Store Info */}
//             <div className="p-4 flex-grow">
//               <div className="flex items-center text-gray-500 text-sm mb-2">
//                 <MapPin className="h-4 w-4 mr-1" />
//                 <span>{store.location}</span>
//               </div>

//               <div className="flex flex-wrap gap-2 mb-3">
//                 {store.categories.map((category, index) => (
//                   <span
//                     key={index}
//                     className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
//                   >
//                     {category}
//                   </span>
//                 ))}
//               </div>

//               <p className="text-gray-600 text-sm line-clamp-3">{store.description}</p>
//             </div>

//             {/* CTA Button */}
//             <div className="px-4 pb-4 mt-auto">
//               {/* <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center">
//                 <span>Visit Store</span>
//                 <ExternalLink className="h-4 w-4 ml-1" />
//               </button> */}
//               <Link
//   to={`/store/${store.name}`}
//   className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center"
// >
//   <span>Visit Store</span>
//   <ExternalLink className="h-4 w-4 ml-1" />
// </Link>

//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View More Button */}
//       {visibleCount < stores.length && (
//         <div className="mt-10 text-center">
//           <button
//             onClick={() => setVisibleCount((prev) => prev + 6)}
//             className="px-6 py-2 bg-white border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
//           >
//             View More
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default FrontSlist;









import { useState } from 'react';
import { Star, MapPin, ExternalLink } from 'lucide-react';
import { useStores } from '../context/StoresContext';
import { Link } from 'react-router-dom';

const FrontSlist = () => {
  const { stores } = useStores();
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleStores = stores.slice(0, visibleCount);

  return (
    <section id="stores" className="py-12 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-[#2874f0]">Popular Stores</h2>
        <p className="text-gray-600 mt-1 text-sm">Top-rated businesses in your area</p>
      </div>

      {/* Store Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleStores.map((store) => (
          <div
            key={store._id}
            className="bg-white rounded-xl shadow border border-blue-100 hover:shadow-lg transition duration-300 flex flex-col"
          >
            {/* Store Image */}
            <div className="relative h-44 overflow-hidden">
              <img
                src={store.image}
                alt={store.name}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-bold">{store.name}</h3>
                  <div className="flex items-center mt-1 text-sm">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(store.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2">
                      {store.rating.toFixed(1)} ({store.reviewCount})
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Info */}
            <div className="p-4 flex-grow">
              <div className="flex items-center text-gray-600 text-sm mb-2">
                <MapPin className="h-4 w-4 mr-1 text-[#2874f0]" />
                <span>{store.location}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {store.categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 text-sm line-clamp-3">{store.description}</p>
            </div>

            {/* CTA Button */}
            <div className="px-4 pb-4 mt-auto">
              <Link
                to={`/store/${store.name}`}
                className="w-full py-2 bg-[#2874f0] hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center"
              >
                <span>Visit Store</span>
                <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {visibleCount < stores.length && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-2 bg-white border border-[#2874f0] text-[#2874f0] rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default FrontSlist;
