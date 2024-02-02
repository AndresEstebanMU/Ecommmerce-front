import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import GaleriaParaCarr from './GaleriaParaCarr';
import GaleriaCarrCer from './GaleriaCarrCer';
import GaleriaCarrDes from './GaleriaCarrDes';
import GaleriaCarrLic from './GaleriaCarrLic';
import GaleriaCarrOtro from './GaleriaCarrOtro';

const MiCarrusel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  

  return (
    <Carousel id='carrusel-cont' activeIndex={index} onSelect={handleSelect} interval={null} indicators={false} controls={false}>
      <Carousel.Item>
        <GaleriaParaCarr />
        {/* <Carousel.Caption>
          <h3>Primer Slide</h3>
          <p>Descripción del primer slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <GaleriaCarrCer />
        {/* <img
          className="d-block w-100"
          src="imagen2.jpg"
          alt="Segunda Imagen"
        />
        <Carousel.Caption>
          <h3>Segundo Slide</h3>
          <p>Descripción del segundo slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <GaleriaCarrDes />
        
        {/* <img
          className="d-block w-100"
          src="imagen3.jpg"
          alt="Tercera Imagen"
        />
        <Carousel.Caption>
          <h3>Tercer Slide</h3>
          <p>Descripción del tercer slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <GaleriaCarrLic />
        {/* <Carousel.Caption>
          <h3>Primer Slide</h3>
          <p>Descripción del primer slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <GaleriaCarrOtro />
        {/* <Carousel.Caption>
          <h3>Primer Slide</h3>
          <p>Descripción del primer slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      {/*elementos Carousel.Item según sea necesario */}

      <div id='carousel-titles' >
        <button className={index === 0 ? 'active' : ''} onClick={() => handleSelect(0)}>Vinos</button>
        <button className={index === 1 ? 'active' : ''} onClick={() => handleSelect(1)}>Cervezas</button>
        <button className={index === 2 ? 'active' : ''} onClick={() => handleSelect(2)}>Destilados</button>
        <button className={index === 3 ? 'active' : ''} onClick={() => handleSelect(3)}>Licores</button>
        <button className={index === 4 ? 'active' : ''} onClick={() => handleSelect(4)}>Otros</button>
      </div>
    </Carousel>
  );
};

export default MiCarrusel;
