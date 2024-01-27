import { useState } from 'react';

const Paqueteria = () => {
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
          {isExpanded ? '- ¿Qué paquetería utilizan para realizar los envíos?' : '+ ¿Qué paquetería utilizan para realizar los envíos?'}
        </button>

        {isExpanded && (
          <div role="region" aria-labelledby="toggleButton"  className='helpText'>
            <br />
            <p>Realizamos nuestros envíos a todo Chile por Correos de Chile y Estafeta.

Dependiendo de la ciudad en donde vives, tu pedido podría tardar de 3 a 5 días hábiles en llegar a tu domicilio.

Existe la posibilidad de que tu pedido pueda demorar un poco más por cuestiones propias de la paquetería y ajenas a Botika SpA. Si este es tu caso, contáctanos y buscaremos una solución para ti.</p>
          </div>

        )} 
      </div>
  );
};

export default Paqueteria;

