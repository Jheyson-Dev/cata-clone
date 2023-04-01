import { Banner } from '../sections/Banner';
import logro1 from '../../assets/img/logros/Logro_1.webp';
import logro2 from '../../assets/img/logros/Logro_2.webp';
import logro3 from '../../assets/img/logros/Logro_3.webp';
import logro4 from '../../assets/img/logros/Logro_4.webp';
import logro5 from '../../assets/img/logros/Logro_5.webp';
import logro6 from '../../assets/img/logros/Logro_6.webp';
import logro7 from '../../assets/img/logros/Logro_7.webp';
import logro8 from '../../assets/img/logros/Logro_8.webp';
import logro9 from '../../assets/img/logros/Logro_9.webp';
import logro10 from '../../assets/img/logros/Logro_10.webp';
import { useState } from 'react';
import { Image } from 'antd';

export const Logros = () => {
  const [logro, setLogro] = useState([
    {
      id: 1,
      img: logro1,
    },
    {
      id: 2,
      img: logro2,
    },
    {
      id: 3,
      img: logro3,
    },
    {
      id: 4,
      img: logro4,
    },
    {
      id: 5,
      img: logro5,
    },
    {
      id: 6,
      img: logro6,
    },
    {
      id: 7,
      img: logro7,
    },
    {
      id: 8,
      img: logro8,
    },
    {
      id: 9,
      img: logro9,
    },
    {
      id: 10,
      img: logro10,
    },
  ]);

  return (
    <div>
      <Banner text={'Logros'} />
      <div className='p-10 lg:container lg:mx-auto'>
        <div className='grid gap-5 sm:gap-10'>
          <div>
            <h2 className='text-3xl text-yellow-primary font-semibold text-center'>
              Entre los primeros en diversos concursos
            </h2>
          </div>
          <span className='text-gray-400 text-sm font-semibold text-center'>
            Representamos a la cuidad de Juliaca en cualquier evento...
          </span>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-5 lg:grid-cols-5'>
            {logro.map(({ id, img }) => {
              return (
                <div key={id}>
                  <Image
                    src={img}
                    alt=''
                    rootClassName='bg-black lg:bg-transparent'
                    className='rounded-lg shadow-lg'
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
