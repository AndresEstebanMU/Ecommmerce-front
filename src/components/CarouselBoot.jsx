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
       
      </Carousel.Item>

      <Carousel.Item>
        <GaleriaCarrCer />
       
      </Carousel.Item>

      <Carousel.Item>
        <GaleriaCarrDes />
        
       
      </Carousel.Item>

      <Carousel.Item>
        <GaleriaCarrLic />
        
      </Carousel.Item>

      <Carousel.Item>
        <GaleriaCarrOtro />
       
      </Carousel.Item>

      

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
