// import React, { useState } from 'react';
// import { Search } from 'lucide-react';

// const SearchBar = () => {
//   const [query, setQuery] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Implement search functionality
//     console.log('Searching for:', query);
//   };

//   return (
//     <form onSubmit={handleSearch} className="w-full">
//       <div className="relative">
//         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//           <Search className="h-5 w-5 text-gray-400" />
//         </div>
//         <input
//           type="text"
//           className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200"
//           placeholder="Search for products or stores..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="absolute inset-y-0 right-0 flex items-center px-3 rounded-r-md border-l border-gray-300 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <span className="text-sm font-medium">Search</span>
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SearchBar;








import React from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../context/SearchContext';

const SearchBar = () => {
  const { query, setQuery } = useSearch();

  console.log(query)

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching:', query);
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200"
          placeholder="Search for products or stores..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center px-3 rounded-r-md border-l border-gray-300 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span className="text-sm font-medium">Search</span>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
