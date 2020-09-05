import React from 'react';
import TrackVisibility from 'react-on-screen';
import Sectiontitle from '../components/Sectiontitle';
import Smalltitle from '../components/Smalltitle';
import Layout from '../components/Layout';
import Progress from '../components/Progress';
import { ResumeEducation, ResumeExperience } from '../components/Resume';
import Head from 'next/head';

function resume({ dataEducation, dataExperience, dataSkill, dataProfile }) {
  return (
    <Layout data={dataProfile.data}>
      <Head>
        <title>Granite Bagas - Resumes</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Granite Bagas Resumes" />
        <meta property="og:title" content="Resumes Page of Granite Bagas Site" />
        <meta property="og:description" content="Granite Bagas Resumes" />
        <meta property="og:image" content="http://api.granitebps.com/images/gbps.png" />
        <meta property="og:url" content="https://granitebps.site" />
        <meta property="og:site_name" content="Granite Bagas" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Resumes Page of Granite Bagas Site" />
        <meta name="twitter:description" content="Granite Bagas Resumes" />
        <meta name="twitter:image" content="http://api.granitebps.com/images/gbps.png" />
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
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
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
    </Layout>
  );
}

export async function getServerSideProps() {
  const resProfile = await fetch(`https://api.granitebps.com/api/v1/profile`);
  const dataProfile = await resProfile.json();
  const resSkill = await fetch(`https://api.granitebps.com/api/v1/skill`);
  const dataSkill = await resSkill.json();
  const resExperience = await fetch(`https://api.granitebps.com/api/v1/experience`);
  const dataExperience = await resExperience.json();
  const resEducation = await fetch(`https://api.granitebps.com/api/v1/education`);
  const dataEducation = await resEducation.json();

  return {
    props: {
      dataProfile: dataProfile,
      dataSkill: dataSkill,
      dataExperience: dataExperience,
      dataEducation: dataEducation,
    },
  };
}

export default resume;
