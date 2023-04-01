import presiImg from '../../../assets/img/nosotros/consejo_directivo/Presidente.webp';
import { Quotes } from 'phosphor-react';

export const PresidenteDialog = () => {
  return (
    <div className='grid sm:grid-cols-2 sm:place-items-center gap-5'>
      <div className='flex flex-col gap-2'>
        <img
          src={presiImg}
          alt=''
        />
        <div className='flex flex-col items-center'>
          <span className='font-bold'>Winston Ruso Quispe Flores</span>
          <span className='text-xs text-text-primary '>PRESIDENTE</span>
        </div>
      </div>
      <div className='text-center flex flex-col items-center'>
        <div>
          <Quotes
            size={48}
            weight='fill'
            color='gray'
            className='rotate-180 opacity-50'
          />
        </div>
        <p className='text-sm text-text-primary leading-loose font-thin'>
          Bienvenido a la comunidad universitaria unionista. Somos parte de la
          red mundial educativa adventista que cuenta con 117 universidades. El
          origen de nuestra institución data de 1919, una época donde los
          cañones de la primera Guerra Mundial aún estaban humeantes. Desde el
          inicio experimentamos lo que significa crecer y desarrollarse en un
          contexto de adversidades. Ha pasado más de un siglo y ya no hay
          cañones humeantes. Hoy otras guerras nos rodean; conflictos que son de
          otra naturaleza y que se localizan en el campo educativo. En medio de
          esa lid, los valores cristianos están colisionando con los antivalores
          que degradan la sociedad. Esta es una guerra silenciosa, menos notoria
          y, por lo mismo, muy peligrosa.
        </p>
        <div>
          <Quotes
            size={48}
            weight='fill'
            color='gray'
            className='opacity-50'
          />
        </div>
      </div>
    </div>
  );
};
