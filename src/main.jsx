import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import UserProvider from './context/user/UserProvider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <UserProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UserProvider>     
    </BrowserRouter>
  </React.StrictMode>
)
