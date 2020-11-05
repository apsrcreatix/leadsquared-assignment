import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PatternSlice from 'assets/images/dot-grid.png';

export default function CommonLayout({children}) {
    return (
      <div
            className="container-fluid"
            style={{
          background: `linear-gradient(to bottom, #ffffff, #ffffff90, #ffffff50), url(${PatternSlice})`,
        }}
      >
        <Header />
        <div className="w-100 my-5 py-2" />
        {children}
        <div className="w-100 my-5 py-2" />
        <Footer/>
      </div>
    );
}