import './Banner.css';
export const Banner = ({ text }) => {
  return (
    <div className='banner h-[50vw] relative'>
      <div className='bg-banner-bg opacity-60 w-full h-full'></div>
      <div className='px-10'>
        <div className='absolute top-[50%] text-white text-4xl font-extrabold border-l-8 border-yellow-primary px-2'>
          {text}
        </div>
      </div>
    </div>
  );
};
