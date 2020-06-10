import React from 'react';
import { useRouter } from 'next/router';

const Error404 = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push('/');
  };
  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container text-center">
        <img
          src="/img/404.png"
          alt="ErrorImg"
          className="img-fluid align-self-center mt-75"
        />
        <h1 className="font-large-2 my-2">404 - Page Not Found!</h1>
        <button onClick={handleBack} className="btn btn-primary btn-lg">
          Home
        </button>
      </div>
    </div>
  );
};

export default Error404;
