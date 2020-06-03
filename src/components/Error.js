import React from 'react';
import errorImg from '../assets/img/500.png';

const Error = ({ retry }) => {
  return (
    <div className='d-flex align-items-center min-vh-100'>
      <div className='container text-center'>
        <img
          src={errorImg}
          alt='ErrorImg'
          className='img-fluid align-self-center mt-75'
        />
        <h1 className='font-large-2 my-2'>Internal Server Error!</h1>
        <button onClick={retry} className='btn btn-primary btn-lg'>
          Retry
        </button>
      </div>
    </div>
  );
};

export default Error;
