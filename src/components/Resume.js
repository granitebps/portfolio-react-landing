import React from 'react';
import moment from 'moment';

function Resume(props) {
  const { start_date, end_date, position, company } = props.resumeData;
  const startDate = moment(start_date).format('MMMM YYYY');
  const endDate = end_date ? moment(end_date).format('MMMM YYYY') : 'Now';
  return (
    <div className='mi-resume mt-30'>
      <div className='mi-resume-summary'>
        <h6 className='mi-resume-year'>
          {startDate} - {endDate}
        </h6>
      </div>
      <div className='mi-resume-details'>
        <h5>{position}</h5>
        <h6 className='mi-resume-company'>{company}</h6>
        <p>Deskripsi</p>
      </div>
    </div>
  );
}

export default Resume;
