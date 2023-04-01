import { Carousel } from 'antd';
import { Banner } from '../sections/Banner';
import pilar1 from '../../assets/img/propuesta_educativa/Pilar_1.webp';
import pilar2 from '../../assets/img/propuesta_educativa/Pilar_2.webp';
import pilar3 from '../../assets/img/propuesta_educativa/Pilar_3.webp';
import pilar4 from '../../assets/img/propuesta_educativa/Pilar_4.webp';
import { FilePdf } from 'phosphor-react';

export const PropuestaEducativa = () => {
  return (
    <div>
      <Banner text={'Propuesta Educativa'} />
      <div className='px-10 py-20 flex flex-col gap-5'>
        <Carousel
          autoplay
          className='sm:w-1/2 sm:mx-auto
          '
        >
          <div>
            <img
              src={pilar1}
              alt=''
              className='rounded-md'
            />
          </div>
          <div>
            <img
              src={pilar2}
              alt=''
              className='rounded-md'
            />
          </div>
          <div>
            <img
              src={pilar3}
              alt=''
              className='rounded-md'
            />
          </div>
          <div>
            <img
              src={pilar4}
              alt=''
              className='rounded-md'
            />
          </div>
        </Carousel>
        <span className='text-sm text-center text-text-primary'>
          Descubre más de nuestra metodología por niveles:
        </span>
        <div className='flex justify-center'>
          <button className=' flex gap-2 items-center bg-blue-500 text-white font-semibold p-3 rounded-md hover:scale-110 transition-transform'>
            <FilePdf
              size={32}
              color='#ffffff'
            />
            Descargar PDF informativo
          </button>
        </div>
      </div>
    </div>
  );
};
