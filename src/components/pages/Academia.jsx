import { Carousel } from 'antd';
import { useState } from 'react';
import slide1 from '../../assets/img/academia/CATA-Academia-1.webp';
import slide2 from '../../assets/img/academia/CATA-Academia-2.webp';
import slide3 from '../../assets/img/academia/CATA-Academia-3.webp';
import img4 from '../../assets/img/academia/CATA_ACADEMIA-1-1-1.png';
import { Planes } from './PlanesUnap';

export const Academia = () => {
  const [cardUna, setCardUna] = useState([
    {
      id: 1,
      title: 'Verano',
      price: '440',
      inicio: '02/01/2023',
      fin: '18/02/2023',
      turno: 'Mañana',
      virtual: 'S/. 250.00',
    },
    {
      id: 2,
      title: 'Intensivo',
      price: '170',
      inicio: '24/10/2022',
      fin: '25/02/2023',
      turno: 'Mañana',
      virtual: 'No aplica',
    },
    {
      id: 3,
      title: 'Repaso',
      price: '450',
      inicio: '02/01/2022',
      fin: '11/02/2023',
      turno: 'Mañana',
      virtual: 'S/. 250.00',
    },
  ]);

  const [cardUnsa, setCardUnsa] = useState([
    {
      id: 1,
      title: 'Repaso',
      price: '550',
      inicio: '02/01/2023',
      fin: '18/02/2023',
      turno: 'Mañana',
      virtual: 'S/. 250.00',
    },
    {
      id: 2,
      title: 'Verano',
      price: '440',
      inicio: '24/10/2022',
      fin: '25/02/2023',
      turno: 'Mañana',
      virtual: 'No aplica',
    },
    {
      id: 3,
      title: 'Repaso semestral',
      price: '450',
      inicio: '02/01/2022',
      fin: '11/02/2023',
      turno: 'Mañana',
      virtual: 'S/. 250.00',
    },
  ]);

  const [cardUnaj, setCardUnaj] = useState([
    {
      id: 1,
      title: 'Repaso',
      price: '550',
      inicio: '02/01/2023',
      fin: '18/02/2023',
      turno: 'Mañana',
      virtual: 'S/. 250.00',
    },
    {
      id: 2,
      title: 'Verano',
      price: '440',
      inicio: '24/10/2022',
      fin: '25/02/2023',
      turno: 'Mañana',
      virtual: 'No aplica',
    },
    {
      id: 3,
      title: 'Repaso Semestral',
      price: '170',
      inicio: '02/01/2022',
      fin: '11/02/2023',
      turno: 'Mañana',
      virtual: 'S/. 250.00',
    },
  ]);
  const [universidades, setUniversidades] = useState([
    {
      id: 1,
      nombre: 'Universidad nacional del altiplano de puno',
    },
    {
      id: 2,
      nombre: 'Universidad nacional de san agustin',
    },
    {
      id: 3,
      nombre: 'Universidad nacional de juliaca',
    },
  ]);

  const [element, setElement] = useState(1);
  const handleElement = id => {
    setElement(id);
  };

  return (
    <div>
      <Carousel autoplay>
        <div>
          <img
            src={slide1}
            alt=''
          />
        </div>
        <div>
          <img
            src={slide2}
            alt=''
          />
        </div>
        <div>
          <img
            src={slide3}
            alt=''
          />
        </div>
      </Carousel>
      <div className='p-10 lg:container lg:mx-auto'>
        <div className='flex flex-col gap-5'>
          <h2 className='uppercase text-xs'>
            Mejoramos la experiencia de aprendizaje
          </h2>
          <div className='grid grid-cols-1 gap-10'>
            <div className='flex gap-5 justify-between'>
              {universidades.map(({ id, nombre }) => {
                return (
                  <button
                    className={`  text-text-primary font-bold p-2 rounded-md uppercase ${
                      element === id
                        ? 'bg-yellow-primary text-white'
                        : 'shadow-lg'
                    }`}
                    onClick={() => handleElement(id)}
                    key={id}
                  >
                    {nombre}
                  </button>
                );
              })}
            </div>
            <div className='grid sm:grid-cols-3 gap-10'>
              {element === 1 && <Planes planes={cardUna} />}
              {element === 2 && <Planes planes={cardUnsa} />}
              {element === 3 && <Planes planes={cardUnaj} />}
            </div>
          </div>
        </div>
      </div>
      <div className='p-10 grid sm:grid-cols-2 lg:container lg:mx-auto'>
        <div>
          <div>
            <h2 className='text-3xl font-semibold text-center text-yellow-primary'>
              ¡CONOCE NUESTROS BENEFICIOS, HORARIOS Y MÁS!
            </h2>
          </div>
          <div className='flex flex-col gap-5 my-10'>
            <button className='border-gray-300 border-2 p-2 rounded-md text-gray-400 uppercase font-semibold hover:border-blue-primary hover:text-blue-primary'>
              Descargar Folleto Verano
            </button>
            <button className='border-gray-300 border-2 p-2 rounded-md text-gray-400 uppercase font-semibold hover:border-blue-primary hover:text-blue-primary'>
              Descargar Folleto Repaso
            </button>
            <button className='border-gray-300 border-2 p-2 rounded-md text-gray-400 uppercase font-semibold hover:border-blue-primary hover:text-blue-primary'>
              Descargar Folleto intensivo
            </button>
          </div>
        </div>
        <div>
          <img
            src={img4}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};
