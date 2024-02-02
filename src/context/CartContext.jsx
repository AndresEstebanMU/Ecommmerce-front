import { createContext, useEffect, useState } from "react";
import axios from "axios";




/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    await axios
      .get("https://back-labotika.onrender.com/products")
      .then(({ data }) => setProducts(data.products));
                          setIsLoading(false);
  };

  const getProductsCart = async () => {
    return await axios
      .get("https://back-labotika.onrender.com/products-cart")
      .then(({ data }) => setCartItems(data.productsCart))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
    getProductsCart();
  }, []);

  const addItemToCart = async (product) => {
    const { name, img, price } = product;

    await axios.post("https://back-labotika.onrender.com/products-cart", { name, img, price });

    getProducts();
    getProductsCart();
  };

  const editItemToCart = async (id, query, amount) => {
    if (query === "del" && amount === 1) {
      await axios
        .delete(`https://back-labotika.onrender.com/products-cart/${id}`)
        .then(({ data }) => console.log(data));
    } else {
      await axios
        .put(`https://back-labotika.onrender.com/products-cart/${id}?query=${query}`, {
          amount,
        })
        .then(({ data }) => console.log(data));
    }

    getProducts();
    getProductsCart();
  };


 


  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{ cartItems, products, addItemToCart, editItemToCart, isLoading}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;







