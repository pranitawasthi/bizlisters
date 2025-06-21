    // import {   useState } from 'react';
    // import {  Store, ShoppingBag, Menu, X } from 'lucide-react';
    // import SearchBar from './SearchBar';
    // import LocationSelector from './LocationSelector';
    // import { Link } from 'react-router-dom';
    // import { useAuth } from '../context/AuthContext';
    // import { ProductPage } from './ProductPage';

    // const Navbar = () => {
    //   const [isOpen, setIsOpen] = useState(false);

    //   const {isAuthenticated,user,logout}= useAuth();
    //   return (
    //     <nav className="bg-white shadow-md sticky top-0 z-50">
    //       <div className="container mx-auto px-4">
    //         <div className="flex items-center justify-between h-16">
    //           {/* Logo */}
    //           <div className="flex items-center">
    //             <a href="/" className="flex items-center">
    //               <Store className="h-8 w-8 text-blue-600" />
    //               <span className="ml-2 text-xl font-bold text-gray-900">BizLister</span>
    //             </a>
    //           </div>

    //           {/* Location & Search - Desktop */}
    //           <div className="hidden md:flex items-center justify-center flex-1 mx-8">
    //             {/* <LocationSelector /> */}
    //             <div className="mx-2"></div>
    //             <div className="w-full max-w-md">
    //               <SearchBar />
    //             </div>
    //           </div>

    //           {/* Nav Links - Desktop */}
    //           <div className="hidden md:flex items-center space-x-4">
    //             <a className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
    //               <ShoppingBag className="h-5 w-5 mr-1" />
    //               <Link to="/products" >Products</Link>
    //             </a>
    //             <a className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
    //               <Store className="h-5 w-5 mr-1" />
    //               <Link to="/stores" >Stores</Link> 
    //             </a>

    //             {isAuthenticated?

    //             <button onClick={logout} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
    //             <Store className="h-5 w-5 mr-1" />
    //             Logout {user.username}
    //           </button>

    //           :

    //           <Link to="/authenticate" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
    //               <Store className="h-5 w-5 mr-1" />
    //               Login
    //             </Link>

                



                

                
    //             }

    // {/* <Link to="/register-store" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
    //               Sell on BizLister
    //             </Link> */}


                
    //           </div>

    //           {/* Mobile menu button */}
    //           <div className="md:hidden flex items-center">
    //             <button
    //               onClick={() => setIsOpen(!isOpen)}
    //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
    //             >
    //               <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
    //               {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
    //             </button>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Mobile menu */}
    //       {isOpen && (
    //         <div className="md:hidden bg-white p-4 border-t border-gray-200">
    //           <div className="flex flex-col space-y-4">
    //             {/* <LocationSelector /> */}
    //             <button onClick={logout} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
    //             <Store className="h-5 w-5 mr-1" />
    //             Logout
    //           </button>
                
    //             <SearchBar />
    //             <div className="pt-2 border-t border-gray-100">
    //               <a href="#products" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-base font-medium">
    //                 <ShoppingBag className="h-5 w-5 mr-2" />
    //                 Products
    //               </a>
    //               <a href="#stores" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-base font-medium">
    //                 <Store className="h-5 w-5 mr-2" />
    //                 Stores
    //               </a>
                  

    //             </div>
    //           </div>
    //         </div>
    //       )}
    //     </nav>
    //   );
    // };

    // export default Navbar;











//     import { useState } from 'react';
// import { Store, ShoppingBag, Menu, X, Mail, Info } from 'lucide-react';
// import SearchBar from './SearchBar';
// import LocationSelector from './LocationSelector';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { ProductPage } from './ProductPage';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const {isAuthenticated,user,logout}= useAuth();
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <a href="/" className="flex items-center">
//               <Store className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-900">BizLister</span>
//             </a>
//           </div>

//           {/* Location & Search - Desktop */}
//           <div className="hidden md:flex items-center justify-center flex-1 mx-8">
//             <LocationSelector />
//             <div className="mx-2"></div>
//             <div className="w-full max-w-md">
//               <SearchBar />
//             </div>
//           </div>

//           {/* Nav Links - Desktop */}
//           <div className="hidden md:flex items-center space-x-4">
//             <a className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
//               <ShoppingBag className="h-5 w-5 mr-1" />
//               <Link to="/products" >Products</Link>
//             </a>
//             <a className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
//               <Store className="h-5 w-5 mr-1" />
//               <Link to="/stores" >Stores</Link> 
//             </a>
//             <a className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
//               <Info className="h-5 w-5 mr-1" />
//               <Link to="/about" >About</Link>
//             </a>
//             <a className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
//               <Mail className="h-5 w-5 mr-1" />
//               <Link to="/contact" >Contact</Link>
//             </a>

//             {isAuthenticated?

//             <button onClick={logout} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
//             <Store className="h-5 w-5 mr-1" />
//             Logout 
//           </button>

//           :

//           <Link to="/authenticate" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
//               <Store className="h-5 w-5 mr-1" />
//               Login
//             </Link>

//             }

// {/* <Link to="/register-store" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
//               Sell on BizLister
//             </Link> */}

            
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//             >
//               <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
//               {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white p-4 border-t border-gray-200">
//           <div className="flex flex-col space-y-4">
//             <LocationSelector />
//             {

//               isAuthenticated &&

            
//             <button onClick={logout} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
//             <Store className="h-5 w-5 mr-1" />
//             Logout
//           </button>

//             }
            
//             <SearchBar />
//             <div className="pt-2 border-t border-gray-100">
//               <a href="#products" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-base font-medium">
//                 <ShoppingBag className="h-5 w-5 mr-2" />
//                 Products
//               </a>
//               <a href="#stores" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-base font-medium">
//                 <Store className="h-5 w-5 mr-2" />
//                 Stores
//               </a>
//               <Link to="/about" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-base font-medium">
//                 <Info className="h-5 w-5 mr-2" />
//                 About
//               </Link>
//               <Link to="/contact" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-base font-medium">
//                 <Mail className="h-5 w-5 mr-2" />
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;














// import { useState } from 'react';
// import { Store, ShoppingBag, Menu, X, Mail, Info } from 'lucide-react';
// import SearchBar from './SearchBar';
// import LocationSelector from './LocationSelector';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { isAuthenticated, user, logout } = useAuth();

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <a href="/" className="flex items-center">
//               <Store className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-900">BizLister</span>
//             </a>
//           </div>

//           {/* Location & Search */}
//           <div className="hidden md:flex items-center justify-center flex-1 mx-8">
//             <LocationSelector />
//             <div className="mx-2" />
//             <div className="w-full max-w-md">
//               <SearchBar />
//             </div>
//           </div>

//           {/* Nav Links - Desktop */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link to="/products" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
//               <ShoppingBag className="h-5 w-5 mr-1" /> Products
//             </Link>
//             <Link to="/stores" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
//               <Store className="h-5 w-5 mr-1" /> Stores
//             </Link>
//             <Link to="/about" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
//               <Info className="h-5 w-5 mr-1" /> About
//             </Link>
//             <Link to="/contact" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
//               <Mail className="h-5 w-5 mr-1" /> Contact
//             </Link>

//             {isAuthenticated ? (
//               <div className="relative group">
//                 <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
//                   <img
//                     src={user?.image || "https://www.gravatar.com/avatar?d=mp"}
//                     alt="Profile"
//                     className="w-8 h-8 rounded-full mr-2"
//                   />
//                   {user.username || "Profile"}
//                 </button>
//                 <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
//                   {/* <Link
//                     to="/profile"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                   Name: {user.username}
//                   </Link> */}
//                   <button
//                     onClick={logout}
//                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <Link to="/authenticate" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
//                 <Store className="h-5 w-5 mr-1" /> Login
//               </Link>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//             >
//               <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
//               {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white p-4 border-t border-gray-200">
//           <div className="flex flex-col space-y-4">
//             <LocationSelector />
//             <SearchBar />
//             <Link to="/products" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
//               <ShoppingBag className="h-5 w-5 mr-2" /> Products
//             </Link>
//             <Link to="/stores" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
//               <Store className="h-5 w-5 mr-2" /> Stores
//             </Link>
//             <Link to="/about" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
//               <Info className="h-5 w-5 mr-2" /> About
//             </Link>
//             <Link to="/contact" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
//               <Mail className="h-5 w-5 mr-2" /> Contact
//             </Link>

//             {isAuthenticated && (
//               <button onClick={logout} className="text-left text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




















import { useState, useEffect } from "react";
import { Store, ShoppingBag, Menu, X, Mail, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
// import { useCart } from "../context/CartContext";
// const { cart } = useCart();



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const [stores, setStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log(user)
    fetchStores();
  }, []);

  const fetchStores = async () => {
    const res = await axios.get("http://localhost:3000/stores"); // your backend URL
    setStores(res.data);
    setFilteredStores(res.data);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = stores.filter((store) =>
      store.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStores(filtered);
  };

  return (
    <>
      <nav className="bg-[#2874f0] text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <Store className="h-8 w-8 text-yellow-300" />
                <span className="ml-2 text-xl font-bold text-white">BizLister</span>
              </a>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 mx-8">
              <input
                type="text"
                placeholder="Search stores..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full max-w-md px-4 py-2 rounded-md text-black"
              />
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated && (
                <>
                  <Link
                    to="/products"
                    className="flex items-center hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <ShoppingBag className="h-5 w-5 mr-1" /> Products
                  </Link>
                  <Link
                    to="/stores"
                    className="flex items-center hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Store className="h-5 w-5 mr-1" /> Stores
                  </Link>
                  <Link
                to="/cart "
                className="flex items-center hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                {/* <Cart className="h-5 w-5 mr-1" /> */}
                 Cart
              </Link>
                </>
              )}
              <Link
                to="/about"
                className="flex items-center hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                <Info className="h-5 w-5 mr-1" /> About
              </Link>
              <Link
                to="/contact"
                className="flex items-center hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                <Mail className="h-5 w-5 mr-1" /> Contact
              </Link>
              
              
              {/* <span className="relative">
  <ShoppingCartIcon />dd
  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
    {cart.length}
  </span>
</span> */}
              {isAuthenticated ? (
                <div className="relative group">
                  <button className="flex items-center hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
                    <img
                      src={user?.image || "https://www.gravatar.com/avatar?d=mp"}
                      alt="Profile"
                      className="w-8 h-8 rounded-full mr-2 border-2 border-yellow-300"
                    />
                    {user.username || "Profile"}
                    {/* {user.username || "Profile"} */}
                    {/* {user.email || "Profile"} */}


                  </button>
                  <div className="absolute right-0 mt-2 w-40 bg-white text-gray-700 shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      email : {user.email}
                    </button>
                    <br />
                    <button
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      phone : {user.phone}
                    </button>
                    <br />
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Logout
                    </button>

                  </div>
                </div>
              ) : (
                <Link
                  to="/authenticate"
                  className="flex items-center hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <Store className="h-5 w-5 mr-1" /> Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-yellow-300 hover:bg-blue-600 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#2874f0] p-4 border-t border-blue-300 text-white">
            <input
              type="text"
              placeholder="Search stores..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-2 rounded-md text-black mb-4"
            />
            <Link to="/products" className="block py-2 hover:text-yellow-300">
              Products
            </Link>
            <Link to="/stores" className="block py-2 hover:text-yellow-300">
              Stores
            </Link>
            <Link to="/about" className="block py-2 hover:text-yellow-300">
              About
            </Link>
            <Link to="/contact" className="block py-2 hover:text-yellow-300">
              Contact
            </Link>
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="text-left hover:text-yellow-300 py-2"
              >
                Logout
              </button>
            ) : (
              <Link to="/authenticate" className="block py-2 hover:text-yellow-300">
                Login
              </Link>
            )}
          </div>
        )}
      </nav>

      {/* Show filtered stores */}
      <div className="">
        {/* <h2 className="text-lg font-semibold mb-2">Filtered Stores:</h2> */}
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredStores.map((store) => (
            <li key={store._id} className="bg-white text-black p-4 rounded shadow">
              <h3 className="text-xl font-bold">{store.name}</h3>
              <p className="text-sm">{store.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
