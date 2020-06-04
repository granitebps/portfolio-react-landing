import React from 'react';
import TrackVisibility from 'react-on-screen';
import Sectiontitle from '../components/Sectiontitle';
import Smalltitle from '../components/Smalltitle';
import Layout from '../components/Layout';
import Progress from '../components/Progress';
import { ResumeEducation, ResumeExperience } from '../components/Resume';
import useAxios from '../utils/useAxios';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Helmet } from 'react-helmet';

function Resumes() {
  const [
    { data: dataSkill, loading: loadingSkill, error: errorSkill },
    refetchSkill,
  ] = useAxios('skill', {
    useCache: false,
  });
  const [
    {
      data: dataExperience,
      loading: loadingExperience,
      error: errorExperience,
    },
  ] = useAxios('experience', {
    useCache: false,
  });
  const [
    { data: dataEducation, loading: loadingEducation, error: errorEducation },
  ] = useAxios('education', {
    useCache: false,
  });

  if (loadingSkill || loadingExperience || loadingEducation) {
    return <Loading />;
  }

  if (errorSkill || errorExperience || errorEducation) {
    return <Error retry={refetchSkill} />;
  }

  return (
    <Layout>
      <Helmet>
        <title>Granite Bagas - Resumes</title>
        <meta name='description' content='Granite Bagas Resumes' />
        <meta
          property='og:title'
          content='Resumes Page of Granite Bagas Site'
        />
        <meta property='og:description' content='Granite Bagas Resumes' />
        <meta
          property='og:image'
          content='http://api.granitebps.com/images/gbps.png'
        />
        <meta property='og:url' content='https://granitebps.com' />
        <meta property='og:site_name' content='Granite Bagas' />
        <meta
          name='twitter:title'
          content='Resumes Page of Granite Bagas Site'
        />
        <meta name='twitter:description' content='Granite Bagas Resumes' />
        <meta
          name='twitter:image'
          content='http://api.granitebps.com/images/gbps.png'
        />
        <meta name='twitter:site' content='@granitbps' />
        <meta name='twitter:creator' content='@granitbps' />
      </Helmet>

      <div className='mi-skills-area mi-section mi-padding-top'>
        <div className='container'>
          <Sectiontitle title='My Skills' />
          <div className='mi-skills'>
            <div className='row mt-30-reverse'>
              {dataSkill.data.map((skill) => (
                <TrackVisibility
                  once
                  className='col-lg-6 mt-30'
                  key={skill.name}
                >
                  <Progress title={skill.name} percentage={skill.percentage} />
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='mi-resume-area mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='Resume' />
          <Smalltitle title='Working Experience' icon='briefcase' />
          <div className='mi-resume-wrapper'>
            {dataExperience.data.map((workingExp) => (
              <ResumeExperience key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className='mt-30'></div>
          <Smalltitle title='Educational Qualifications' icon='book' />
          <div className='mi-resume-wrapper'>
            {dataEducation.data.map((educatonExp) => (
              <ResumeEducation key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
