import fondo1 from '../../../assets/img/sedes/CATA_Oasis_Oficial.png';
import fondo2 from '../../../assets/img/sedes/CATA_Jerusalen_Oficial.png';
import './Sedes.css';
import 'animate.css';

export const Sedes = () => {
  return (
    <div className='grid grid-cols-1 gap-10'>
      <h2 className='text-5xl font-semibold text-text-primary text-center border-b-8 border-yellow-primary pb-2 animate__backInLeft animate__bounce'>
        Descubre las nuevas sedes
      </h2>
      <div className='grid grid-cols-1 gap-5'>
        <div className='sede1 h-56'>
          <div className='bg-[rgba(0,0,0,.5)] flex justify-center items-center h-full'>
            <img
              src={fondo1}
              alt=''
            />
          </div>
        </div>
        <div className='sede2 h-56'>
          <div className='bg-[rgba(0,0,0,.5)] flex justify-center items-center h-full'>
            <img
              src={fondo2}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};
