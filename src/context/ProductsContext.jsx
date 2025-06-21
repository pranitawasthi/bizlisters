// import { createContext, useContext } from 'react';
// import { mockProducts } from '../data/mockData';

// // Create context
// const ProductsContext = createContext(undefined);

// // Provider component
// export const ProductsProvider = ({ children }) => {
//   return (
//     <ProductsContext.Provider value={{ products: mockProducts }}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };

// // Custom hook to use the context
// export const useProducts = () => {
//   const context = useContext(ProductsContext);
//   if (!context) {
//     throw new Error('useProducts must be used within a ProductsProvider');
//   }
//   return context;
// };




// import { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios'; // Make sure axios is installed

// // Create context
// const ProductsContext = createContext(undefined);

// // Provider component
// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true); // optional
//   const [error, setError] = useState(null); // optional

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://ecommerce-backend-hgv4.onrender.com/product'); // Adjust this URL as needed
//         console.log(response);
//         setProducts(response.data.products);
//       } catch (err) {
//         setError(err);
//         console.error('Failed to fetch products:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <ProductsContext.Provider value={{ products, loading, error }}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };

// // Custom hook to use the context
// export const useProducts = () => {
//   const context = useContext(ProductsContext);
//   if (!context) {
//     throw new Error('useProducts must be used within a ProductsProvider');
//   }
//   return context;
// };




















import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useSearch } from './SearchContext';

const ProductsContext = createContext(undefined);

export const ProductsProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { query } = useSearch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://ecommerce-backend-hgv4.onrender.com/product');
        setAllProducts(response.data.products);
      } catch (err) {
        setError(err);
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const products = query
    ? allProducts.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
    : allProducts;

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
