import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
// import styles from "./styles.module.scss";
import "./searchstyles.scss"


const Products = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { addItemToCart, products } = useContext(CartContext);

  const [search, setSearch] = useState(''); 

  const manejarCambioInput = (event) => {
    setSearch(event.target.value);
  };



  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  

  return (
    <div >
      <button onClick={toggleVisibility} className={isVisible ? ' input' : 'input-button'} >
      {isVisible ? <div id="x-Lupa">X</div>  :  <div id="lupita"></div>}
        
      </button>
      
      <div  className={isVisible ? 'buscador' : 'inp'}>
      <input
                type="text"
                value={search}
                onChange={manejarCambioInput}
                placeholder="    Buscar"
                className="input"
              />
      <div  className="productsContainer">
        
        {products &&
          products.filter(products => search.trim() !== "" && products.name.includes(`${search.toUpperCase()}`)).map((product, i) => (
          
            <div key={i} className="product">
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
      </div>
    </div>
  );
};

export default Products;