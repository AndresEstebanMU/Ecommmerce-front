import { Link } from "react-router-dom"
import "./GaleriaCategorias.scss"
import cervezaIMG from "../assets/img/cervezaIMG.webp"
import espumanteIMG from "../assets/img/espumanteIMG.webp"
import ginIMG from "../assets/img/ginIMG.webp"
import piscoIMG from "../assets/img/piscoIMG.jpg"
import ronIMG from "../assets/img/ronIMG.webp"
import tequilaIMG from "../assets/img/tequilaIMG.webp"
import vinoIMG from "../assets/img/vinoIMG.webp"
import vodkaIMG from "../assets/img/vodkaIMG.webp"
import whiskyIMG from "../assets/img/whiskyIMG.webp"
import bebidaIMG from "../assets/img/bebidaIMG.webp"
import energetciaIMG from "../assets/img/energetciaIMG.webp"
import ofertaIMG from "../assets/img/ofertaIMG.avif"


export const GaleriaCategorias = () => {
  return (
    <section className="gallery"  >    

      <Link to="/cervezas" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">CERVEZAS</div>
        <img src={cervezaIMG} className="box" type="text" alt="cervezas" />
       
      </Link>
      <Link to="/Espumantes" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">ESPUMANTES</div>
        <img src={espumanteIMG} className="box" alt="espumantes" />
      </Link>

      <Link to="/Gin" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">GIN</div>
        <img src={ginIMG} className="box" alt="gin" />
      </Link>

      <Link to="/Pisco" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">PISCO</div>
        <img src={piscoIMG} className="box" alt="" />
      </Link>
      <Link to="/Ron" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">RON</div>
        <img src={ronIMG} className="box" alt="" />
      </Link>
      <Link to="/Tequila" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">TEQUILA</div>
        <img src={tequilaIMG} className="box" alt="" />
      </Link>
      <Link to="/Vinos" className="image-gallery-with-text-overlay">
      <div className="text-with-text-overlay">VINO</div>
        <img src={vinoIMG} className="box" alt="" />
      </Link>
      <Link to="/Vodka" className="image-gallery-with-text-overlay">
      <div className="text-with-text-overlay">VODKA</div>
        <img src={vodkaIMG} className="box" alt="" />
      </Link>
      <Link to="/Whisky" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">WHISKY</div>
        <img src={whiskyIMG} className="box" alt="" />
      </Link>
      
      <Link to="/Otros" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">SIN ALCOHOL</div>
        <img src={bebidaIMG} className="box" alt="" />
      </Link>
      <Link to="/Otros" className="image-gallery-with-text-overlay">
      <div className="text-with-text-overlay">OTROS</div>
        <img src={energetciaIMG} className="box" alt="" />
      </Link>
      <Link to="/Ofertas" className="image-gallery-with-text-overlay" >
      <div className="text-with-text-overlay">OFERTAS</div>
      <img src={ofertaIMG} className="box" alt="" />
      </Link>


    </section>

)
}








