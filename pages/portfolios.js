import React, { useState } from 'react';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import PortfoliosView from '../components/PortfoliosView';
import Head from 'next/head';
// import { baseAxios } from '../utils/useAxios';

function portfolio({ dataPortfolio }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [portfoliosPerPage] = useState(6);

  const indexOfLastPortfolios = currentPage * portfoliosPerPage;
  const indexOfFirstPortfolios = indexOfLastPortfolios - portfoliosPerPage;
  const currentPortfolios = dataPortfolio.data.slice(indexOfFirstPortfolios, indexOfLastPortfolios);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Head>
        <title>Granite Bagas - Portfolios</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Granite Bagas Portfolios" />
        <meta property="og:title" content="Portfolios Page of Granite Bagas Site" />
        <meta property="og:description" content="Granite Bagas Portfolios" />
        <meta property="og:image" content="https://api.granitebps.com/images/gbps.png" />
        <meta property="og:url" content="https://granitebps.com" />
        <meta property="og:site_name" content="Granite Bagas" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Portfolios Page of Granite Bagas Site" />
        <meta name="twitter:description" content="Granite Bagas Portfolios" />
        <meta name="twitter:image" content="https://api.granitebps.com/images/gbps.png" />
        <meta name="twitter:site" content="@granitbps" />
        <meta name="twitter:creator" content="@granitbps" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Portfolios" />
          <PortfoliosView portfolios={currentPortfolios} />
          {!(dataPortfolio.data.length > portfoliosPerPage) ? null : (
            <Pagination
              className="mt-50"
              itemsPerPage={portfoliosPerPage}
              totalItems={dataPortfolio.data.length}
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
  // const { data: dataPortfolio } = await baseAxios.get('portfolio');
  const dataPortfolio = require('../data/portfolio.json');

  return {
    props: {
      dataPortfolio: dataPortfolio,
    },
  };
}

export default portfolio;
