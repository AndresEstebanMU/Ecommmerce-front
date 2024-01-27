import { useState } from 'react';

const ActualizarDatos = () => {
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
          {isExpanded ? '- Cambié de domicilio ¿Cómo puedo actualizar mis datos?' : '+ Cambié de domicilio ¿Cómo puedo actualizar mis datos?'}
        </button>

        {isExpanded && (
          <div role="region" aria-labelledby="toggleButton"  className='helpText'>
            <br />
            <p>Actualiza tus datos de contacto o dirección de envío contactándonos vía WhatsApp al312 194 4460 (horario de atención Lunes a Viernes 09:00am - 18:00pm), o envía un email a servicioalcliente@gmail.com con el Asunto: Actualización datos BotiKa SpA, indicando tu nombre completo, los datos que desees actualizar, así como los nuevos datos.</p>
          </div>

        )} 
      </div>      
  );
};

export default ActualizarDatos;
