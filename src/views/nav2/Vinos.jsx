// import VinosBlancos from "../../db/VinosDb/VinosBlancos"
// import VinosTintos from "../../db/VinosDb/VinosTintos"





// const Vinos = () => {
//   return (
//     <>
//       <VinosBlancos />
//       <VinosTintos />
//     </>
//   )
// }

// export default Vinos



import { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "../../db/Products/styles.module.scss";

const Vinos = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { addItemToCart, products } = useContext(CartContext);

  return (
    <div className={styles.productsContainer}>
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



