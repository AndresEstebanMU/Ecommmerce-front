import { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "../../db/Products/styles.module.scss";
import CardSkeleton from "../../components/CardSkeleton";


// import { Link } from "react-router-dom";

const Cervezas = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { addItemToCart, products, isLoading } = useContext(CartContext);
 

  return (
    <div className={styles.productsContainer}>
      {isLoading && <CardSkeleton cards={30} />}
      {products &&
        products.filter(products => products.category === "cervezas").map((product, i) => (
         
          <div key={i} className={styles.product}>
            {/* prueba */}
            {/* <Link to="/productById/:_id" className="text-link"> */}
              <img src={product.img} alt={product.name} />
            {/* </Link> */}
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


export default Cervezas;










// import { CartProvider } from "../../context/CartContext"
// import CervezasDb from "../../db/CervezasDb/CervezasDb"




// const Cervezas = () => {
//   return (
//     <>
    
//       <CervezasDb />
    
//     </>
//   )
// }

// export default Cervezas



// const Cervezas = () => {
//   return (
//     <div>Cervezas</div>
//   )
// }

// export default Cervezas




