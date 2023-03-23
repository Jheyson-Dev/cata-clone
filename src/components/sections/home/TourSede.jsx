import anime from 'animejs';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import tourVideo from '../../../assets/video/nueva-jerusalen1.mp4';

export const TourSede = () => {
  const elementRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const animate = () => {
    anime({
      targets: elementRef.current,
      translateX: 250,
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 2000,
      easing: 'easeInOutSine',
    });
  };

  if (inView) {
    animate();
  }

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
      <div
        className='text-center mt-5'
        ref={elementRef}
      >
        <span
          className={`uppercase text-blue-primary font-semibold `}
          ref={ref}
        >
          Mejoramos la experiencia de aprendizaje
        </span>
      </div>
    </>
  );
};
