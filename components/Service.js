import React from 'react';

const Service = ({ service }) => {
  return (
    <div className="mi-service">
      <span className="mi-service-icon">
        <i className={`lni lni-${service.icon}`}></i>
      </span>
      <h5>{service.name}</h5>
      <p>{service.desc}</p>
    </div>
  );
};

export default Service;
