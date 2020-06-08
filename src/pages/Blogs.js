import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Loading from '../components/Loading';
import Error from '../components/Error';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import BlogsView from '../components/BlogsView';
import Pagination from '../components/Pagination';
import useAxios from '../utils/useAxios';

function Blogs() {
  const [
    { data: dataBlog, loading: loadingBlog, error: errorBlog },
    refetchBlog,
  ] = useAxios('blog', { useCache: false });
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  if (loadingBlog) {
    return <Loading />;
  }

  if (errorBlog) {
    return <Error retry={refetchBlog} />;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataBlog.data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Helmet>
        <title>Granite Bagas - Blogs</title>
        <meta name="description" content="Blogs Granite Bagas" />
        <meta property="og:title" content="Blogs Page of Granite Bagas Site" />
        <meta property="og:description" content="Blogs Granite Bagas" />
        <meta
          property="og:image"
          content="http://api.granitebps.com/images/gbps.png"
        />
        <meta property="og:url" content="https://granitebps.com" />
        <meta property="og:site_name" content="Granite Bagas" />
        <meta name="twitter:title" content="Blogs Page of Granite Bagas Site" />
        <meta name="twitter:description" content="Blogs Granite Bagas" />
        <meta
          name="twitter:image"
          content="http://api.granitebps.com/images/gbps.png"
        />
        <meta name="twitter:site" content="@granitbps" />
        <meta name="twitter:creator" content="@granitbps" />
      </Helmet>

      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Recent Blogs" />
          <BlogsView blogs={currentPosts} />
          {!(dataBlog.data.length > postsPerPage) ? null : (
            <Pagination
              className="mt-50"
              itemsPerPage={postsPerPage}
              totalItems={dataBlog.data.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Blogs;
