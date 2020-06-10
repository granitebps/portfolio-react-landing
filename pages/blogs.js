import React, { useState } from 'react';
import Head from 'next/head';

import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import BlogsView from '../components/BlogsView';
import Pagination from '../components/Pagination';

function blogs({ dataBlog, dataProfile }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataBlog.data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout data={dataProfile.data}>
      <Head>
        <title>Granite Bagas - Blogs</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Blogs Granite Bagas" />
        <meta property="og:title" content="Blogs Page of Granite Bagas Site" />
        <meta property="og:description" content="Blogs Granite Bagas" />
        <meta
          property="og:image"
          content="http://api.granitebps.com/images/gbps.png"
        />
        <meta property="og:url" content="https://granitebps.com" />
        <meta property="og:site_name" content="Granite Bagas" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Blogs Page of Granite Bagas Site" />
        <meta name="twitter:description" content="Blogs Granite Bagas" />
        <meta
          name="twitter:image"
          content="http://api.granitebps.com/images/gbps.png"
        />
        <meta name="twitter:site" content="@granitbps" />
        <meta name="twitter:creator" content="@granitbps" />
        <meta name="twitter:card" value="summary" />
      </Head>

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

export async function getServerSideProps() {
  const resProfile = await fetch(`https://api.granitebps.com/api/v1/profile`);
  const dataProfile = await resProfile.json();
  const resBlog = await fetch(`https://api.granitebps.com/api/v1/blog`);
  const dataBlog = await resBlog.json();

  return {
    props: {
      dataProfile: dataProfile,
      dataBlog: dataBlog,
    },
  };
}

export default blogs;