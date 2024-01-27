import { useState } from 'react';

const Facturacion = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <br />
      <div className="text-help">Facturación</div>
      <br />

      <p> <button
        aria-expanded={isExpanded}
        onClick={toggleContent}
        className='helpButtons'
      >
        {isExpanded ? '- ¿Cómo puedo facturar mi compra?' : '+ ¿Cómo puedo facturar mi compra?'}
      </button> </p>

      {isExpanded && (
        <div role="region" aria-labelledby="toggleButton" className='helpText'>
          <p>Realizar la solicitud de factura de tu compra en nuestra tienda en línea es muy fácil.
            Ingresa al siguiente formulario, ingresa tus datos y la enviaremos a tu correo electrónico.

            <a href="#">Ir al formulario de facturación</a></p>
        </div>

      )}
    </div>
  );
};

export default Facturacion;
