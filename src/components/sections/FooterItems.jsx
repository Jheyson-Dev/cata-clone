import { MapPin, MapTrifold, Signpost } from 'phosphor-react';

export const FooterItems = ({ dir, refe, loc }) => {
  return (
    <ul>
      <li>
        <div className='flex gap-1 text-white text-sm'>
          <Direction />
          <span>{dir}</span>
        </div>
      </li>
      <li>
        <div className='flex gap-1 text-white text-sm'>
          <Reference />
          <span>{refe}</span>
        </div>
      </li>
      <li>
        <div className='flex gap-1 text-white text-sm'>
          <Location />
          <span>{loc}</span>
        </div>
      </li>
    </ul>
  );
};

const Direction = () => {
  return (
    <MapPin
      size={20}
      color='#ffffff'
      weight='fill'
    />
  );
};
const Reference = () => {
  return (
    <Signpost
      size={20}
      color='#ffffff'
      weight='fill'
    />
  );
};
const Location = () => {
  return (
    <MapTrifold
      size={20}
      color='#ffffff'
      weight='fill'
    />
  );
};
