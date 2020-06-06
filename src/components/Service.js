import React from 'react';
import LineIcon from 'react-lineicons';

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
