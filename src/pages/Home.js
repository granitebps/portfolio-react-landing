import React from 'react';
import Particles from 'react-particles-js';
import Socialicons from '../components/Socialicons';
import Layout from '../components/Layout';
import useAxios from '../utils/useAxios';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [{ data, loading, error }, refetch] = useAxios('profile', {
    useCache: false,
  });
  const paramConfig = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      color: {
        value: '#ffffff',
      },
      opacity: {
        value: 0.1,
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 1,
        direction: 'top',
        out_mode: 'out',
      },
    },
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error retry={refetch} />;
  }
  return (
    <Layout>
      <Helmet>
        <title>Granite Bagas - Home</title>
        <meta name='description' content={data.data.profile.about} />
        <meta property='og:title' content='Home Page of Granite Bagas Site' />
        <meta property='og:description' content={data.data.profile.about} />
        <meta
          property='og:image'
          content='http://api.granitebps.com/images/gbps.png'
        />
        <meta property='og:url' content='https://granitebps.com' />
        <meta property='og:site_name' content='Granite Bagas' />
        <meta name='twitter:title' content='Home Page of Granite Bagas Site' />
        <meta name='twitter:description' content={data.data.profile.about} />
        <meta
          name='twitter:image'
          content='http://api.granitebps.com/images/gbps.png'
        />
        <meta name='twitter:site' content='@granitbps' />
        <meta name='twitter:creator' content='@granitbps' />
      </Helmet>

      <div className='mi-home-area mi-padding-section'>
        <Particles className='mi-home-particle' params={paramConfig} />
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10 col-12'>
              <div className='mi-home-content'>
                <h1>
                  Hi, I am <span className='color-theme'>{data.data.name}</span>
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

export default Home;
