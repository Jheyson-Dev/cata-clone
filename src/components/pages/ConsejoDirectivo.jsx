import './ConsejoDirectivo.css';
import { PresidenteDialog } from '../sections/consejo/PresidenteDialog';
import { ConsejoAdmin } from '../sections/consejo/ConsejoAdmin';
import { Banner } from '../sections/Banner';

export const ConsejoDirectivo = () => {
  return (
    <div>
      <Banner text={'Consejo Directivo'} />
      <div className='px-10 py-10 grid gap-20 lg:container lg:mx-auto'>
        <PresidenteDialog />
        <ConsejoAdmin />
      </div>
    </div>
  );
};
