import anime from 'animejs';
import { useInView } from 'react-intersection-observer';
import tourVideo from '../../../assets/video/nueva-jerusalen1.mp4';

export const TourSede = () => {
  return (
    <>
      <div className='px-10'>
        <div className='grid grid-cols-1 gap-10'>
          <h2 className='text-3xl font-semibold text-text-primary text-center border-b-8 border-yellow-primary pb-2'>
            Tour Virtual por la Nueva Jerusalén
          </h2>
          <div className='flex justify-center'>
            <video
              src={tourVideo}
              controls
              className={`rounded-xl `}
            />
          </div>
        </div>
      </div>
      <div className='text-center mt-5'>
        <span className={`uppercase text-blue-primary font-semibold `}>
          Mejoramos la experiencia de aprendizaje
        </span>
      </div>
    </>
  );
};
