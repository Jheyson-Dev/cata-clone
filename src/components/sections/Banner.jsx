import './Banner.css';
export const Banner = ({ text }) => {
  return (
    <div className='banner h-[50vw] relative'>
      <div className='bg-banner-bg opacity-60 w-full h-full'></div>
      <div className='px-10 lg:container lg:mx-auto'>
        <div className='absolute top-[50%] text-white text-4xl font-extrabold border-l-8 border-yellow-primary px-2 lg:text-7xl'>
          {text}
        </div>
      </div>
    </div>
  );
};
