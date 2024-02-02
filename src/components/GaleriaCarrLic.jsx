


import { useContext } from "react";
import CartContext from "../context/CartContext";

const GaleriaCarrLic = () => {


  /* Traemos del context la funcion para agregar un producto */
  const { addItemToCart, products } = useContext(CartContext);



  return (

    <div  >  
      
          <div  >  
            <section className="galeria-container">
              <div className="galeria">
                {products &&
                products.filter(products => products.sku === "LIQ0002").map((product, i) => (
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
                products.filter(products => products.sku === "LIQ0001").map((product, i) => (
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
                products.filter(products => products.sku === "LIQ0007").map((product, i) => (
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
                products.filter(products => products.sku === "LIQ0042").map((product, i) => (
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
                products.filter(products => products.sku === "LIQ0014").map((product, i) => (
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

export default GaleriaCarrLic