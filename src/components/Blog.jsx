import { Link } from "react-router-dom";




export const Blog = () => {
  return (
    <div>
        <>
          <section id="cont-blog">
            <div>
              <img src="https://okdiario.com/img/2016/05/21/recetas-cocteles-fruta-sin-alcohol.jpg" alt="" />
            </div>
            <div id="texto-blog">
              <h1>Visita el blog de la botika amiga y experimenta las recetas que hemos <br />preparado para ti!
              </h1>
              <Link to='/cardBlog' id="linkblog">IR AL BLOG</Link>
                
            </div>
          </section>
        </>
    </div>
  );
}
