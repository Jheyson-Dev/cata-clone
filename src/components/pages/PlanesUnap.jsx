import { CalendarPlus, Money, Calendar } from 'phosphor-react';

export const PlanesUnap = ({ planes = [] }) => {
  return (
    <>
      {planes.map(({ id, title, price, inicio, fin, turno, virtual }) => {
        return (
          <div
            className='grid grid-cols-1 gap-5 shadow-lg rounded-lg pb-10'
            key={id}
          >
            <div className='bg-blue-primary text-white text-2xl font-bold text-center rounded-t-lg py-5 uppercase'>
              {title}
            </div>
            <div className='flex flex-col items-center'>
              <div className='font-bold flex items-center gap-2'>
                <span>S/.</span>
                <span className='text-6xl'>{price}</span>
                <span>00</span>
              </div>
              <div className='font-semibold'>Pago unico</div>
            </div>
            <div className='flex flex-col gap-2 mx-auto'>
              <div className='flex gap-2'>
                <Calendar size={24} />
                <span>{inicio}</span>
              </div>
              <div className='flex gap-2'>
                <Calendar size={24} />
                <span>{fin}</span>
              </div>
              <div className='flex gap-2'>
                <CalendarPlus size={24} />
                <span>{turno}</span>
              </div>
              <div className='flex gap-2'>
                <Money size={24} />
                <span>{virtual}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
