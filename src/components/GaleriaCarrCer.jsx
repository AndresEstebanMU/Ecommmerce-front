


import { useContext } from "react";
import CartContext from "../context/CartContext";

const GaleriaCarrCer = () => {


  /* Traemos del context la funcion para agregar un producto */
  const { addItemToCart, products } = useContext(CartContext);



  return (

    <div  >  
      
          <div  >  
            <section className="galeria-container">
              <div className="galeria">
                {products &&
                products.filter(products => products.sku === "CERV0032").map((product, i) => (
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
                  </div> ))}
                    

                {products &&
                products.filter(products => products.sku === "CERV0035").map((product, i) => (
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
                products.filter(products => products.sku === "CERV0047").map((product, i) => (
                  <div id="v3" key={i}><div id="v3-i" className="arreglo">
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
                products.filter(products => products.sku === "CERV0029").map((product, i) => (
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
                products.filter(products => products.sku === "CERV0003").map((product, i) => (
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

export default GaleriaCarrCer