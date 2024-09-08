import React from 'react';
import Logo from '../../img/LogoNph.png';

export const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full  flex justify-center z-50 mb-11'>
      <img src={Logo} className='h-[80px]' alt='Norophilia Logo' />
    </div>
  );
};
