import React from 'react';
import Header from '../components/Header';
import BackgroundLines from '../components/BackgroundLines';

const Layout = ({ children }) => {
  return (
    <div className='mi-wrapper'>
      <BackgroundLines />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
