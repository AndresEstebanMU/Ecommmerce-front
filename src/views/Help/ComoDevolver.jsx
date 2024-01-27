import { useState } from 'react';

const ComoDevolver = () => {
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
        {isExpanded ? '- ¿Cómo puedo realizar la devolución de una compra?' : '+ ¿Cómo puedo realizar la devolución de una compra?'}
      </button>

      {isExpanded && (
        <div role="region" aria-labelledby="toggleButton" className='helpText'>
          <br />
          <p>Lamentamos que quieras realizar la devolución de una compra, cada caso es único y necesitamos conocer la situación de tu compra.

            Por favor, comunícate con nuestro equipo de cliente contento vía WhatsApp, enviarnos un Email o escribenos en nuestra página de contacto.

            Con gusto te asesoraremos y te ayudaremos a resolver tu caso.</p>
        </div>

      )}
    </div>
  );
};

export default ComoDevolver;
