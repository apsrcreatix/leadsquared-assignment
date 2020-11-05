import React from 'react';
import Loader from '../Loader';

const PageLoader = () => {
    return (
      <div className="d-flex justify-content-center align-items-center w-100vw h-100vh">
        <Loader type="primary"/>
      </div>
    );
}

export default PageLoader;