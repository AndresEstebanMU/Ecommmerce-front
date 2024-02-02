


import { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "../../db/Products/styles.module.scss";
import CardSkeleton from "../../components/CardSkeleton";

const Vinos = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { addItemToCart, products, isLoading  } = useContext(CartContext);

  return (
    <div className={styles.productsContainer}>
      {isLoading && <CardSkeleton cards={30} />}
      {products &&   
        products.filter(products => products.category === "vino tinto" || products.category === "vino blanco").map((product, i) => (
          <div key={i} className={styles.product}>
            <img src={product.img} alt={product.name} />
            <div>
              <p>
                {product.name} - ${product.price}
              </p>
            </div>
            {!product.inCart ? (
              <button onClick={() => addItemToCart(product)}>
                AGREGAR
              </button>
            ) : (
              <button>En el carrito</button>
            )}
          </div>
        ))}
    </div>
  );
};

export default Vinos;



