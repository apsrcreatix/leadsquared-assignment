import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/logo.png';
import CartIcon from 'assets/images/cart.png';
import { CartInformationContext } from "contexts/CartInformationContext";
import $ from 'jquery';
 
const Header = () => {
  const iconStyle = { height: "28px" };
  const {
    localCartInformation,
    decreaseQuantityOfProduct,
    increaseQuantityofProduct,
    removeLocalCartInformation,
    totalCartPrice,
  } = useContext(CartInformationContext);

  return (
    <>
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
          data-toggle="modal"
          data-target="#cartModal"
        >
          <img src={CartIcon} alt={"Cart Icon"} style={{ ...iconStyle }} />
          <div className="rounded-circle position-absolute d-flex justify-content-center bg-primary text-white p-0 counter-circle">
            {Object.keys(localCartInformation).length
              ? Object.keys(localCartInformation).length
              : 0}
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="cartModal"
        tabIndex={-1}
        aria-labelledby="cartModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header border-0 p-4">
              <h5 className="modal-title" id="cartModalLabel">
                Your Cart
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="font-weight-lighter">
                  ×
                </span>
              </button>
            </div>
            <div className="modal-body p-4">
              {" "}
              <div className="container">
                <div className="row">
                  {Object.keys(localCartInformation)?.length ? (
                    Object.keys(localCartInformation).map((key, index) => (
                      <div
                        className="col-12 "
                        key={
                          localCartInformation[key]?.id +
                          "_" +
                          index +
                          "_" +
                          localCartInformation[key].name
                        }
                      >
                        <div className="p-4 my-3 rounded">
                          <img
                            className="py-2"
                            src={localCartInformation[key]?.image}
                            alt={localCartInformation[key]?.name}
                            style={{ width: "100%" }}
                          />
                          <p className="text-dark pt-1 mb-0 text-truncate">
                            {localCartInformation[key]?.name}
                          </p>
                          <p className="text-secondary font-weight-lighter pb-1 mb-0 text-truncate">
                            {localCartInformation[key]?.description}
                          </p>
                          <h6 className="pb-1 text-truncate text-dark text-truncate">
                            Rs. {localCartInformation[key]?.price}
                          </h6>
                          {
                            <div
                              className="btn-group w-100"
                              role="group"
                              aria-label="Mutation buttons"
                            >
                              <button
                                type="button"
                                className="btn btn-outline-primary"
                                onClick={() => decreaseQuantityOfProduct(key)}
                              >
                                -
                              </button>
                              <div
                                type="button"
                                className="btn btn-white text-dark"
                                readOnly
                              >
                                <strong className="text-primary">
                                  {localCartInformation[key]?.quantity}
                                </strong>
                              </div>
                              <button
                                type="button"
                                className={
                                  localCartInformation[key].total_quantity ===
                                  localCartInformation[key]?.quantity
                                    ? "btn btn btn-secondary text-white"
                                    : "btn btn btn-outline-primary"
                                }
                                disabled={
                                  localCartInformation[key].total_quantity ===
                                  localCartInformation[key]?.quantity
                                }
                                onClick={() => {
                                  increaseQuantityofProduct(key);
                                }}
                              >
                                +
                              </button>
                            </div>
                          }
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="w-100 py-5">
                      <h1 className="text-secondary text-center  w-100">
                        Your Cart is Empty 🙊
                      </h1>
                      <p className="text-muted text-center">
                        Please add items to cart by clicking "Shop More" 👇🏽{" "}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 position-relative p-4">
              <div
                className="float-left px-4 position-absolute text-muted"
                style={{ left: "0.75rem" }}
              >
                {" "}
                <b className="text-primary h5 d-block mb-0">
                  {" "}
                  Rs. {totalCartPrice}
                </b>
                <small className="mt-0"> Total Price</small>{" "}
              </div>
              <button
                type="button"
                className="btn btn-white text-secondary"
                data-dismiss="modal"
              >
                Shop More
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  removeLocalCartInformation();
                  $("#cartModal").modal("hide");
                }}
              >
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default Header;