// import { createContext, useContext } from 'react';
// import { mockStores } from '../data/mockData';

// // Create context
// const StoresContext = createContext(undefined);

// // Provider component
// export const StoresProvider = ({ children }) => {
//   return (
//     <StoresContext.Provider value={{ stores: mockStores }}>
//       {children}
//     </StoresContext.Provider>
//   );
// };

// // Custom hook to use the context
// export const useStores = () => {
//   const context = useContext(StoresContext);
//   if (!context) {
//     throw new Error('useStores must be used within a StoresProvider');
//   }
//   return context;
// };











// import { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios'; // Ensure axios is installed

// // Create context
// const StoresContext = createContext(undefined);

// // Provider component
// export const StoresProvider = ({ children }) => {
//   const [stores, setStores] = useState([]);
//   const [loading, setLoading] = useState(true); // optional
//   const [error, setError] = useState(null); // optional

//   useEffect(() => {
//     const fetchStores = async () => {
//       try {
//         const response = await axios.get('https://ecommerce-backend-hgv4.onrender.com/store'); // Update if your route is different
//         console.log(response.data)
//         setStores(response.data.stores);
//       } catch (err) {
//         console.error('Failed to fetch stores:', err);
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStores();
//   }, []);

//   return (
//     <StoresContext.Provider value={{ stores, loading, error }}>
//       {children}
//     </StoresContext.Provider>
//   );
// };

// // Custom hook to use the context
// export const useStores = () => {
//   const context = useContext(StoresContext);
//   if (!context) {
//     throw new Error('useStores must be used within a StoresProvider');
//   }
//   return context;
// };
















// import { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios';

// const StoresContext = createContext(undefined);

// export const StoresProvider = ({ children }) => {
//   const [stores, setStores] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedLocation, setSelectedLocation] = useState("All");

//   useEffect(() => {
//     const fetchStores = async () => {
//       try {
//         const response = await axios.get('https://ecommerce-backend-hgv4.onrender.com/store');
//         setStores(response.data.stores);
//       } catch (err) {
//         console.error('Failed to fetch stores:', err);
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStores();
//   }, []);

//   const filteredStores = selectedLocation === "All"
//     ? stores
//     : stores.filter((store) => store.location === selectedLocation);

//   return (
//     <StoresContext.Provider value={{
//       stores: filteredStores,
//       loading,
//       error,
//       selectedLocation,
//       setSelectedLocation,
//       allStores: stores, // for LocationSelector
//     }}>
//       {children}
//     </StoresContext.Provider>
//   );
// };

// export const useStores = () => {
//   const context = useContext(StoresContext);
//   if (!context) {
//     throw new Error('useStores must be used within a StoresProvider');
//   }
//   return context;
// };









import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useSearch } from './SearchContext';

const StoresContext = createContext(undefined);

export const StoresProvider = ({ children }) => {
  const [allStores, setAllStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('All');
  const { query } = useSearch();

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('https://ecommerce-backend-hgv4.onrender.com/store');
        setAllStores(response.data.stores);
      } catch (err) {
        console.error('Failed to fetch stores:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  let filteredStores = allStores;
  if (selectedLocation !== 'All') {
    filteredStores = filteredStores.filter(store => store.location === selectedLocation);
  }

  if (query) {
    filteredStores = filteredStores.filter(store =>
      store.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <StoresContext.Provider value={{
      stores: filteredStores,
      loading,
      error,
      selectedLocation,
      setSelectedLocation,
      allStores,
    }}>
      {children}
    </StoresContext.Provider>
  );
};

export const useStores = () => {
  const context = useContext(StoresContext);
  if (!context) {
    throw new Error('useStores must be used within a StoresProvider');
  }
  return context;
};
