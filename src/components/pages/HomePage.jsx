import { Carrucel } from '../sections/home/Carrucel';
import { Contact } from '../sections/home/Contact';
import { Sedes } from '../sections/home/Sedes';
import { TourSede } from '../sections/home/TourSede';
import Skeleton from 'react-loading-skeleton';

import './HomePage.css';
export const HomePage = () => {
  return (
    <div>
      <div>
        <Carrucel />
      </div>
      <div className='px-10 py-20 '>
        <Sedes />
      </div>
      <TourSede />
      <div className='px-10 py-20'>
        <Contact />
      </div>
    </div>
  );
};
