import {
  FacebookLogo,
  MessengerLogo,
  WhatsappLogo,
  YoutubeLogo,
} from 'phosphor-react';
export const SocialMedia = ({ color }) => {
  return (
    <div className='flex  justify-between'>
      <div
        className={`flex  flex-col items-center ${
          color == 'white' ? 'text-white' : 'text-text-primary'
        } font-bold`}
      >
        <FacebookLogo
          size={48}
          color='currentColor'
        />
        Facebook
      </div>
      <div
        className={`flex  flex-col items-center ${
          color == 'white' ? 'text-white' : 'text-text-primary'
        } font-bold`}
      >
        <YoutubeLogo
          size={48}
          color='currentColor'
        />
        Youtube
      </div>
      <div
        className={`flex  flex-col items-center ${
          color == 'white' ? 'text-white' : 'text-text-primary'
        } font-bold`}
      >
        <WhatsappLogo
          size={48}
          color='currentColor'
        />
        WhatsApp
      </div>
      <div
        className={`flex  flex-col items-center ${
          color == 'white' ? 'text-white' : 'text-text-primary'
        } font-bold`}
      >
        <MessengerLogo
          size={48}
          color='currentColor'
        />
        Messenger
      </div>
    </div>
  );
};
