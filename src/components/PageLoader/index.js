import React from 'react';

const PageLoader = () => {
    return (
      <div className="d-flex justify-content-center align-items-center w-100vw h-100vh">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
}

export default PageLoader;