import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import * as Icon from 'react-feather';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import Service from '../components/Service';
import Head from 'next/head';
import Technology from '../components/Technology';
import { baseAxios } from '../utils/useAxios';

function about({ dataProfile, dataService, dataTechnology }) {
  const [toggler, setToggler] = useState(false);

  return (
    <Layout data={dataProfile.data}>
      <Head>
        <title>Granite Bagas - About</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="About Granite Bagas" />
        <meta property="og:title" content="About Page of Granite Bagas Site" />
        <meta property="og:description" content="About Granite Bagas" />
        <meta property="og:image" content="http://api.granitebps.com/images/gbps.png" />
        <meta property="og:url" content="https://granitebps.site" />
        <meta property="og:site_name" content="Granite Bagas" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="About Page of Granite Bagas Site" />
        <meta name="twitter:description" content="About Granite Bagas" />
        <meta name="twitter:image" content="http://api.granitebps.com/images/gbps.png" />
        <meta name="twitter:site" content="@granitbps" />
        <meta name="twitter:creator" content="@granitbps" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img
                  src={dataProfile.data.profile.avatar}
                  alt="About Granite Bagas"
                  onClick={() => setToggler((prevState) => !prevState)}
                />
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  type="image"
                  sources={['https://api.granitebps.com/images/avatar/foto ijazah.png']}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am <span className="color-theme">{dataProfile.data.name}</span>
                </h3>
                <p>{dataProfile.data.profile.about}</p>
                <ul>
                  <li>
                    <b>Full Name</b> {dataProfile.data.name}
                  </li>
                  <li>
                    <b>Age</b> {dataProfile.data.profile.age} Years
                  </li>
                  <li>
                    <b>Phone</b> {dataProfile.data.profile.phone}
                  </li>
                  <li>
                    <b>Nationality</b> {dataProfile.data.profile.nationality}
                  </li>
                  <li>
                    <b>Languages</b> {dataProfile.data.profile.languages.toString()}
                  </li>
                  <li>
                    <b>Email</b> {dataProfile.data.email}
                  </li>
                  <li>
                    <b>Address</b> {dataProfile.data.profile.address}
                  </li>
                  <li>
                    <b>Freelance</b>{' '}
                    {dataProfile.data.profile.freelance === 1 ? 'Available' : 'Not Available'}
                  </li>
                </ul>
                <a href={dataProfile.data.profile.cv} className="mi-button">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Services" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {dataService.data.map((service) => (
                <div className="col-lg-4 col-md-6 col-12 mt-30" key={service.name}>
                  <Service service={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Technologies" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {dataTechnology.data.map((technology) => (
                <div className="col-lg-2 col-md-3 col-4 mt-30" key={technology.name}>
                  <Technology technology={technology} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Reviews" />
          <div className="row justify-content-center">
            <div className="col-12">
              <h3>Under Construction</h3>
              {/* <Slider className="mi-testimonial-slider" {...sliderSettings}>
                {reviews.map(review =>(
                  <Testimonial key={review.id} content={review}/>
                ))}
              </Slider> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { data: dataProfile } = await baseAxios.get('profile');
  const { data: dataService } = await baseAxios.get('service');
  const { data: dataTechnology } = await baseAxios.get('technology');

  return {
    props: {
      dataProfile: dataProfile,
      dataService: dataService,
      dataTechnology: dataTechnology,
    },
  };
}

export default about;
