import React, { useState } from 'react';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import PortfoliosView from '../components/PortfoliosView';
import useAxios from '../utils/useAxios';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Helmet } from 'react-helmet';

function Portfolios() {
  const [{ data, loading, error }, refetch] = useAxios('portfolio', {
    useCache: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [portfoliosPerPage] = useState(6);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error retry={refetch} />;
  }

  const indexOfLastPortfolios = currentPage * portfoliosPerPage;
  const indexOfFirstPortfolios = indexOfLastPortfolios - portfoliosPerPage;
  const currentPortfolios = data.data.slice(
    indexOfFirstPortfolios,
    indexOfLastPortfolios
  );

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Helmet>
        <title>Granite Bagas - Portfolios</title>
        <meta name='description' content='Granite Bagas Portfolios' />
        <meta
          property='og:title'
          content='Portfolios Page of Granite Bagas Site'
        />
        <meta property='og:description' content='Granite Bagas Portfolios' />
        <meta
          property='og:image'
          content='http://api.granitebps.com/images/gbps.png'
        />
        <meta property='og:url' content='https://granitebps.com' />
        <meta property='og:site_name' content='Granite Bagas' />
        <meta
          name='twitter:title'
          content='Portfolios Page of Granite Bagas Site'
        />
        <meta name='twitter:description' content='Granite Bagas Portfolios' />
        <meta
          name='twitter:image'
          content='http://api.granitebps.com/images/gbps.png'
        />
        <meta name='twitter:site' content='@granitbps' />
        <meta name='twitter:creator' content='@granitbps' />
      </Helmet>

      <div className='mi-about mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='Portfolios' />
          <PortfoliosView portfolios={currentPortfolios} />
          {!(data.data.length > portfoliosPerPage) ? null : (
            <Pagination
              className='mt-50'
              itemsPerPage={portfoliosPerPage}
              totalItems={data.data.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Portfolios;
