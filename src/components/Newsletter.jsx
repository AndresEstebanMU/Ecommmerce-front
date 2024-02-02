import { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Datos del formulario:', formData);
  };

  return (
    <section id='form'>
      <div>
        <h1>Suscríbete y ahorra</h1>
        <p>Únete para recibir descuentos exclusivos y entérate de próximos eventos y
          lanzamientos.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Escribe tu email"
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Formulario;
