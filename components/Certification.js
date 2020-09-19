import React from 'react';
import moment from 'moment';

function Certification(props) {
  return (
    <div className="mi-testimonial-slideritem">
      <div className="mi-testimonial">
        <div className="mi-testimonial-author">
          <h4>{props.content.name}</h4>
          <h5>{props.content.institution}</h5>
          <h6>Published : {moment(props.content.published).format('DD MMMM YYYY')}</h6>
          <a href={props.content.link} target="_blank" rel="noreferrer">
            See certificate
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certification;
