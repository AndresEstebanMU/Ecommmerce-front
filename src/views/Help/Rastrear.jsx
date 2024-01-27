import { useState } from 'react';

const Rastrear = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
      <div>
        <button
          aria-expanded={isExpanded}
          onClick={toggleContent}
          className='helpButtons'
        >
          {isExpanded ? '- ¿Cómo puedo rastrear mi pedido?' : '+ ¿Cómo puedo rastrear mi pedido?'}
        </button>

        {isExpanded && (
          <div role="region" aria-labelledby="toggleButton"  className='helpText'>
            <br />
            <p>Rastrea tu pedido ingresando al enlace que llega a tu correo una vez realizada tu compra.

Si ya tienes la guía de tu pedido, también puedes ingresar al portal de la paquetería por la que viaja tu compra.</p>
          </div>

        )} 
      </div>
  );
};

export default Rastrear;
