import React from 'react';
import dynamic from 'next/dynamic';

const LineIcon = dynamic(() => import('react-lineicons'), {
  ssr: false,
});

function Smalltitle(props) {
  return (
    <div className="mi-smalltitle">
      <span className="mi-smalltitle-icon">
        <LineIcon name={props.icon} />
      </span>
      <h4>{props.title}</h4>
    </div>
  );
}

export default Smalltitle;
