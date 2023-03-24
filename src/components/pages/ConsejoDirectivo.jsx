import './ConsejoDirectivo.css';
import { PresidenteDialog } from '../sections/consejo/PresidenteDialog';
import { ConsejoAdmin } from '../sections/consejo/ConsejoAdmin';

export const ConsejoDirectivo = () => {
  return (
    <div>
      <div className='banner h-[50vw] relative'>
        <div className='bg-banner-bg opacity-60 w-full h-full'></div>
        <div className='px-10'>
          <div className='absolute top-[50%] text-white text-4xl font-extrabold border-l-8 border-yellow-primary px-2'>
            Consejo Directivo
          </div>
        </div>
      </div>
      <div className='px-10 py-10 grid gap-20'>
        <PresidenteDialog />
        <ConsejoAdmin />
      </div>
    </div>
  );
};
