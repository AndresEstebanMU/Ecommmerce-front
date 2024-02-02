import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import UserProvider from './context/user/UserProvider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#f0f0f0" highlightColor="#444">
      <BrowserRouter> 
        <UserProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </UserProvider>     
      </BrowserRouter>
    </SkeletonTheme>
  </React.StrictMode>
)
