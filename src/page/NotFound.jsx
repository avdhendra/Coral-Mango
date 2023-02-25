import React from 'react';
import Lottie from 'lottie-react';
import NotFoundAnimation from '../Asset/not-found.json'
import './NotFound.css'

const NotFound = () => {
  const defaultOptions = {
    height: '100%',
    loop: true,
    autoplay: true,
    animationData: NotFoundAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className='NotFound_Container'>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default NotFound;
