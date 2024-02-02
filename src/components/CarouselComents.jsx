
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const comments = [
  { id: 1, text: ' ¡Increíble selección de licores! Pedí una variedad de vinos para mi próxima fiesta en casa, y la entrega fue rápida y el empaque muy seguro. ¡Definitivamente volveré a comprar aquí! 🍷🎉', author: 'NeoPixelArtista', star: '★★★★★'},
  { id: 2, text: ' Soy un apasionado de la cerveza artesanal, y esta tienda tiene una gama impresionante. Encontré rarezas que no he visto en otros lugares. ¡Excelente servicio y precios competitivos! 🍺👌', author: 'EcoGlobetrotter', star: '★★★★' },
  { id: 3, text: 'Encontré todos los ingredientes que necesitaba para preparar cócteles sofisticados en casa. La descripción detallada de cada licor facilitó la elección. ¡El paquete llegó en perfecto estado! 🍸📦', author: 'LunaEscarlata21', star: '★★★★★' },
  { id: 4, text: 'Esta tienda superó mis expectativas. Compré un whisky de malta escocés y quedé impresionado con la calidad y el servicio. El seguimiento del pedido fue excelente. ¡Recomendado para los amantes del buen whisky! 🥃🌟', author: 'AventuraExplorer', star: '★★★★★' },
  { id: 5, text: 'La sección de rones es impresionante. Pedí varios para probar y todos fueron deliciosos. El envío fue rápido, y los precios son muy competitivos. Definitivamente mi nueva tienda de licores favorita. ¡Salud! 🍹😊', author: 'TriviaMaster88', star: '★★★★★' },
  
];

const CommentCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '25%',
        },
      },
    ],
  };

  return (
    <div id='cajuela'>
        <Slider {...settings} className='dots'>
        {comments.map((comment) => (
            <div key={comment.id}  id='carousel-coments'>
            <div className="comment">
                <p>{comment.text}</p>
                <p className="author">{comment.author}</p>
                <p className='stars'>{comment.star}</p>
            </div>
            </div>
        ))}
        </Slider>
    </div>
  );
};

export default CommentCarousel;
