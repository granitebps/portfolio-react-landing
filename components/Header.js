import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const [navigationToggler, setNavigationToggler] = useState(false);
  const router = useRouter();

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  return (
    <nav className={navigationToggler ? 'mi-header is-visible' : 'mi-header'}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        {!navigationToggler ? <i className="lni lni-menu"></i> : <i className="lni lni-close"></i>}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link href="/">
            <a>
              <img
                src="https://is3.cloudhost.id/gbps/avatar/avatar.jpg"
                alt="Granite Bagas"
                className="img-fluid align-self-center"
              />
            </a>
          </Link>
        </div>

        <ul className="mi-header-menu">
          <li>
            <Link href="/">
              <a className={router.pathname === '/' ? 'active' : undefined}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={router.pathname === '/about' ? 'active' : undefined}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a className={router.pathname === '/resume' ? 'active' : undefined}>Resume</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolios">
              <a className={router.pathname === '/portfolios' ? 'active' : undefined}>Portfolios</a>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <a className={router.pathname.includes('/blogs') ? 'active' : undefined}>Blogs</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={router.pathname === '/contact' ? 'active' : undefined}>Contact</a>
            </Link>
          </li>
        </ul>
        <p className="mi-header-copyright">
          &copy; {new Date().getFullYear()} <b>GBPS</b>
        </p>
      </div>
    </nav>
  );
}

export default Header;
