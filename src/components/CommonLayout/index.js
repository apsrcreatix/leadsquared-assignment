import React from 'react';
import Header from '../Header';

export default function CommonLayout({children}) {
    return (
      <div className="container-fluid">
        <Header />
        <div className="w-100 my-5 py-2" />
       {children}
        <div className="w-100 my-5 py-2" />
      </div>
    );
}