import { FooterItems } from './FooterItems';
import { SocialMedia } from './SocialMedia';

export const Footer = () => {
  return (
    <footer className='bg-blue-primary mt-auto px-10 py-10'>
      <div className='flex flex-col gap-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-lg text-white font-bold'>Sede Central CATA</h2>
            <div>
              <FooterItems
                dir={'Dirección: Jr. Moquegua N° 852'}
                refe={'Ref. Frente al Mercado Internacional “Túpac Amaru”'}
                loc={'Juliaca, San Román – Puno'}
              />
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className='text-lg text-white font-bold'>Sede Central CATA</h2>
            <div>
              <FooterItems
                dir={'Dirección: Jr. Raúl Porras B. N° 287'}
                refe={'Ref. Esquina con Jr. San Martín'}
                loc={'Juliaca, San Román – Puno'}
              />
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className='text-lg text-white font-bold'>Sede Central CATA</h2>
            <div>
              <FooterItems
                dir={
                  'Dirección: Titiline Independencia N° 2 – Urb. Jerusalem - Sector Cacachi'
                }
                refe={'Ref. Puente Independencia salida a Huancané'}
                loc={'San Miguel – San Román – Puno'}
              />
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className='text-lg text-white font-bold'>Sede Central CATA</h2>
            <div>
              <FooterItems
                dir={'Dirección: Av. Modesto Borda s/n'}
                refe={'Carretera Salida a Coata Km 2.5 - Chilla'}
                loc={'Caracoto – San Román – Puno'}
              />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-5'>
          <SocialMedia color={'white'} />
          <span className='text-white text-center text-sm'>
            Copyright © 2023 Colegio Adventista Tupac Amaru | Desarrollado por
            Colegio Adventista Tupac Amaru
          </span>
        </div>
      </div>
    </footer>
  );
};
