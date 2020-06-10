import React from 'react';
import Header from '../components/Header';
import BackgroundLines from '../components/BackgroundLines';

const Layout = ({ data, children }) => {
  return (
    <div className="mi-wrapper">
      <BackgroundLines />
      <Header data={data} />
      {children}
    </div>
  );
};

export default Layout;
