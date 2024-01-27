import CarouselBoot from "../components/CarouselBoot";
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentCarousel from "../components/CarouselComents";
import Formulario from "../components/Newsletter";
import Expl from "../components/Expl";
import { GaleriaCategorias } from "../components/GaleriaCategorias";
import { Blog } from "../components/Blog";








const Home = () => {
  return (
    <div>
      
      <GaleriaCategorias />
      <h2 className="prod-dest">Productos Destacados</h2>
      <CarouselBoot />   
      <Blog />
      <CommentCarousel />
   
      <Formulario />
     
      <Expl />
      
    </div>
  )
}

export default Home