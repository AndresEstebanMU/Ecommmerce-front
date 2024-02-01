import { Link } from "react-router-dom"
import "./GaleriaCategorias.scss"
//import React, { useState } from 'react';
//import axios from 'axios';

export const GaleriaCategorias = () => {
  return (
    <section className="gallery"  >    {/*id="Galeria-container"*/}

      <Link to="/cervezas" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">CERVEZAS</div>
        <img src="https://images.unsplash.com/photo-1636245364080-8b52c38278a8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="box" type="text" alt="" />
       
      </Link>
      <Link to="/Espumantes" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">ESPUMANTES</div>
        <img src="../assets/fotos-galeria-categorias/espumante 2.jpg" className="box" alt="" />
      </Link>

      <Link to="/Gin" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">GIN</div>
        <img src="/src/assets/fotos-galeria-categorias/gin.avif" className="box" alt="" />
      </Link>

      <Link to="/Pisco" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">PISCO</div>
        <img src="../assets/fotos-galeria-categorias/pisco.png" className="box" alt="" />
      </Link>
      <Link to="/Ron" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">RON</div>
        <img src="/src/assets/fotos-galeria-categorias/ron.avif" className="box" alt="" />
      </Link>
      <Link to="/Tequila" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">TEQUILA</div>
        <img src="/src/assets/fotos-galeria-categorias/tequila.avif" className="box" alt="" />
      </Link>
      <Link to="/Vinos" className="image-gallery-with-text-overlay">
      <div className="text-with-text-overlay">VINO</div>
        <img src="/src/assets/fotos-galeria-categorias/vino.avif" className="box" alt="" />
      </Link>
      <Link to="/Vodka" className="image-gallery-with-text-overlay">
      <div className="text-with-text-overlay">VODKA</div>
        <img src="/src/assets/fotos-galeria-categorias/vodka.avif" className="box" alt="" />
      </Link>
      <Link to="/Whisky" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">WHISKY</div>
        <img src="/src/assets/fotos-galeria-categorias/whisky.avif" className="box" alt="" />
      </Link>
      
      <Link to="/Otros" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">SIN ALCOHOL</div>
        <img src="/src/assets/fotos-galeria-categorias/bebidas.png" className="box" alt="" />
      </Link>
      <Link to="/Otros" className="image-gallery-with-text-overlay">
      <div className="text-with-text-overlay">OTROS</div>
        <img src="/src/assets/fotos-galeria-categorias/bebidas-energeticas.jpg" className="box" alt="" />
      </Link>
      <Link to="/Ofertas" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">OFERTAS</div>
      <img src="/src/assets/fotos-galeria-categorias/ofertas.jpg" className="box" alt="" />
      </Link>


    </section>

)
}







// export const GaleriaCategorias = () => {
//     return (
//         <section className="gallery" id="Galeria-container">
            
//                 <Link to="/cervezas" className="contenedor-img-gal" >
//                     <div className="texto-gal">Cervezas</div>
//                     <img src="/src/assets/fotos-galeria-categorias/cerveza.avif" alt="" />
//                 </Link>
//                 <Link to="/Espumantes" id="" >Espumantes
//                     <img src="/src/assets/fotos-galeria-categorias/espumante 2.jpg" alt="" />
//                 </Link>
//                 <Link to="/Gin" id="" >Gin
//                     <img src="/src/assets/fotos-galeria-categorias/gin.avif" alt="" />
//                 </Link>
//                 <Link to="/Pisco" id="" >Pisco
//                     <img src="/src/assets/fotos-galeria-categorias/pisco.png" alt="" />
//                 </Link>
//                 <Link to="/Ron" id="" >Ron
//                     <img src="/src/assets/fotos-galeria-categorias/ron.avif" alt="" />
//                 </Link>
//                 <Link to="/Tequila" id="" >Tequila
//                     <img src="/src/assets/fotos-galeria-categorias/tequila.avif" alt="" />
//                 </Link>
//                 <Link to="/Vino" id="" >Vino
//                     <img src="/src/assets/fotos-galeria-categorias/vino.avif" alt="" />
//                 </Link>
//                 <Link to="/Vodka" id="" >Vodka
//                     <img src="/src/assets/fotos-galeria-categorias/vodka.avif" alt="" />
//                 </Link>
//                 <Link to="/Whisky" id="" >Whisky
//                     <img src="/src/assets/fotos-galeria-categorias/whisky.avif" alt="" />
//                 </Link>
//                 {/*<Link to="/Whisky" id="" >Licores
//                     <img src=" " alt="" />
//     </Link>*/}
//                 <Link to="/src/assets/SinAlcohol" id="" >Sin Alcohol
//                     <img src="" alt="" />
//                 </Link>
//                 <Link to="/src/assets/Otros" id="" >Otros
//                     <img src="" alt="" />
//                 </Link>
//                 <Link to="/src/assets/Ofertas" id="" >Ofertas</Link>

            
//         </section>

//     )
// }




{/*const getAllProducts = () => {
  const [product, setProduct] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();
    const productName = event.target.productName.value;
    axios.get(`https://localhost:4000/products?name=${productName}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product: ', error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="productName" placeholder="Search by product name" />
        <button type="submit">Buscar</button>
      </form>
     {product && (
        <div>
          <h2>{product.name}</h2>
          <p>Precio: ${product.price}</p>
          <p>Descripción: {product.description}</p>
        </div>
      )} 
    </div>
  );
}

export default { getAllProducts  }*/}


