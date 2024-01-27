import { useState } from 'react';

const Tiempo = () => {
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
        {isExpanded ? '- ¿Cuánto tiempo tengo para solicitar la factura de mi compra?' : '+ ¿Cuánto tiempo tengo para solicitar la factura de mi compra?'}
      </button>

      {isExpanded && (
        <div role="region" aria-labelledby="toggleButton" className='helpText'>
          <br />
          <p>Para garantizar que podamos enviarte la factura de tu compra, es necesario llenar el formato de solicitud de factura que encontrarás aquí.

            Te recordamos que deberás solicitar su factura en un plazo no mayor a 3 días naturales y dentro del mismo mes de tu compra en nuestra tienda online.

            Lamentablemente en caso de no cumplir con el plazo descrito nos reservamos el derecho a generar la factura correspondiente.</p>
        </div>

      )}
    </div>
  );
};

export default Tiempo;
