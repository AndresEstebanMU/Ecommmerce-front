import { createContext, useEffect, useState } from "react";
import axios from "axios";


// import axiosClient from "../config/axiosClient";
// import productReducer from "./products/productReducer";


/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios
      .get("https://ecommerce-backend-jv3a.onrender.com/products")
      .then(({ data }) => setProducts(data.products));
  };

  const getProductsCart = async () => {
    return await axios
      .get("https://ecommerce-backend-jv3a.onrender.com/products-cart")
      .then(({ data }) => setCartItems(data.productsCart))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
    getProductsCart();
  }, []);

  const addItemToCart = async (product) => {
    const { name, img, price } = product;

    await axios.post("https://ecommerce-backend-jv3a.onrender.com/products-cart", { name, img, price });

    getProducts();
    getProductsCart();
  };

  const editItemToCart = async (id, query, amount) => {
    if (query === "del" && amount === 1) {
      await axios
        .delete(`https://ecommerce-backend-jv3a.onrender.com/products-cart/${id}`)
        .then(({ data }) => console.log(data));
    } else {
      await axios
        .put(`https://ecommerce-backend-jv3a.onrender.com/products-cart/${id}?query=${query}`, {
          amount,
        })
        .then(({ data }) => console.log(data));
    }

    getProducts();
    getProductsCart();
  };


  // 
//   const initialState = {
//     products: [],
//     productById: [{
//         _id: "",
//         name: "",
//         sku: "",
//         price: 0,
//         image: "",
//         stock: ""
//     }]
// }

//   const [productState, dispatch] = useReducer(productReducer, initialState)

//   const getProductss = async() => {
//     const response = await axiosClient.get("/products")
//     const productos = response.data.info;
    
//     dispatch({
//         type: "GET_PRODUCTS",
//         payload: productos
//     })
// }

//   const getProductById = async(_id) => {
//     try {
//         const response = await axiosClient.get(`/productById/${_id}`);
//         const productInfo = response.data.product;

//         dispatch({
//             type: "GET_PRODUCT",
//             payload: productInfo 
//         })
//     } catch (error) {
//         console.log(error)
//     }
// } 
  // 


  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{ cartItems, products, addItemToCart, editItemToCart}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;




// , getProducts, getProductById, productss: productState.products, product: productState.product


