import React from 'react';
import Header from '../Header';

export default function CommonLayout({children}) {
    return <div className="container-fluid">
        <Header />
        {children}
    </div>
}