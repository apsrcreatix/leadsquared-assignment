import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/logo.png';
import CartIcon from 'assets/images/cart.png';

const Header = () => {
  const iconStyle = { height: "28px" };

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt={"Logo"} style={{...iconStyle}} />
        </Link>
        <button className="btn btn-link text-dark position-relative">
          <img src={CartIcon} alt={"Cart Icon"} style={{...iconStyle}} />
          <div  className="rounded-circle position-absolute d-flex justify-content-center bg-primary text-white p-0 counter-circle">0</div>
        </button>
      </nav>
    );

}

export default Header;