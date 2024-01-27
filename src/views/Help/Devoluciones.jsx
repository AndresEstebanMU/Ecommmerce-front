import { useState } from 'react';


const Devoluciones = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <br />
      <div className="text-help">Devoluciones</div>
      <br />

      <button
        aria-expanded={isExpanded}
        onClick={toggleContent}
        className='helpButtons'
      >
        {isExpanded ? '- ¿Cuándo se puede realizar la devolución de una compra?' : '+ ¿Cuándo se puede realizar la devolución de una compra?'}
      </button>

      {isExpanded && (
        <div role="region" aria-labelledby="toggleButton" className='helpText'>
          <br />
          <p>Es posible realizar la devolución total o parcial de tu compra si cumple con nuestra pólitica de devoluciones.

            Visita el siguiente enlace para conocer nuestros términos y condiciones de devolución</p>

        </div>

      )}
    </div>
  );
};

export default Devoluciones;
