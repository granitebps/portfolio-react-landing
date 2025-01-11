import React from 'react';
import { baseAxios } from '../utils/useAxios';
import Socialicons from '../components/Socialicons';
import Layout from '../components/Layout';
import Particle from '../components/Particle';
import Head from 'next/head';

const index = ({ data }) => {
  return (
    <Layout data={data.data}>
      <Head>
        <title>Granite Bagas - Home</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={data.data.profile.about} />
        <meta property="og:title" content="Home Page of Granite Bagas Site" />
        <meta property="og:description" content={data.data.profile.about} />
        <meta property="og:image" content="https://api.granitebps.com/images/gbps.png" />
        <meta property="og:url" content="https://granitebps.com" />
        <meta property="og:site_name" content="Granite Bagas" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Home Page of Granite Bagas Site" />
        <meta name="twitter:description" content={data.data.profile.about} />
        <meta name="twitter:image" content="https://api.granitebps.com/images/gbps.png" />
        <meta name="twitter:site" content="@granitbps" />
        <meta name="twitter:creator" content="@granitbps" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="mi-home-area mi-padding-section">
        <Particle />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hi, I am <span className="color-theme">{data.data.name}</span>
                </h1>
                <p>{data.data.profile.about}</p>
                <Socialicons social={data.data.profile} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data } = await baseAxios.get('profile');

  return { props: { data } };
}

export default index;
