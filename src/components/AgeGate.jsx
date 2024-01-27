import { useState, useEffect } from 'react';

const AgeGate = ({ onConfirm }) => {
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const isConfirmed = localStorage.getItem('ageConfirmed');
    if (isConfirmed) {
      setConfirmed(true);
    }
  }, []);

  const handleConfirmation = () => {
    setConfirmed(true);
    localStorage.setItem('ageConfirmed', 'true');
    onConfirm();
  };

  return !confirmed ? (
    <div className="age-gate">
      <p>¿TIENES MÁS DE 18 AÑOS?</p>
      <p>SELECCIONA UNA OPCIÓN</p>
      <div>
        <button onClick={handleConfirmation}>Sí</button>
        <button ><a href="https://instagram.com/">No</a></button>
      </div>
      
    </div>
  ) : null;
};

export default AgeGate;
