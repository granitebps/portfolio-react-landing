import React, { useState } from 'react';
import * as Icon from 'react-feather';
import FsLightbox from 'fslightbox-react';

function Portfolio(props) {
  const [toggler, setToggler] = useState(false);
  const { name, desc, thumbnail, pic, url, type } = props.content;
  const pics = pic.map((p) => p.pic);

  const handleToggler = (value) => {
    setToggler(value);
  };

  return (
    <div
      className={
        props.isVisible ? 'mi-portfolio mi-portfolio-visible' : 'mi-portfolio'
      }
    >
      <div className='mi-portfolio-image'>
        <img src={thumbnail} alt={name} />
        <ul>
          <li>
            <button onClick={() => handleToggler(!toggler)}>
              <Icon.ZoomIn />
            </button>
          </li>
          {url ? (
            <li>
              <a rel='noopener noreferrer' target='_blank' href={url}>
                <Icon.Link />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
      {!url ? (
        <h5>{name}</h5>
      ) : (
        <h5>
          <a rel='noopener noreferrer' target='_blank' href={url}>
            {name}
          </a>
        </h5>
      )}
      <span className='color-theme'>
        <i>{type === '1' ? 'Personal Project' : 'Client Project'}</i>
      </span>
      <h6>{desc}</h6>
      <FsLightbox toggler={toggler} type='image' sources={pics} />
    </div>
  );
}

export default Portfolio;
