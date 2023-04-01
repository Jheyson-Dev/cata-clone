import { Carousel } from 'antd';
import slide1 from '../../../assets/img/carousel/Slide_1.webp';
import slide2 from '../../../assets/img/carousel/Slide_2.webp';

export const Carrucel = () => {
  return (
    <Carousel autoplay>
      <div>
        <img
          src={slide1}
          alt='Slide 1'
          className='w-full'
        />
      </div>
      <div>
        <img
          src={slide2}
          alt='Slide 1'
          className='w-full'
        />
      </div>
    </Carousel>
  );
};
