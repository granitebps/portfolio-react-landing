import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Disqus from 'disqus-react';
import Layout from '../../../components/Layout';
import Head from 'next/head';

function BlogDetails({ dataBlog, dataProfile }) {
  const blogId = dataBlog.data.id;
  const blogFile = dataBlog.data.title;

  const disqusShortname = 'granitebps-2'; //found in your Disqus.com dashboard
  const disqusConfig = {
    url: `https://granitebps.site`, //Homepage link of this site.
    identifier: blogId.toString(),
    title: blogFile,
  };

  return (
    <Layout data={dataProfile.data}>
      <Head>
        <title>Granite Bagas - {dataBlog.data.title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={dataBlog.data.body} />
        <meta property="og:title" content={dataBlog.data.title} />
        <meta property="og:description" content={dataBlog.data.body} />
        <meta property="og:image" content={dataBlog.data.image} />
        <meta property="og:url" content="https://granitebps.site" />
        <meta property="og:site_name" content="Granite Bagas" />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={dataBlog.data.title} />
        <meta name="twitter:description" content={dataBlog.data.body} />
        <meta name="twitter:image" content={dataBlog.data.image} />
        <meta name="twitter:site" content="@granitbps" />
        <meta name="twitter:creator" content="@granitbps" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <img
            src={dataBlog.data.image}
            alt={dataBlog.data.title}
            className="img-fluid mx-auto d-block"
            width="30%"
          />
          <ReactMarkdown
            source={dataBlog.data.body}
            escapeHtml={false}
          ></ReactMarkdown>
          <div className="mi-blog-details-comments mt-30">
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const resProfile = await fetch(`https://api.granitebps.com/api/v1/profile`);
  const dataProfile = await resProfile.json();
  const resBlog = await fetch(`https://api.granitebps.com/api/v1/blog/${id}`);
  const dataBlog = await resBlog.json();

  return {
    props: {
      dataProfile: dataProfile,
      dataBlog: dataBlog,
    },
  };
}

export default BlogDetails;
