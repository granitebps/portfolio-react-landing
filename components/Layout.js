import React from 'react';
import Header from '../components/Header';
import BackgroundLines from '../components/BackgroundLines';
import Head from 'next/head';
import Script from 'next/script';

const Layout = ({ children }) => {
  return (
    <div className="mi-wrapper">
      <Head>
        <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />

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
      <Script
        defer
        async
        src="https://cloud.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
      />
    </div>
  );
};

export default Layout;
