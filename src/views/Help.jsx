import { useState } from 'react';
import Rastrear from './Help/Rastrear';
import Paqueteria from './Help/Paqueteria';
import Facturacion from './Help/Facturacion';
import './Help/helpstyle.css'
import Tiempo from './Help/Tiempo';
import Devoluciones from './Help/Devoluciones';
import ComoDevolver from './Help/ComoDevolver';
import ActualizarDatos from './Help/ActualizarDatos';

const Help = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
      <div className='source-sans help-container'>
        <div className="text-help">Envíos</div>
        <br />

        <button
          aria-expanded={isExpanded}
          onClick={toggleContent}
          className='helpButtons'
        >
          {isExpanded ? '- Realicé una compra en la Tienda Online, ¿Qué sigue?' : '+ Realicé una compra en la Tienda Online, ¿Qué sigue?'}
        </button>

        {isExpanded && (
          <div role="region" aria-labelledby="toggleButton"  className='helpText'>
            <p>¡Gracias por tu compra! <br />Recibir un email con la confirmación de tu pedido y tu pago, procesaremos tu orden y pronto te haremos llegar otro email con tu guía de rastreo. Dependiendo de la ciudad en donde vives tu pedido podría llegar a tardar de 3 a 5 días hábiles en llegar a tu domicilio.

              Si no recibes ningún email, revisa tu bandeja de correo no deseado (Spam). Si aún así no encuentras informaciíon sobre tu pedido comunicate vía WhatsApp al 312 194 4460 (horario de atención Lunes a Viernes 09:00am - 18:00pm)</p>
          </div>

        )} 


        <Rastrear />
        <Paqueteria />
        <Facturacion />
        <Tiempo />
        <Devoluciones />
        <ComoDevolver />
        <ActualizarDatos />

        <h2>¿Aún tienes alguna duda?</h2>
        <p>Déjanos tu duda y con gusto te atenderemos, envíanos un WhatsApp al 312 194 4460
(horario de atención Lunes a Viernes 09:00am - 18:00pm)</p>
      </div>      
  );
};

export default Help;
