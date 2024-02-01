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
        <img src="https://z-p3-scontent.fscl26-1.fna.fbcdn.net/v/t39.30808-6/399546044_846311834164431_97772664977177131_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=sMbtGvpZKPIAX-yzUus&_nc_zt=23&_nc_ht=z-p3-scontent.fscl26-1.fna&oh=00_AfDpr172NSqImpcV4Y6D4m4l5sY8AXsayc9TWmN7tN7naA&oe=65C0A855" className="box" alt="" />
      </Link>

      <Link to="/Gin" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">GIN</div>
        <img src="https://images.unsplash.com/photo-1542895324-076f3fb6c2cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="box" alt="" />
      </Link>

      <Link to="/Pisco" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">PISCO</div>
        <img src="https://www.kitchencenter.cl/cdn/shop/products/Mistral_nobel_dorado_AMB_WEB0_700x.jpg?v=1666284282" className="box" alt="" />
      </Link>
      <Link to="/Ron" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">RON</div>
        <img src="https://http2.mlstatic.com/D_NQ_NP_837293-MLU71678657160_092023-O.webp" className="box" alt="" />
      </Link>
      <Link to="/Tequila" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">TEQUILA</div>
        <img src="https://wallpapers.com/images/high/jose-cuervo-tequila-bottle-with-lemon-m47j8bgvxsusz6vn.webp" className="box" alt="" />
      </Link>
      <Link to="/Vinos" className="image-gallery-with-text-overlay">
      <div className="text-with-text-overlay">VINO</div>
        <img src="https://images.unsplash.com/photo-1595506071728-08ef92e2dc72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="box" alt="" />
      </Link>
      <Link to="/Vodka" className="image-gallery-with-text-overlay">
      <div className="text-with-text-overlay">VODKA</div>
        <img src="https://images.unsplash.com/photo-1595389052748-7b353892845e?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="box" alt="" />
      </Link>
      <Link to="/Whisky" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">WHISKY</div>
        <img src="https://www.goalongliquor.com/upload/news/1658211568314979.jpg" className="box" alt="" />
      </Link>
      
      <Link to="/Otros" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">SIN ALCOHOL</div>
        <img src="https://i0.wp.com/www.aquasushi.cl/wp-content/uploads/aqua-botellas-coca.jpg?fit=600%2C600&ssl=1" className="box" alt="" />
      </Link>
      <Link to="/Otros" className="image-gallery-with-text-overlay">
      <div className="text-with-text-overlay">OTROS</div>
        <img src="https://images.ecestaticos.com/JcgUuZDKIddYQyYqe54_xBvg3lA=/0x0:2272x1425/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fa9f%2F385%2Ffe3%2Fa9f385fe37c6badcc8a0f81629ae1f98.jpg" className="box" alt="" />
      </Link>
      <Link to="/Ofertas" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">OFERTAS</div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVAYYd_HjR-knZmNWTNXJCAKi_pmBb3h6DNeTP3kT_Y6g7aX501vCNFADYCmJmYxwkHEc&usqp=CAU" className="box" alt="" />
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


