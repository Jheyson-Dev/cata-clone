import { Carrucel } from '../sections/home/Carrucel';
import { Contact } from '../sections/home/Contact';
import { Sedes } from '../sections/home/Sedes';
import { TourSede } from '../sections/home/TourSede';

import './HomePage.css';
export const HomePage = () => {
  return (
    <div>
      <div>
        <Carrucel />
      </div>
      <div className='px-10 py-20 lg:container lg:mx-auto '>
        <Sedes />
      </div>
      <TourSede />
      <div className='px-10 py-20 lg:container lg:mx-auto'>
        <Contact />
      </div>
    </div>
  );
};
