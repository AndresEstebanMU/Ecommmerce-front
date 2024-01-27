// import { Link } from "react-router-dom"


import { useContext } from "react";
import CartContext from "../context/CartContext";

const GaleriaCarrOtro = () => {


  /* Traemos del context la funcion para agregar un producto */
  const { addItemToCart, products } = useContext(CartContext);



  return (

    <div  >  {/* className={styles.productsContainer} */}
      
          <div  >  {/* className={styles.product} */}
            <section className="galeria-container">
              <div className="galeria">
                {products &&
                products.filter(products => products.sku === "BEB0018").map((product, i) => (
                  <div className="v1" key={i} >
                    <div className="v1-i">
                      <div>
                        <img src={product.img} alt={product.name} />
                      </div>

                     <p>
                      {product.name} - ${product.price}
                    </p>
                    {!product.inCart ? (
                      <button onClick={() => addItemToCart(product)}>
                        COMPRAR
                      </button>
                    ) : (
                      <button>En el carrito</button>
                    )}
                  </div>
                </div>))}

                {products &&
                products.filter(products => products.sku === "JUG0001").map((product, i) => (
                  <div id="v2" key={i} ><div id="v2-i">
                    <img src={product.img} alt={product.name} />
                    
                    <p>
                          {product.name} - ${product.price}
                        </p>
                      {!product.inCart ? (
                        <button onClick={() => addItemToCart(product)}>
                          COMPRAR
                        </button>
                      ) : (
                        <button>En el carrito</button>
                      )}
                    </div>
                  </div> ))}

                {products &&
                products.filter(products => products.sku === "AGU0003").map((product, i) => (
                  <div id="v3" key={i}><div id="v3-i">
                    <img src={product.img} alt={product.name} />
                    
                    <p>
                          {product.name} - ${product.price}
                        </p>
                      {!product.inCart ? (
                        <button onClick={() => addItemToCart(product)}>
                          COMPRAR
                        </button>
                      ) : (
                        <button>En el carrito</button>
                      )}
                    </div>
                  </div> ))}

                {products &&
                products.filter(products => products.sku === "ENER0003").map((product, i) => (
                  <div id="v4" key={i} ><div id="v4-i">
                    <img src={product.img} alt={product.name} />
                    
                    <p>
                          {product.name} - ${product.price}
                        </p>
                      {!product.inCart ? (
                        <button onClick={() => addItemToCart(product)}>
                          COMPRAR
                        </button>
                      ) : (
                        <button>En el carrito</button>
                      )}
                    </div>
                  </div> ))}
                
                {products &&
                products.filter(products => products.sku === "JUG0004").map((product, i) => (
                  <div id="v5" key={i} ><div id="v5-i">
                    <img src={product.img} alt={product.name} />
                    
                    <p>
                          {product.name} - ${product.price}
                        </p>
                      {!product.inCart ? (
                        <button onClick={() => addItemToCart(product)}>
                          COMPRAR
                        </button>
                      ) : (
                        <button>En el carrito</button>
                      )}
                    </div>
                  </div> ))}
               
              </div>
              </section>
          </div>
       
    </div>
  )
}

export default GaleriaCarrOtro