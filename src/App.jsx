import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import Front from './components/Front';
import  { AuthProvider } from './context/AuthContext';
import { useState } from 'react';
import ProductsList from './components/ProductsList';
import { ProductPage } from './components/ProductPage';
import StorePage from './components/StorePage';
import StoreRegistration from './components/seller/StoreRegistration';
import { SellerProvider } from './context/SellerContext';
import Dashboard from './components/seller/Dashboard';
import ProductsManagement from './components/seller/ProductsManagement';
import StoreDetails from './components/StoreDetails';
import { StoresProvider } from './context/StoresContext';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart';
import { SearchProvider } from './context/SearchContext';

 
function App() {
  return (
    <>

<BrowserRouter>
<SearchProvider>



<AuthProvider>


<CartProvider>


    <StoresProvider>

    
    <SellerProvider>

    
  
    
      <Routes>
        <Route path='about' element={<About/>} />
        <Route path='contact'  element={<Contact/>} />
        <Route path='/' element={<Front/>} />
        <Route path='/authenticate' element={<AuthPage/>} />
        <Route path='/products' element={<ProductPage/>} />
        <Route path='/stores' element={<StorePage/>} />
        <Route path="/register-store" element={<StoreRegistration/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/manage" element={<ProductsManagement/>} />
        <Route path="/store/:storename" element={<StoreDetails/>} />
        <Route path="/cart" element={<Cart/>} />
        {/* <Route path="/products/:id" element={<ProductDetails/>} /> */}



      </Routes>
    

    


    </SellerProvider> 

    </StoresProvider>

    </CartProvider>

    </AuthProvider>


    </SearchProvider>

    </BrowserRouter>

    
  
    </>
  );
}

export default App;