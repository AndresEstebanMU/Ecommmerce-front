// import Aguas from "../../db/OtrosDb/Aguas"
// import Bebidas from "../../db/OtrosDb/Bebidas"
// import Energeticas from "../../db/OtrosDb/Energeticas"
// import Jugos from "../../db/OtrosDb/Jugos"


// const Otros = () => {
//   return (
//     <>
//       <Aguas />
//       <Bebidas />
//       <Energeticas />
//       <Jugos />
//     </>
//   )
// }

// export default Otros


import { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "../../db/Products/styles.module.scss";
import CardSkeleton from "../../components/CardSkeleton";

const Otros = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { addItemToCart, products, isLoading } = useContext(CartContext);

  return (
    <div className={styles.productsContainer}>
      {isLoading && <CardSkeleton cards={30} />}
      {products &&     
        products.filter(products => products.category === "aguas" || products.category === "bebidas" || products.category === "energeticas" || products.category === "jugos").map((product, i) => (
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

export default Otros;

