import React from 'react';

function Smalltitle(props) {
  return (
    <div className="mi-smalltitle">
      <span className="mi-smalltitle-icon">
        <i className={`lni lni-${props.icon}`}></i>
      </span>
      <h4>{props.title}</h4>
    </div>
  );
}

export default Smalltitle;
