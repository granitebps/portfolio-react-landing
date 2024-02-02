import React from 'react';

const Socialicons = ({ social }) => {
  return (
    <ul className="mi-socialicons mi-socialicons-bordered">
      <li>
        <a rel="noopener noreferrer" target="_blank" href={social.linkedin}>
          <i className="lni lni-linkedin"></i>
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" target="_blank" href={social.github}>
          <i className="lni lni-github"></i>
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" target="_blank" href={social.facebook}>
          <i className="lni lni-facebook"></i>
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" target="_blank" href={social.twitter}>
          <i className="lni lni-twitter"></i>
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" target="_blank" href={social.instagram}>
          <i className="lni lni-instagram"></i>
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" target="_blank" href={social.youtube}>
          <i className="lni lni-youtube"></i>
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" target="_blank" href={social.medium}>
          <i className="lni lni-medium"></i>
        </a>
      </li>
    </ul>
  );
};

export default Socialicons;
