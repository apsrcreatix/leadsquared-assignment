import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/logo.png';
import CartIcon from 'assets/images/cart.png';
import { CartInformationContext } from "contexts/CartInformationContext";

const Header = () => {
  const iconStyle = { height: "28px" };
  const { localCartInformation } = useContext(CartInformationContext);

    return (
      <nav
        style={{ margin: "0 -15px" }}
        className="header-shadow navbar navbar-expand-lg navbar-light bg-white fixed-top px-4"
      >
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt={"Logo"} style={{ ...iconStyle }} />
        </Link>
        <div
          role="button"
          className="btn btn-link text-dark position-relative float-right ml-auto"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img src={CartIcon} alt={"Cart Icon"} style={{ ...iconStyle }} />
          <div className="rounded-circle position-absolute d-flex justify-content-center bg-primary text-white p-0 counter-circle">
            {localCartInformation?.length ? localCartInformation?.length : 0}
          </div>
          <div className="dropdown-menu dropdown-menu-right border-0 shadow-lg">
            <button className="dropdown-item" type="button">
              Action
            </button>
          </div>
        </div>
      </nav>
    );

}

export default Header;