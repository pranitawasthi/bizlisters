// import  { useState } from 'react';
// import { MapPin, ChevronDown } from 'lucide-react';

// const LocationSelector = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedLocation, setSelectedLocation] = useState('New York');

//   const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'];

//   const handleSelectLocation = (location: string) => {
//     setSelectedLocation(location);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center text-gray-700 bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-md text-sm transition-all duration-200"
//       >
//         <MapPin className="h-5 w-5 text-blue-600 mr-1" />
//         <span className="mr-1">{selectedLocation}</span>
//         <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
//       </button>

//       {isOpen && (
//         <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
//           {locations.map((location) => (
//             <button
//               key={location}
//               onClick={() => handleSelectLocation(location)}
//               className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
//                 selectedLocation === location ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
//               }`}
//             >
//               {location}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LocationSelector;















import { useStores } from '../context/StoresContext';

const LocationSelector = () => {
  const { allStores, selectedLocation, setSelectedLocation } = useStores();

  const uniqueLocations = ["All", ...new Set(allStores.map((store) => store.location))];

  return (
    <select
      value={selectedLocation}
      onChange={(e) => setSelectedLocation(e.target.value)}
      className="border border-gray-300 text-black px-3 py-1 rounded-md text-sm"
    >
      {uniqueLocations.map((loc) => (
        <option key={loc} value={loc}>{loc}</option>
      ))}
    </select>
  );
};

export default LocationSelector;


