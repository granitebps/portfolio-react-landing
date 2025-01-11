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
            <img
              src="https://is3.cloudhost.id/gbps/avatar/avatar.jpg"
              alt="Granite Bagas"
              className="img-fluid align-self-center"
            />
          </Link>
        </div>

        <ul className="mi-header-menu">
          <li>
            <Link href="/" className={router.pathname === '/' ? 'active' : undefined}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={router.pathname === '/about' ? 'active' : undefined}>
              About
            </Link>
          </li>
          <li>
            <Link href="/resume" className={router.pathname === '/resume' ? 'active' : undefined}>
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="/portfolios"
              className={router.pathname === '/portfolios' ? 'active' : undefined}>
              Portfolios
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className={router.pathname.includes('/blogs') ? 'active' : undefined}>
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact" className={router.pathname === '/contact' ? 'active' : undefined}>
              Contact
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
