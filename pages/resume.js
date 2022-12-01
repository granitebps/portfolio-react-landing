import React from 'react';
import TrackVisibility from 'react-on-screen';
import Head from 'next/head';
import Sectiontitle from '../components/Sectiontitle';
import Smalltitle from '../components/Smalltitle';
import Layout from '../components/Layout';
import Progress from '../components/Progress';
import { ResumeEducation, ResumeExperience } from '../components/Resume';
// import { baseAxios } from '../utils/useAxios';
import Certification from '../components/Certification';

function resume({ dataEducation, dataExperience, dataSkill, dataCertification }) {
  return (
    <Layout>
      <Head>
        <title>Granite Bagas - Resumes</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Granite Bagas Resumes" />
        <meta property="og:title" content="Resumes Page of Granite Bagas Site" />
        <meta property="og:description" content="Granite Bagas Resumes" />
        <meta property="og:image" content="https://api.granitebps.com/images/gbps.png" />
        <meta property="og:url" content="https://granitebps.com" />
        <meta property="og:site_name" content="Granite Bagas" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Resumes Page of Granite Bagas Site" />
        <meta name="twitter:description" content="Granite Bagas Resumes" />
        <meta name="twitter:image" content="https://api.granitebps.com/images/gbps.png" />
        <meta name="twitter:site" content="@granitbps" />
        <meta name="twitter:creator" content="@granitbps" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="My Skills" />
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {dataSkill.data.map((skill) => (
                <TrackVisibility once className="col-lg-6 mt-30" key={skill.name}>
                  <Progress title={skill.name} percentage={skill.percentage} />
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Resume" />
          <Smalltitle title="Working Experience" icon="briefcase" />
          <div className="mi-resume-wrapper">
            {dataExperience.data.map((workingExp) => (
              <ResumeExperience key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className="mt-30"></div>
          <Smalltitle title="Educational Qualifications" icon="book" />
          <div className="mi-resume-wrapper">
            {dataEducation.data.map((educatonExp) => (
              <ResumeEducation key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div>
        </div>
      </div>
      <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Certification" />
          <div className="row">
            {dataCertification.data.map((certification) => (
              <div className="col-lg-6 mb-5" key={certification.id}>
                <Certification content={certification} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  // const { data: dataSkill } = await baseAxios.get('skill');
  // const { data: dataExperience } = await baseAxios.get('experience');
  // const { data: dataEducation } = await baseAxios.get('education');
  // const { data: dataCertification } = await baseAxios.get('certification');
  const dataSkill = require('../data/skill.json');
  const dataExperience = require('../data/experience.json');
  const dataEducation = require('../data/education.json');
  const dataCertification = require('../data/certification.json');

  return {
    props: {
      dataSkill: dataSkill,
      dataExperience: dataExperience,
      dataEducation: dataEducation,
      dataCertification: dataCertification,
    },
  };
}

export default resume;
