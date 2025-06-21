// import { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const userId = localStorage.getItem('user'); // Adjust as per your auth flow

//   // Fetch cart on mount or login
//   useEffect(() => {
//     if (userId) fetchCart();
//   }, [userId]);

//   const fetchCart = async () => {
//     try {
//       const res = await axios.get(`http://localhost:3000/cart/${userId}`);
//       setCart(res.data.items || []);
//     } catch (err) {
//       console.error('Failed to fetch cart:', err.message);
//     }
//   };

//   const addToCart = async (product) => {  
//     try {
//       // console.log(typeof(product._id))
//       const res = await axios.post('http://localhost:3000/cart/add', {
//         userId,
//         productId: product._id,
//         quantity: 1,
//       });
//       setCart(res.data.items);
//     } catch (err) {
//       console.error('Add to cart error:', err.message);
//     }
//   };

//   const removeFromCart = async (productId) => {
//     try {
//       const res = await axios.delete(`http://localhost:3000/cart/${userId}/${productId}`);
//       setCart(res.data.items);
//     } catch (err) {
//       console.error('Remove from cart error:', err.message);
//     }
//   };

//   const updateQuantity = async (productId, quantity) => {
//     try {
//       const res = await axios.put(`http://localhost:3000/cart/${userId}/${productId}`, { quantity });
//       setCart(res.data.items);
//     } catch (err) {
//       console.error('Update quantity error:', err.message);
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, updateQuantity, fetchCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);









import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  // Get userId - parse if it's stored as JSON object
  const getUserId = () => {
    const user = localStorage.getItem('user');
    if (!user) return null;
    
    try {
      // If it's a JSON object, parse it and get the _id
      const parsed = JSON.parse(user);
      return parsed._id || parsed.id || parsed;
    } catch {
      // If it's not JSON, return as string
      return user;
    }
  };
  
  const userId = getUserId();

  // Fetch cart on mount or login
  useEffect(() => {
    if (userId) fetchCart();
  }, [userId]);

  const fetchCart = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/cart/${userId}`);
      setCart(res.data.items || []);
    } catch (err) {
      console.error('Failed to fetch cart:', err.message);
    }
  };

  const addToCart = async (product) => {  
    try {
      const res = await axios.post('http://localhost:3000/cart/add', {
        userId,
        productId: product._id,
        quantity: 1,
      });
      setCart(res.data.items);
    } catch (err) {
      console.error('Add to cart error:', err.message);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const res = await axios.delete(`http://localhost:3000/cart/${userId}/${productId}`);
      setCart(res.data.items);
    } catch (err) {
      console.error('Remove from cart error:', err.message);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const res = await axios.put(`http://localhost:3000/cart/${userId}/${productId}`, { quantity });
      setCart(res.data.items);
    } catch (err) {
      console.error('Update quantity error:', err.message);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, fetchCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);