// // import React from 'react';
// import { Search, MapPin, TrendingUp } from 'lucide-react';

// const Hero = () => {
//   return (
//     <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
//       <div className="container mx-auto px-4 py-16 md:py-24">
//         <div className="max-w-2xl mx-auto text-center">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
//             Discover the Best and nearby Brands
//           </h1>
//           <p className="text-lg md:text-xl opacity-90 mb-8">
//             Find top-rated products and stores in your area, all in one place.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-lg md:max-w-full mx-auto mt-12">
//             <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105">
//               <Search className="h-10 w-10 text-yellow-300 mb-3" />
//               <h3 className="text-lg font-medium mb-2">Easy Search</h3>
//               <p className="text-sm text-center text-blue-100">Find exactly what you need with powerful search options</p>
//             </div>
            
//             <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105">
//               <MapPin className="h-10 w-10 text-yellow-300 mb-3" />
//               <h3 className="text-lg font-medium mb-2">Local Focus</h3>
//               <p className="text-sm text-center text-blue-100">Discover businesses in your neighborhood</p>
//             </div>
            
//             <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105">
//               <TrendingUp className="h-10 w-10 text-yellow-300 mb-3" />
//               <h3 className="text-lg font-medium mb-2">Trending Items</h3>
//               <p className="text-sm text-center text-blue-100">Stay updated with the most popular products</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;










// components/Hero.jsx
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight mb-6">
            Empower Your Business <br className="hidden sm:block" />
            with <span className="text-blue-600">Smart Solutions</span>
          </h1>
          <p className="text-lg text-blue-800 mb-8">
            Discover seamless tools and services to grow your digital presence.
            Built with care for performance and scalability.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="border bg-blue-600 text-yellow-100 px-6 py-3 rounded-xl hover:bg-blue-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://www.binaryfolks.com/media/blog/AI%20in%20ecommerce/robot_shopping_clothes.png"
            alt="Hero illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
