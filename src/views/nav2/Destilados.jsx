// import GinDb from "../../db/DestiladosDb/GinDb"
// import PiscosDb from "../../db/DestiladosDb/PiscosDb"
// import RonDb from "../../db/DestiladosDb/RonDb"
// import VodkaDb from "../../db/DestiladosDb/VodkaDb"
// import WhiskyDb from "../../db/DestiladosDb/WhiskyDb"
// import TequilasDb from "../../db/DestiladosDb/tequilaDb"








// const Destilados = () => {
//   return (
//     <>
//       <PiscosDb />
//       <TequilasDb />
//       <RonDb />
//       <VodkaDb />
//       <WhiskyDb />
//       <GinDb />
//     </>
//   )
// }

// export default Destilados



import { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "../../db/Products/styles.module.scss";

const Destilados = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { addItemToCart, products } = useContext(CartContext);

  return (
    <div className={styles.productsContainer}>
      {products &&
      
        products.filter(products => products.category === "pisco" || products.category === "tequila" || products.category === "ron" || products.category === "vodka" || products.category === "whisky" || products.category === "gin").map((product, i) => (
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

export default Destilados;



