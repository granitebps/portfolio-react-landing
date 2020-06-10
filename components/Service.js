import React from 'react';
import dynamic from 'next/dynamic';

const LineIcon = dynamic(() => import('react-lineicons'), {
  ssr: false,
});

const Service = ({ service }) => {
  return (
    <div className="mi-service">
      <span className="mi-service-icon">
        <LineIcon name={service.icon} />
      </span>
      <h5>{service.name}</h5>
      <p>{service.desc}</p>
    </div>
  );
};

export default Service;
