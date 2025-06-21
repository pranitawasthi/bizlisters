// import { useState } from 'react';
// import { LogIn, UserPlus } from 'lucide-react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from "react-router"

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [username,setusername] = useState('')
//   const [password,setpassword]= useState('')
//   const [email,setemail]= useState('')

//   const {login,user,isAuthenticated} = useAuth();

//   let navigate = useNavigate();
//   // console.log(user)

//   const handlesubmit = async (e) => {
//     e.preventDefault(); // prevent page reload
  
//     try {
//       const url = isLogin ? "http://localhost:3000//login" : "http://localhost:3000//register";
//       const payload = isLogin
//         ? { email, password }
//         : { username, email, password };
  
//       const response = await axios.post(url, payload);
//       console.log("Success:", response.data);
//       if(response.data.success){
//         login(response.data.user)
//         navigate("/")
        
//       }
//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message);
//     }
//   };
   

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-md p-8 border border-gray-100">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900">
//             {isLogin ? 'Welcome Back' : 'Create an Account'}
//           </h2>
//           <p className="mt-1 text-gray-600">
//             {isLogin ? 'Login to continue' : 'Sign up to get started'}
//           </p>
//         </div>

//         <form className="space-y-4">
//           {!isLogin && (
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Name {username}</label>
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e)=>{setusername(e.target.value)}}
//                 required
//                 className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           )}

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               onChange={(e)=>{setemail(e.target.value)}}
//               value={email}
//               required
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password {password}</label>
//             <input
//               type="password"
//               onChange={(e)=>{setpassword(e.target.value)}}
//               value={password}
//               required
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             onClick={handlesubmit}
//             className="w-full flex items-center justify-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition"
//           >
//             {isLogin ? (
//               <>
//                 <LogIn className="h-4 w-4 mr-2" />
//                 Login
//               </>
//             ) : (
//               <>
//                 <UserPlus className="h-4 w-4 mr-2" />
//                 Sign Up
//               </>
//             )}
//           </button>
//         </form>
  
//         <div className="text-sm text-center text-gray-500">
//           {isLogin ? (
//             <>
//               Don’t have an account?{' '}
//               <button
//                 type="button"
//                 onClick={() => setIsLogin(false)}
//                 className="text-blue-600 hover:underline font-medium"
//               >
//                 Sign up
//               </button>
//             </>
//           ) : (
//             <>
//               Already have an account?{' '}
//               <button
//                 type="button"
//                 onClick={() => setIsLogin(true)}
//                 className="text-blue-600 hover:underline font-medium"
//               >
//                 Login
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AuthPage;












// import { useState } from 'react';
// import { LogIn, UserPlus } from 'lucide-react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from "react-router";

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState(''); // ✅ phone state

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const url = isLogin
//         ? "http://localhost:3000/login"
//         : "http://localhost:3000/register";

//       const payload = isLogin
//         ? { email, password }
//         : { username, email, password, phone }; // ✅ include phone

//       const response = await axios.post(url, payload);
//       console.log("Success:", response.data);

//       if (response.data.success) {
//         login(response.data.user);
//         navigate("/");
//       }
//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message);
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-md p-8 border border-gray-100">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900">
//             {isLogin ? 'Welcome Back' : 'Create an Account'}
//           </h2>
//           <p className="mt-1 text-gray-600">
//             {isLogin ? 'Login to continue' : 'Sign up to get started'}
//           </p>
//         </div>

//         <form className="space-y-4">
//           {!isLogin && (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   required
//                   className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//                 <input
//                   type="tel"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   required
//                   className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </>
//           )}

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="w-full flex items-center justify-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition"
//           >
//             {isLogin ? (
//               <>
//                 <LogIn className="h-4 w-4 mr-2" />
//                 Login
//               </>
//             ) : (
//               <>
//                 <UserPlus className="h-4 w-4 mr-2" />
//                 Sign Up
//               </>
//             )}
//           </button>
//         </form>

//         <div className="text-sm text-center text-gray-500">
//           {isLogin ? (
//             <>
//               Don’t have an account?{' '}
//               <button
//                 type="button"
//                 onClick={() => setIsLogin(false)}
//                 className="text-blue-600 hover:underline font-medium"
//               >
//                 Sign up
//               </button>
//             </>
//           ) : (
//             <>
//               Already have an account?{' '}
//               <button
//                 type="button"
//                 onClick={() => setIsLogin(true)}
//                 className="text-blue-600 hover:underline font-medium"
//               >
//                 Login
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AuthPage;




// import { useState } from 'react';
// import { LogIn, UserPlus } from 'lucide-react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router';
// import Modal from './otpmodal.jsx';

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [otpModalOpen, setOtpModalOpen] = useState(false);
//   const [pendingUserData, setPendingUserData] = useState(null);

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (isLogin) {
//       try {
//         const res = await axios.post('http://localhost:3000/login', { email, password });
//         if (res.data.success) {
//           login(res.data.user);
//           navigate('/');
//         }
//       } catch (err) {
//         alert(err.response?.data.message || 'Login failed');
//       }
//     } else {
//       if (!username || !email || !password) {
//         alert('Fill all fields');
//         return;
//       }

//       try {
//         await axios.post('http://localhost:3000/send-otp', { email });
//         setPendingUserData({ username, email, password });
//         setOtpModalOpen(true);
//       } catch (err) {
//         alert(err.response?.data.message || 'Failed to send OTP');
//       }
//     }
//   };

//   const handleOtpVerification = async (otp) => {
//     try {
//       const res = await axios.post('http://localhost:3000/verify-otp', {
//         email: pendingUserData.email,
//         otp,
//       });

//       console.log(res.data);

//       if (res.data.success) {
//         const register = await axios.post('http://localhost:3000/register', pendingUserData);
//         console.log(register.data);
//         if (register.data.success) {
//           login(register.data.user);
//           setOtpModalOpen(false);
//           navigate('/');
//         }
//       } else {
//         alert('Invalid OTP');
//       }
//     } catch (err) {
//       alert('OTP verification failed');
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
//       <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-md p-8 border border-gray-100">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900">{isLogin ? 'Welcome Back' : 'Create an Account'}</h2>
//         </div>

//         <form className="space-y-4">
//           {!isLogin && (
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Name</label>
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//                 className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md"
//               />
//             </div>
//           )}

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md"
//             />
//           </div>

//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
//           >
//             {isLogin ? <><LogIn className="h-4 w-4 inline mr-2" />Login</> : <><UserPlus className="h-4 w-4 inline mr-2" />Sign Up</>}
//           </button>
//         </form>

//         <div className="text-sm text-center text-gray-500">
//           {isLogin ? (
//             <>
//               Don’t have an account? <button onClick={() => setIsLogin(false)} className="text-blue-600 hover:underline">Sign up</button>
//             </>
//           ) : (
//             <>
//               Already have an account? <button onClick={() => setIsLogin(true)} className="text-blue-600 hover:underline">Login</button>
//             </>
//           )}
//         </div>
//       </div>

//       {otpModalOpen && (
//         <Modal onClose={() => setOtpModalOpen(false)} onVerify={handleOtpVerification} />
//       )}
//     </section>
//   );
// };

// export default AuthPage;


















import { useState } from 'react';
import { LogIn, UserPlus } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import Modal from './otpmodal.jsx';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState(''); // ✅ NEW STATE
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [pendingUserData, setPendingUserData] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      try {
        const res = await axios.post('https://bizlisters-backendcon.onrender.com/login', { email, password });
        if (res.data.success) {
          login(res.data.user);
          navigate('/');
        }
      } catch (err) {
        alert(err.response?.data.message || 'Login failed');
      }
    } else {
      if (!username || !email || !password || !phone) {
        alert('Fill all fields');
        return;
      }

      try {
        await axios.post('https://bizlisters-backendcon.onrender.com/send-otp', { email });
        setPendingUserData({ username, email, password, phone }); // ✅ include phone
        setOtpModalOpen(true);
      } catch (err) {
        alert(err.response?.data.message || 'Failed to send OTP');
      }
    }
  };

  const handleOtpVerification = async (otp) => {
    try {
      const res = await axios.post('https://bizlisters-backendcon.onrender.com/verify-otp', {
        email: pendingUserData.email,
        otp,
      });

      if (res.data.success) {
        const register = await axios.post('https://bizlisters-backendcon.onrender.com/register', pendingUserData);
        if (register.data.success) {
          login(register.data.user);
          setOtpModalOpen(false);
          navigate('/');
        }
      } else {
        alert('Invalid OTP');
      }
    } catch (err) {
      alert('OTP verification failed');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">{isLogin ? 'Welcome Back' : 'Create an Account'}</h2>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            {isLogin ? <><LogIn className="h-4 w-4 inline mr-2" />Login</> : <><UserPlus className="h-4 w-4 inline mr-2" />Sign Up</>}
          </button>
        </form>

        <div className="text-sm text-center text-gray-500">
          {isLogin ? (
            <>
              Don’t have an account? <button onClick={() => setIsLogin(false)} className="text-blue-600 hover:underline">Sign up</button>
            </>
          ) : (
            <>
              Already have an account? <button onClick={() => setIsLogin(true)} className="text-blue-600 hover:underline">Login</button>
            </>
          )}
        </div>
      </div>

      {otpModalOpen && (
        <Modal onClose={() => setOtpModalOpen(false)} onVerify={handleOtpVerification} />
      )}
    </section>
  );
};

export default AuthPage;
