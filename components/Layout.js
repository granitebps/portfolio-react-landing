import React from 'react';
import Header from '../components/Header';
import BackgroundLines from '../components/BackgroundLines';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className="mi-wrapper">
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-133810181-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-133810181-1');       
              `,
          }}
        />
      </Head>
      <BackgroundLines />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
