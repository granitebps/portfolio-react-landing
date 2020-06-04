import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LineIcon from 'react-lineicons';
import useAxios from '../utils/useAxios';

function Header() {
  const [{ data, loading, error }] = useAxios('profile', {
    useCache: false,
  });
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  let image;
  if (loading) {
    image = require('../assets/loading.gif');
  } else if (error) {
    image = require('../assets/img/error.png');
  } else {
    image = data.data.profile.avatar;
  }

  return (
    <nav className={navigationToggler ? 'mi-header is-visible' : 'mi-header'}>
      <button onClick={handleNavigationToggler} className='mi-header-toggler'>
        {!navigationToggler ? (
          <LineIcon name='menu' />
        ) : (
          <LineIcon name='close' />
        )}
      </button>
      <div className='mi-header-inner'>
        <div className='mi-header-image'>
          <Link to='/'>
            <img
              src={image}
              alt='Granite Bagas'
              className='img-fluid align-self-center'
            />
          </Link>
        </div>

        <ul className='mi-header-menu'>
          <li>
            <NavLink exact to='/'>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'>
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/resume'>
              <span>Resume</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/portfolios'>
              <span>Portfolios</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/blogs'>
              <span>Blogs</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
        <p className='mi-header-copyright'>
          &copy; {new Date().getFullYear()} <b>GBPS</b>
        </p>
      </div>
    </nav>
  );
}

export default Header;
