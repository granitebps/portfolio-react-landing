import React from 'react';
import errorImg from '../assets/img/404.png';
import { useHistory } from 'react-router-dom';

const Error404 = () => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  return (
    <div className='d-flex align-items-center min-vh-100'>
      <div className='container text-center'>
        <img
          src={errorImg}
          alt='ErrorImg'
          className='img-fluid align-self-center mt-75'
        />
        <h1 className='font-large-2 my-2'>404 - Page Not Found!</h1>
        <button onClick={handleBack} className='btn btn-primary btn-lg'>
          Back
        </button>
      </div>
    </div>
  );
};

export default Error404;
