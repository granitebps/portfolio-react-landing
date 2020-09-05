import { useRouter } from 'next/router';

function Error({ statusCode }) {
  const router = useRouter();
  const handleRetry = () => {
    router.reload();
  };

  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container text-center">
        <img src="/img/500.png" alt="ErrorImg" className="img-fluid align-self-center mt-75" />
        <h1 className="font-large-2 my-2">
          {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
        </h1>
        <button onClick={handleRetry} className="btn btn-primary btn-lg">
          Retry
        </button>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
