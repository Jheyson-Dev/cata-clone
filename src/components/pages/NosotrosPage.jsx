import './NosotrosPage.css';
import banner from '../../assets/img/nosotros/Banner_Nosotros.webp';

export const NosotrosPage = () => {
  return (
    <div>
      <div className='banner h-[50vw] relative'>
        <div className='bg-banner-bg opacity-60 w-full h-full'></div>
        <div className='px-10'>
          <div className='absolute top-[50%] text-white text-5xl font-extrabold border-l-8 border-yellow-primary px-2'>
            Nosotros
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-10 py-20 px-10'>
        <div className='grid grid-cols-1 gap-10'>
          <div className='shadow-xl border-l-4 border-yellow-primary rounded-md'>
            <div className='flex flex-col gap-5 p-2'>
              <h2 className='text-3xl text-text-primary font-semibold border-b-2 border-text-primary py-2'>
                Misión
              </h2>
              <p className=' text-sm'>
                «Formar ciudadanos{' '}
                <span className='font-semibold'>íntegros</span> y
                <span className='font-semibold'> abnegados</span> para esta vida
                y la eternidad»
              </p>
            </div>
          </div>
          <div className='shadow-xl border-l-4 border-yellow-primary rounded-md'>
            <div className='flex flex-col gap-5 p-2'>
              <h2 className='text-3xl text-text-primary font-semibold border-b-2 border-text-primary py-2'>
                Visión
              </h2>
              <p className=' text-sm'>
                « <span className='font-semibold'>Un líder </span> en cada hogar
                con{' '}
                <span className='font-semibold'>principios cristianos </span>
                modelado en{' '}
                <span className='font-semibold'>experiencias prácticas</span> «
              </p>
            </div>
          </div>
        </div>
        <div className='shadow-lg border-l-4 border-yellow-primary rounded-md'>
          <div className='flex flex-col gap-5 p-2'>
            <h2 className='text-3xl text-text-primary font-semibold border-b-2 border-text-primary py-2'>
              Valores
            </h2>
            <p className=' text-sm'>
              La Red de Educación Adventista basa su pedagogía en principios
              bíblicos-cristianos. Estos valores son aplicados en todas las
              vivencias académicas del estudiante. Para reforzar esa
              experiencia, la Red desarrolla el Plan Maestro de Desarrollo
              Espiritual (PMDE), que enfatiza, a cada bimestre, las virtudes que
              deben formar parte de la vida en sociedad, tales como: humildad;
              la igualdad; generosidad e integridad. Una formación completa, que
              considera al ser humano como manifestación del amor, cuidado y
              creación de Dios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
