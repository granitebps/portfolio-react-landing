import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='d-flex align-items-center min-vh-100'>
      <div className='container text-center'>
        <Loader type='ThreeDots' color='#ff4d4d' height={100} width={100} />
      </div>
    </div>
  );
};

export default Loading;
