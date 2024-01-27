import comocomprar from '../assets/img/como-comprar.png'
import comprasinriesgos from '../assets/img/compra-sin-riesgos.png'
import enviospais from '../assets/img/envios-pais.png'
import { Link } from 'react-router-dom'

const Expl = () => {
  return (
    <section id='expl'>
        <div>
            <img src={comocomprar} alt="como comprar" />
            <h5>Cómo comprar</h5>
            <p>Elige tu producto, selecciona el medio de<br /> pago, la dirección de envío y listo.</p>
        </div>
        <div>
            <img src={comprasinriesgos} alt="compra sin riesgos" />
            <h5>Compra sin riesgos</h5>
            <p>Comprar con nosotros es fácil y seguro.<br /> Consulta nuestra política de cambios y<br /> devoluciones.</p>
        </div>
        <div>
            <img src={enviospais} alt="envíos a todo el país" />
            <h5>Envíos a todo el país</h5>
            <p>Recibe tus productos en cualquier lugar del<br /> país.<Link to="/help">Conoce más</Link></p>
        </div>
    </section>
  )
}

export default Expl