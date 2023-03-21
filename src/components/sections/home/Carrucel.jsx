import { Carousel } from 'antd';
import slide1 from '../../../assets/img/carousel/Slide_1.webp';
import slide2 from '../../../assets/img/carousel/Slide_2.webp';
import slide3 from '../../../assets/img/carousel/Slide_3.webp';
import slide4 from '../../../assets/img/carousel/Slide_4.webp';
import slide5 from '../../../assets/img/carousel/Slide_5.webp';

export const Carrucel = () => {
  return (
    <Carousel autoplay>
      <div>
        <img
          src={slide1}
          alt='Slide 1'
        />
      </div>
      <div>
        <img
          src={slide2}
          alt='Slide 1'
        />
      </div>
      <div>
        <img
          src={slide3}
          alt='Slide 1'
        />
      </div>
      <div>
        <img
          src={slide4}
          alt='Slide 1'
        />
      </div>
      <div>
        <img
          src={slide5}
          alt='Slide 1'
        />
      </div>
    </Carousel>
  );
};
