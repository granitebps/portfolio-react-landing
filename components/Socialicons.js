import React from 'react';
import dynamic from 'next/dynamic';

const LineIcon = dynamic(() => import('react-lineicons'), {
  ssr: false,
});

const Socialicons = ({ social }) => {
  return (
    <ul className="mi-socialicons mi-socialicons-bordered">
      <li>
        <a rel="noopener noreferrer" target="_blank" href={social.linkedin}>
          <LineIcon name="linkedin" />
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" target="_blank" href={social.github}>
          <LineIcon name="github" />
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" target="_blank" href={social.facebook}>
          <LineIcon name="facebook" />
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" target="_blank" href={social.twitter}>
          <LineIcon name="twitter" />
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" target="_blank" href={social.instagram}>
          <LineIcon name="instagram" />
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" target="_blank" href={social.youtube}>
          <LineIcon name="youtube" />
        </a>
      </li>
    </ul>
  );
};

export default Socialicons;
