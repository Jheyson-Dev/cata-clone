import vicePresiImg from '../../../assets/img/nosotros/consejo_directivo/Vicepresidente.png';
import tesoretaImg from '../../../assets/img/nosotros/consejo_directivo/Tesorera.png';
import vocalImg from '../../../assets/img/nosotros/consejo_directivo/Vocal.png';
import primerAncianoImg from '../../../assets/img/nosotros/consejo_directivo/Primer_Anciano.png';

import { useState } from 'react';

export const ConsejoAdmin = () => {
  const [consejo, setConsejo] = useState([
    {
      id: 1,
      img: vicePresiImg,
      nombre: 'Balisio Chambi Quispe',
      cargo: 'Vicepresidente',
    },
    {
      id: 2,
      img: tesoretaImg,
      nombre: 'Gloria Nelly Mamani Apaza',
      cargo: 'TESORERA',
    },
    {
      id: 3,
      img: vocalImg,
      nombre: 'Olga Condori Payehuanca',
      cargo: 'VOCAL',
    },
    {
      id: 4,
      img: primerAncianoImg,
      nombre: 'Emmer Calsin Molleapaza',
      cargo: 'PRIMER ANCIANO',
    },
  ]);
  return (
    <div className='grid grid-cols-1 gap-10'>
      {consejo.map(({ id, img, nombre, cargo }) => {
        return (
          <div
            className='flex flex-col gap-3 items-center'
            key={id}
          >
            <img
              src={img}
              alt=''
              className='w-56'
            />
            <div className='flex flex-col items-center gap-2'>
              <span className='font-semibold text-text-primary text-2xl'>
                {nombre}
              </span>
              <span className='text-text-primary  font-thin uppercase'>
                {cargo}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
