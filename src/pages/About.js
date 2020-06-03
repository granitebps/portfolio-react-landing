import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import * as Icon from 'react-feather';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import Service from '../components/Service';
import useAxios from '../utils/useAxios';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Helmet } from 'react-helmet';

function About() {
  const [
    { data: dataProfile, loading: loadingProfile, error: errorProfile },
    refetchProfile,
  ] = useAxios('profile', { useCache: false });
  const [
    { data: dataService, loading: loadingService, error: errorService },
  ] = useAxios('service', { useCache: false });
  const [toggler, setToggler] = useState(false);

  if (loadingProfile || loadingService) {
    return <Loading />;
  }

  if (errorProfile || errorService) {
    return <Error retry={refetchProfile} />;
  }

  return (
    <Layout>
      <Helmet>
        <title>Granite Bagas - About</title>
        <meta name='description' content='About Granite Bagas' />
        <meta property='og:title' content='About Page of Granite Bagas Site' />
        <meta property='og:description' content='About Granite Bagas' />
        <meta
          property='og:image'
          content='http://api.granitebps.com/images/gbps.png'
        />
        <meta property='og:url' content='https://granitebps.com' />
        <meta property='og:site_name' content='Granite Bagas' />
        <meta name='twitter:title' content='About Page of Granite Bagas Site' />
        <meta name='twitter:description' content='About Granite Bagas' />
        <meta
          name='twitter:image'
          content='http://api.granitebps.com/images/gbps.png'
        />
        <meta name='twitter:site' content='@granitbps' />
        <meta name='twitter:creator' content='@granitbps' />
      </Helmet>

      <div className='mi-about-area mi-section mi-padding-top'>
        <div className='container'>
          <Sectiontitle title='About Me' />
          <div className='row'>
            <div className='col-lg-6'>
              <div className='mi-about-image'>
                <img
                  src={dataProfile.data.profile.avatar}
                  alt='About Granite Bagas'
                  onClick={() => setToggler((prevState) => !prevState)}
                />
                <span className='mi-about-image-icon'>
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  type='image'
                  sources={[
                    'https://api.granitebps.com/images/avatar/foto ijazah.png',
                  ]}
                />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='mi-about-content'>
                <h3>
                  I am{' '}
                  <span className='color-theme'>{dataProfile.data.name}</span>
                </h3>
                <p>{dataProfile.data.profile.about}</p>
                <ul>
                  <li>
                    <b>Full Name</b> {dataProfile.data.name}
                  </li>
                  <li>
                    <b>Age</b> 23 Years
                  </li>
                  <li>
                    <b>Phone</b> {dataProfile.data.profile.phone}
                  </li>
                  <li>
                    <b>Nationality</b> Indonesia
                  </li>
                  <li>
                    <b>Languages</b> Indonesia, English
                  </li>
                  <li>
                    <b>Email</b> {dataProfile.data.email}
                  </li>
                  <li>
                    <b>Address</b> {dataProfile.data.profile.address}
                  </li>
                  <li>
                    <b>Freelance</b> Available
                  </li>
                </ul>
                <a href={dataProfile.data.profile.cv} className='mi-button'>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mi-service-area mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='Services' />
          <div className='mi-service-wrapper'>
            <div className='row mt-30-reverse'>
              {dataService.data.map((service) => (
                <div
                  className='col-lg-4 col-md-6 col-12 mt-30'
                  key={service.name}
                >
                  <Service service={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
