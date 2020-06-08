import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Disqus from 'disqus-react';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import Error from '../components/Error';
import useAxios from '../utils/useAxios';
import { Helmet } from 'react-helmet';

function BlogDetails(props) {
  const blogId = props.match.params.id;
  const blogFile = props.match.params.title;
  const [
    { data: dataBlog, loading: loadingBlog, error: errorBlog },
    refetchBlog,
  ] = useAxios(`blog/${blogId}`, { useCache: false });

  const disqusShortname = 'granitebps-2'; //found in your Disqus.com dashboard
  const disqusConfig = {
    url: `https://granitebps.com`, //Homepage link of this site.
    identifier: blogId,
    title: blogFile,
  };

  if (loadingBlog) {
    return <Loading />;
  }

  if (errorBlog) {
    return <Error retry={refetchBlog} />;
  }

  return (
    <Layout>
      <Helmet>
        <title>Granite Bagas - {dataBlog.data.title}</title>
        <meta name="description" content={dataBlog.data.body} />
        <meta property="og:title" content={dataBlog.data.title} />
        <meta property="og:description" content={dataBlog.data.body} />
        <meta property="og:image" content={dataBlog.data.image} />
        <meta property="og:url" content="https://granitebps.com" />
        <meta property="og:site_name" content="Granite Bagas" />
        <meta name="twitter:title" content={dataBlog.data.title} />
        <meta name="twitter:description" content={dataBlog.data.body} />
        <meta name="twitter:image" content={dataBlog.data.image} />
        <meta name="twitter:site" content="@granitbps" />
        <meta name="twitter:creator" content="@granitbps" />
      </Helmet>

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

export default BlogDetails;
