import { Plus, Star } from 'phosphor-react';
import { useState } from 'react';
import { Banner } from '../sections/Banner';
import antiguo from '../../assets/img/matricula/CATA-EstudianteAntiguo-Matricula-1.png';
import nuevo from '../../assets/img/matricula/CATA-EstudianteNuevo-Matricula-1.png';
import img1 from '../../assets/img/matricula/CATA-Matricula_Img_1.png';
import img2 from '../../assets/img/matricula/CATA-Matricula_Img_2.png';

export const Matricula = () => {
  const [element, setElement] = useState(1);

  const handleElement = id => {
    setElement(id);
  };
  return (
    <div>
      <Banner text={'Matricula'} />
      <div className='p-10 grid gap-5'>
        <div>
          <h2 className='text-center text-3xl font-semibold text-text-primary'>
            Requisitos de Matrícula 2023
          </h2>
        </div>
        <div className='flex justify-center gap-10'>
          <button
            className={`flex flex-col items-center shadow-md p-5 sm:px-14 rounded-md ${
              element === 1 ? 'bg-yellow-primary text-white' : 'text-gray-400'
            }`}
            onClick={() => handleElement(1)}
          >
            <Plus
              size={40}
              weight='bold'
            />
            <span className={`text-sm font-semibold`}>ALUMNO</span>
            <span className='text-lg font-semibold'>NUEVO</span>
          </button>
          <button
            className={`flex flex-col items-center shadow-md p-5 sm:px-14 rounded-md ${
              element === 2 ? 'bg-yellow-primary text-white' : 'text-gray-400'
            }`}
            onClick={() => handleElement(2)}
          >
            <Star
              size={40}
              weight='bold'
            />
            <span className={`text-sm font-semibold`}>ALUMNO</span>
            <span className={`text-lg font-semibold`}>REGULAR</span>
          </button>
        </div>
        <div>
          {element === 1 && (
            <div className='grid gap-5 sm:grid-cols-2 sm:gap-0'>
              <div className='justify-self-end'>
                <img
                  src={img2}
                  alt=''
                  className='w-2/3 mx-auto sm:mx-0 sm:ml-auto'
                />
              </div>
              <div className='justify-self-start'>
                <img
                  src={nuevo}
                  alt=''
                  className='w-2/3 mx-auto sm:mx-0'
                />
              </div>
            </div>
          )}
          {element === 2 && (
            <div className='grid  gap-5 sm:grid-cols-2 sm:gap-0 place-content-end'>
              <div className='justify-self-end'>
                <img
                  src={antiguo}
                  alt=''
                  className='w-2/3 mx-auto sm:mx-0 sm:ml-auto'
                />
              </div>
              <div className='justify-self-start'>
                <img
                  src={img1}
                  alt=''
                  className='w-2/3 mx-auto sm:mx-0'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
