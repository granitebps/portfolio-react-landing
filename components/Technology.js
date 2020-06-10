import React from 'react';

const Technology = ({ technology }) => {
  return (
    <div className="mi-service">
      <img src={technology.pic} alt={technology.name} className="img-fluid" />
    </div>
  );
};

export default Technology;
